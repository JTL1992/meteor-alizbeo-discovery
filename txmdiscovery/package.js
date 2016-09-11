Package.describe({
  name: "alizbeo:txmdiscovery",
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'A package for modal discovery',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/JTL1992/meteor-alizbeo-discovery',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4.1');
  api.use(['ecmascript','templating','underscore','less'],'client');
  api.use(['peppelg:bootstrap-3-modal@1.0.4'],'client');
  api.use(['npm:container'])
  api.addFiles(['txmdiscovery.js',
                'client/discovery.html',
                'client/discovery.js',
                'client/txmDiscovery.less'],
                'client');
  api.export('TxmDiscovery','client');
});
Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('alizbeo:txmdiscovery');
  api.mainModule('txmdiscovery-tests.js');
});
