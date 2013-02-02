#!/usr/bin/env node

// ==========================================
// Copyright 2013 Denis Gonsiorovsky
// Licensed under The MIT License
// http://opensource.org/licenses/MIT
// ==========================================

var fs = require('fs');
var nopt = require('nopt');
var path = require('path');

function tab(n) {
  return Array(n*2).join(' ');
}

var knownOpts = {
  'dir': path,
  'out': path,
  'ext': [String, Array]
}

var shortHands = {
  'd' : ['--dir'],
  'o' : ['--out'],
  'e' : ['--ext']
}

var opts = nopt(knownOpts, shortHands);

var dir = opts['dir'] || 'templates';
var out = opts['out'] || 'templates.js';
var exts = opts['ext'] || ['html', 'ejs', 'tmpl'];
var body = '';
var rets = '';

var files = fs.readdirSync(dir);

for (var i = 0; i < files.length; i++) {
  var extension = files[i].slice(files[i].lastIndexOf('.') + 1);
  if (exts.indexOf(extension) === -1) {
    continue;
  }

  var tname = files[i].substr(0, files[i].lastIndexOf('.'));
  var tbody = fs.readFileSync(dir + '/' + files[i]).toString()
    .replace('\n', '\\\n' + tab(3))
    .replace('\'', '\\\'');
  body += tab(2) + 'var ' + tname + ' = \n' + tab(3) + '\'' + tbody + '\';\n\n';
  rets += tab(3) + tname + ': ' + tname + ',\n';
}

fs.writeFileSync(out,
  '\'use strict\';\n\ndefine(\n'
    + tab(1) + 'function() {\n'
      + body
      + tab(2) + 'return {\n' 
        + rets
      + tab(2) + '}\n'
    + tab(1) + '}\n'
  + ');\n'
);

