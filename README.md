# jsTemplate 

This Template should get you up and running with testdriven Javascript in no time

[![Build Status](https://travis-ci.org/sebs/jsTemplate.png?branch=master)](https://travis-ci.org/sebs/jsTemplate)

## Installation

We use a variety of NPM Modules for Build and Development. These come by NPM packages.

```
npm install
grunt-buster@0.1.2 node_modules/grunt-buster
├── growl@1.7.0
└── when@1.3.0

grunt-contrib-jshint@0.1.0 node_modules/grunt-contrib-jshint
└── jshint@0.9.1 (minimatch@0.0.5, cli@0.4.3)

grunt-cli@0.1.6 node_modules/grunt-cli
├── nopt@1.0.10 (abbrev@1.0.4)
└── findup-sync@0.1.1 (glob@3.1.20, lodash@0.9.2)

bower@0.7.0 node_modules/bower
├── stable@0.1.3
├── archy@0.0.2
├── colors@0.6.0-1
├── semver@1.1.3
├── tmp@0.0.16
├── async@0.1.22
├── mkdirp@0.3.4
├── rimraf@2.0.3 (graceful-fs@1.1.14)
├── nopt@2.0.0 (abbrev@1.0.4)
├── fstream@0.1.22 (inherits@1.0.0, graceful-fs@1.2.0)
├── read-package-json@0.1.13 (graceful-fs@1.2.0, lru-cache@2.0.4, slide@1.1.3, npmlog@0.0.2)
├── glob@3.1.20 (inherits@1.0.0, graceful-fs@1.2.0, minimatch@0.2.9)
├── tar@0.1.16 (inherits@1.0.0, block-stream@0.0.6)
├── rc@0.0.8 (config-chain@0.3.3, optimist@0.3.5)
├── vows@0.6.4 (eyes@0.1.8, diff@1.0.4)
├── unzip@0.0.4 (pullstream@0.0.4, binary@0.3.0)
├── request@2.11.4
├── hogan.js@2.0.0
└── lodash@0.9.2

grunt@0.4.0rc7 node_modules/grunt
├── which@1.0.5
├── dateformat@1.0.2-1.2.3
├── colors@0.6.0-1
├── findup-sync@0.1.1
├── hooker@0.2.3
├── async@0.1.22
├── eventemitter2@0.4.11
├── coffee-script@1.3.3
├── iconv-lite@0.2.7
├── nopt@1.0.10 (abbrev@1.0.4)
├── rimraf@2.0.3 (graceful-fs@1.1.14)
├── underscore.string@2.2.0rc
├── glob@3.1.20 (inherits@1.0.0, graceful-fs@1.2.0)
├── minimatch@0.2.9 (sigmund@1.0.0, lru-cache@2.0.4)
├── lodash@0.9.2
└── js-yaml@1.0.3 (argparse@0.1.12)

buster@0.6.12 node_modules/buster
├── buster-sinon@0.6.0
├── buster-format@0.5.5
├── buster-evented-logger@0.4.4
├── buster-assertions@0.10.3
├── when@1.3.0
├── buster-autotest@0.2.0 (buster-glob@0.3.2, fs-watch-tree@0.2.2)
├── sinon@1.5.2
├── buster-core@0.6.4
├── buster-static@0.5.1 (mkdirp@0.3.4, buster-cli@0.5.2, ramp-resources@0.4.1)
├── buster-syntax@0.4.2 (uglify-js@1.2.6, jsdom@0.2.19)
├── buster-test@0.6.1 (buster-terminal@0.4.1, jsdom@0.2.19)
├── buster-server-cli@0.2.2 (platform@1.0.0, paperboy@0.0.5, ejs@0.4.3, ramp@0.6.0, buster-cli@0.5.2, ramp-resources@0.5.0, phantom@0.3.5)
└── buster-test-cli@0.7.5 (stack-filter@0.1.0, ansi-colorizer@0.5.0, bane@0.2.0, ansi-grid@0.5.0, platform@1.0.0, ejs@0.4.3, buster-analyzer@0.4.0, buster-cli@0.5.2, lodash@0.8.2, ramp@0.6.0)

grunt-contrib-jsdoc@0.2.2 node_modules/grunt-contrib-jsdoc
└── jsdoc@3.2.0-dev (js2xmlparser@0.1.0, crypto-browserify@0.1.1, wrench@1.3.9, taffydb@2.6.2, async@0.1.22, github-flavored-markdown@1.0.1, underscore@1.4.2, markdown@0.4.0, jshint@0.9.1)
```

## Install Bower Deps

```
bower install
bower cloning git://github.com/components/jquery.git
bower cached git://github.com/components/jquery.git
bower fetching jquery
bower checking out jquery#1.8.3
bower copying /Users/Admin/.bower/cache/jquery/cf68c4c4e7507c8d20fee7b5f26709d9
bower installing jquery#1.8.3
```


## Run Tests

```
npm test
Running "jshint:all" (jshint) task
>> 2 files lint free.

Running "buster" task
buster-server running on http://localhost:1111
PhantomJS 1.8.1, Mac OS X:                                                                                                          ..
1 test case, 2 tests, 2 assertions, 0 failures, 0 errors, 0 timeouts
Finished in 0.009s


```


