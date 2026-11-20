// Renombra SOLO identificadores libres según un mapa JSON. Uso: node renombrar.js codigo.js mapa.json > salida.js
const ts = require('typescript'), fs = require('fs');
const raw = fs.readFileSync(process.argv[2], 'utf8'), mp = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
const pre = 'var __x={', post = '}';
const wrapped = /^\s*[\w$]+\s*\(/.test(raw) && !/^\s*(function|class|var|let|const)\b/.test(raw);
const src = wrapped ? pre + raw + post : raw;
const sf = ts.createSourceFile('x.js', src, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
const edits = [];
function names(b, out) { if (!b) return; if (ts.isIdentifier(b)) out.add(b.text); else if (ts.isObjectBindingPattern(b) || ts.isArrayBindingPattern(b)) b.elements.forEach(e => e.name && names(e.name, out)); }
function walk(node, scopes) {
  const newScope = ts.isFunctionLike(node) || ts.isBlock(node) || ts.isForStatement(node) || ts.isForOfStatement(node) || ts.isForInStatement(node) || ts.isCatchClause(node) || ts.isClassLike(node) || ts.isCaseBlock(node);
  if (newScope) {
    const own = new Set();
    if (ts.isFunctionLike(node)) { node.parameters?.forEach(p => names(p.name, own)); if (node.name && ts.isIdentifier(node.name) && ts.isFunctionExpression(node)) own.add(node.name.text); }
    if (ts.isCatchClause(node) && node.variableDeclaration) names(node.variableDeclaration.name, own);
    if (ts.isClassExpression(node) && node.name) own.add(node.name.text);
    const body = ts.isFunctionLike(node) ? node.body : null;
    const scan = n => {
      if (ts.isVariableDeclaration(n)) names(n.name, own);
      if ((ts.isFunctionDeclaration(n) || ts.isClassDeclaration(n)) && n.name && n !== node) own.add(n.name.text);
      if (n !== node && (ts.isFunctionLike(n) || ts.isClassLike(n))) return;
      if (n !== node && n !== body && (ts.isBlock(n) || ts.isForStatement(n) || ts.isForOfStatement(n) || ts.isForInStatement(n) || ts.isCatchClause(n) || ts.isCaseBlock(n))) return;
      ts.forEachChild(n, scan);
    };
    ts.forEachChild(node, scan);
    if (body) ts.forEachChild(body, function sv(n) { if (ts.isVariableDeclarationList(n) && !(n.flags & 3)) n.declarations.forEach(d => names(d.name, own)); if (ts.isFunctionLike(n) || ts.isClassLike(n)) return; ts.forEachChild(n, sv); });
    scopes = [...scopes, own];
  }
  if (ts.isIdentifier(node) && Object.prototype.hasOwnProperty.call(mp, node.text)) {
    const p = node.parent;
    const isProp = (ts.isPropertyAccessExpression(p) && p.name === node) || (ts.isPropertyAssignment(p) && p.name === node) || (ts.isMethodDeclaration(p) && p.name === node) || (ts.isPropertyDeclaration(p) && p.name === node) || (ts.isGetAccessor(p) && p.name === node) || (ts.isSetAccessor(p) && p.name === node) || (ts.isBindingElement(p) && p.propertyName === node);
    const isDecl = (ts.isVariableDeclaration(p) && p.name === node) || (ts.isParameter(p) && p.name === node);
    if (!isProp && !isDecl && !scopes.some(s => s.has(node.text))) {
      if (ts.isShorthandPropertyAssignment(p)) edits.push([node.getStart(sf), node.getEnd(), node.text + ':' + mp[node.text]]);
      else edits.push([node.getStart(sf), node.getEnd(), mp[node.text]]);
    }
  }
  ts.forEachChild(node, c => walk(c, scopes));
}
walk(sf, []);
let out = src; edits.sort((a, b) => b[0] - a[0]).forEach(([s, e, t]) => { out = out.slice(0, s) + t + out.slice(e); });
if (wrapped) out = out.slice(pre.length, out.length - post.length);
process.stdout.write(out);
