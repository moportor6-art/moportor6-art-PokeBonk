// Lista los identificadores libres (de ámbito de módulo) de un trozo de JS. Uso: node libres.js archivo.js
const ts = require('typescript'), fs = require('fs');
const src = fs.readFileSync(process.argv[2], 'utf8').replace(/^[,;]/, 'var __x');
const sf = ts.createSourceFile('x.js', src, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
const free = new Set();
function names(b, out) { if (!b) return; if (ts.isIdentifier(b)) out.add(b.text); else if (ts.isObjectBindingPattern(b) || ts.isArrayBindingPattern(b)) b.elements.forEach(e => e.name && names(e.name, out)); }
function walk(node, scopes) {
  let own = null;
  const newScope = ts.isFunctionLike(node) || ts.isBlock(node) || ts.isForStatement(node) || ts.isForOfStatement(node) || ts.isForInStatement(node) || ts.isCatchClause(node) || ts.isClassLike(node) || ts.isSourceFile(node) || ts.isCaseBlock(node);
  if (newScope) {
    own = new Set();
    if (ts.isFunctionLike(node)) { node.parameters?.forEach(p => names(p.name, own)); if (node.name && ts.isIdentifier(node.name) && (ts.isFunctionExpression(node))) own.add(node.name.text); }
    if (ts.isCatchClause(node) && node.variableDeclaration) names(node.variableDeclaration.name, own);
    if (ts.isClassExpression(node) && node.name) own.add(node.name.text);
    // declaraciones directas en este ámbito (var sube a la función; aquí basta con aproximarlo)
    const scan = n => {
      if (ts.isVariableDeclaration(n)) names(n.name, own);
      if ((ts.isFunctionDeclaration(n) || ts.isClassDeclaration(n)) && n.name) own.add(n.name.text);
      if (n !== node && (ts.isFunctionLike(n) || ts.isClassLike(n))) return;
      const body = ts.isFunctionLike(node) ? node.body : null;
      if (n !== node && n !== body && (ts.isBlock(n) || ts.isForStatement(n) || ts.isForOfStatement(n) || ts.isForInStatement(n) || ts.isCatchClause(n) || ts.isCaseBlock(n))) return;
      ts.forEachChild(n, scan);
    };
    ts.forEachChild(node, scan);
    if (ts.isFunctionLike(node) && node.body) ts.forEachChild(node.body, function sv(n) { if (ts.isVariableDeclarationList(n) && !(n.flags & 3)) n.declarations.forEach(d => names(d.name, own)); if (ts.isFunctionLike(n) || ts.isClassLike(n)) return; ts.forEachChild(n, sv); });
    scopes = [...scopes, own];
  }
  if (ts.isIdentifier(node)) {
    const p = node.parent;
    const isProp = (ts.isPropertyAccessExpression(p) && p.name === node) || (ts.isPropertyAssignment(p) && p.name === node) || (ts.isMethodDeclaration(p) && p.name === node) || (ts.isPropertyDeclaration(p) && p.name === node) || (ts.isGetAccessor(p) && p.name === node) || (ts.isSetAccessor(p) && p.name === node) || (ts.isBindingElement(p) && p.propertyName === node);
    const isDecl = (ts.isVariableDeclaration(p) && p.name === node) || (ts.isParameter(p) && p.name === node) || ((ts.isFunctionDeclaration(p) || ts.isFunctionExpression(p) || ts.isClassDeclaration(p) || ts.isClassExpression(p)) && p.name === node);
    if (ts.isShorthandPropertyAssignment(p)) { if (!scopes.some(s => s.has(node.text))) free.add(node.text); }
    else if (!isProp && !isDecl && !scopes.some(s => s.has(node.text))) free.add(node.text);
  }
  ts.forEachChild(node, c => walk(c, scopes));
}
walk(sf, []);
const glob = new Set('Math Number Object Array String JSON Infinity NaN undefined window document Date Map Set WeakMap Float32Array Int32Array Uint8Array Uint16Array Promise console Symbol Error parseInt parseFloat isFinite setTimeout clearTimeout requestAnimationFrame performance localStorage __x'.split(' '));
console.log(JSON.stringify([...free].filter(x => !glob.has(x)).sort()));
