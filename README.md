This script allows you to collect all the HTML templates in some
directory and put them into a single Javascript module which can be loaded
later, for instance by [RequireJS](http://requirejs.org/).

## INSTALLATION

Another way to install this package is to use `npm`:

```bash
$ sudo npm install -g tmplc
```

## USAGE

```bash
$ tmpls.js --dir directory/with/templates --out output/js/file.js
```

If no options are submited, the defaults are `templates` for the templates
directory and `templates.js` for the output file.
