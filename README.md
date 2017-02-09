# Hawkular Client - Javascript

## Client for Hawkular Metrics
This is a javascript client  used to connect to a running  Hawkular instance.

To install:
````
npm install hawkular-client-javascript --save

````

### CLI:

````
    npm run prebuild       - install NPM dependancies
    npm run build          - build the library files
    npm run test           - run the tests
    npm run test:watch     - run the tests (watch-mode)
    npm run coverage       - run the tests with coverage
    npm run coverage:watch - run the tests with coverage (watch-mode)
    npm run pack           - build the library, make sure the tests passes, and then pack the library (creates .tgz)
    npm run release        - prepare package for next release

````


## Output Artifacts
- dist/main.js - node.js artifact
- dist/main.browser.js - browserify artifact
- dist/main.d.ts - _Optional_ Type definition file for typescript clients

## Todo
- [x] Metrics API _(WIP)_
- [ ] Inventory API
- [ ] Alerts API

License
-------

Hawkular-APM is released under Apache License, Version 2.0 as described in the [LICENSE](LICENSE) document

```
   Copyright 2015-2017 Red Hat, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

