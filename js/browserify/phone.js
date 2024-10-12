(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const phoneConvert = function (string) {
  let newString = string.match(/[0-9]{0,14}/g);
  if (newString === null) {
    return '';
  }

  // Join parts returned from RegEx match
  newString = newString.join('');

  // Start number with "+"
  // newString = '+' + newString;

  if (newString[0].includes('1')) {
    newString = '+' + newString;
  } else {
    newString = '+1' + newString;
  }

  // Limit length to 15 characters
  newString = newString.substring(0, 15);
  return newString;
};
exports.phoneConvert = phoneConvert;


},{}]},{},[1]);
