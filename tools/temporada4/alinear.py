"""Extrae equivalencias de nombres minificados 0.10.13 -> Remaster alineando bloques de código idénticos en estructura."""
import re,json,sys
TOK=re.compile(r'`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*"|[A-Za-z_$][\w$]*|\d+\.?\d*|\.\d+|\S')
def blk(s,start):
  k=s.find('{',start);d=0
  while True:
    c=s[k]
    if c=='`': k=s.find('`',k+1)
    elif c=='{':d+=1
    elif c=='}':
      d-=1
      if d==0:return s[start:k+1]
    k+=1
def cls(s,name):
  m=re.search(r'(?:[,;\s}]|^)'+re.escape(name)+r'=class\b',s) or re.search(r'function '+re.escape(name)+r'\(',s)
  return blk(s,m.start()) if m else None
KW=set('let var const if else for of in return new this class extends super function true false null void typeof instanceof break continue while do switch case default try catch finally throw get set static async await Math Number Object Array String JSON Infinity NaN undefined window document Date Map Set Float32Array Int32Array Uint8Array Uint16Array'.split())
def align(a,b,mp,conf):
  ta=TOK.findall(a); tb=TOK.findall(b)
  if len(ta)!=len(tb): return False
  for x,y in zip(ta,tb):
    if x==y: continue
    if re.match(r'[A-Za-z_$]',x) and re.match(r'[A-Za-z_$]',y) and x not in KW:
      mp.setdefault(x,{}); mp[x][y]=mp[x].get(y,0)+1
  return True
