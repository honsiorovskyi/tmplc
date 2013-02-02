This script allows you to collect all the HTML templates in some
directory and put them into a single Javascript module which can be loaded
later, for instance by [RequireJS](http://requirejs.org/).

### Installation

Another way to install this package is to use `npm`:

```bash
$ sudo npm install -g tmplc
```

### Usage

```bash
$ tmplc [options]
```

Options are:
<dl>
<dt><code>--dir|-d path</code></dt>
<dd>Use <code>path</code> for the templates directory. Default: <code>templates</code>.</dd>
<dt><code>--out|-o file</code></dt>
<dd>Use <code>file</code> as the output Javascript document. Default: <code>templates.js</code>.</dd>
<dt><code>--ext|-e ext</code></dt>
<dd>Use <code>ext</code> as the template's extension. Can be passed multiple times. Default: <code>html</code>, <code>ejs</code>, <code>tmpl</code>.</dd>
</dl>

##### For example:

```bash
$ tmplc --ext html --ext json --dir myapp/templates --out myapp/tmpl.js
```
