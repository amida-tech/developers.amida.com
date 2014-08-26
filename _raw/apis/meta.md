blue-button-meta
================

Metadata about Blue Button format internal structures

[![NPM](https://nodei.co/npm/blue-button-meta.png)](https://nodei.co/npm/blue-button-meta/)

[![Build Status](https://travis-ci.org/amida-tech/blue-button-meta.svg)](https://travis-ci.org/amida-tech/blue-button-meta)
[![Coverage Status](https://coveralls.io/repos/amida-tech/blue-button-meta/badge.png)](https://coveralls.io/r/amida-tech/blue-button-meta)

##Usage

``` javascript
var bbm = require("blue-button-meta");
var CCDA = bbm.CCDA;

//CCDA Document OID
console.log(CCDA.document.templateId);

//list of CCDA Templates and their OIDs
console.log(CCDA.templates);

//list of CCDA Sections and their OIDs
console.log(CCDA.sections);

//list of CCDA Clinical Statements and their OIDs
console.log(CCDA.statements);

//list of CCDA constraints
console.log(CCDA.constraints.templates);
console.log(CCDA.constraints.sections);

//list of supported master health record sections
console.log(bbm.supported_sections);
```
