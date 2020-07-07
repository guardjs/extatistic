module.exports = {
  setcookie: /setcookie/g,
  eval: /eval/g,
  hexValue: /0[xX][0-9a-fA-F]+/g,
  docWrite: /document\.write/g,
  docEventListner: /document\.addEventListener/g,
  setCookie: /cookie\s*?=/g,
  singleChar: /\b\w\b/g,
  space: /\s/g,
  utfValue: /u[0-9a-z]4,8/g
}