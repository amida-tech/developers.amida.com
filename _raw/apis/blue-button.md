## Library interfaces/APIs

This library provides following functionality

- Parse XML documents (via libxmljs)
- Sense type of data (e.g. CCDA, C32, etc)
- Parse CCDA into JSON representation
	- Parse CCDA elements (sections) into JSON representation
- Generating JSON object based on data model

### Usage example

Require blue-button module

``` javascript
var bb = require("blue-button")
```

### parseXml()

Load some XML and parse it

``` javascript
var data = "some CCDA.xml data here...";

//parse xml into JS object
var doc = bb.parseXml(data);
```

Check XML parsing errors

``` javascript
console.log(doc.errors);
```

should be:

``` javascript
[]
``` 

here is XML itself:

``` javascript
console.log(doc.toString());
```

should be:

``` xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<?xml-stylesheet type="text/xsl" href="CDA.xsl"?>
<!-- Title: US_Realm_Header_Template -->
<ClinicalDocument xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:hl7-org:v3" xmlns:cda="urn:hl7-org:v3" xmlns:sdtc="urn:hl7-org:sdtc">
  <!-- ******************************************************** CDA Header 
		******************************************************** -->
  <realmCode code="US"/>
  <typeId root="2.16.840.1.113883.1.3" extension="POCD_HD000040"/>
  <!-- US General Header Template -->
  <templateId root="2.16.840.1.113883.10.20.22.1.1"/>
  <!-- *** Note: The next templateId, code and title will differ depending 
		on what type of document is being sent. *** -->
  <!-- conforms to the document specific requirements -->
  <templateId root="2.16.840.1.113883.10.20.22.1.2"/>
  
  ...and so on
```

### senseXml()

Let's sense document type from parsed XML:

``` javascript
//get document type (e.g. CCDA) of parsed document
var type = bb.senseXml(doc);

console.log(type);
```

getting:

``` javascript
{ type: 'ccda' }
```

### senseString()

Let's sense document type from string with health data:

``` javascript
//get document type (e.g. CCDA) of document from string (and return parsed xml if it is xml based type)
var result = bb.senseString(data);

//printing result:
console.log(result);
```

getting type as well as parsed XML for later user:

``` javascript
{ type: 'ccda', xml: { errors: [] } }
//xml "errors" is just default print of libxmljs parsed XML object

//in case of JSON stringified input, it will return {type: 'json', json: [json object here]}
```

Sensing CMS Blue Button data in text file:

``` javascript
//get document type (e.g. CMS) of document from string (and return format version)
var result = bb.senseString(data);

//printing result:
console.log(result); 
```
getting:

``` javascript
{ type: 'cms', version: '2.0' }
```

getting type as well as parsed XML for later user:

``` javascript

{ type: 'ccda', xml: { errors: [] } }
//xml "errors" is just default print of libxmljs parsed XML object

//in case of JSON stringified input, it will return {type: 'json', json: [json object here]}

```

### parseText()

Parsing into JSON data model from CMS text file

``` javascript
//read in the file
var textString = fs.readFileSync("cms_sample.txt").toString(); 

//convert the string text file into blue button model
var result = bb.parseText(textString); 

console.log(result);
```
getting:

``` javascript

{ data: 
   { demographics: 
      { name: [Object],
        dob: [Object],
        email: [Object],
        phone: [Object],
        address: [Object] },
     vitals: [ [Object], [Object] ],
     results: [ [Object] ],
     medications: [ [Object], [Object] ],
     allergies: [ [Object], [Object] ],
     immunizations: [ [Object], [Object], [Object] ],
     problems: [ [Object], [Object] ],
     insurance: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
     claims: [ [Object], [Object], [Object], [Object], [Object] ] },
  meta: 
   { type: 'cms',
     version: '2.0',
     timestamp: { date: '2013-03-16T05:10:00Z', precision: 'minute' } } }

``` 

Parsing into JSON data model from XML or from string

``` javascript
//convert Xml document into JSON
var result = bb.parseXml(doc);

//convert string into JSON
var result = bb.parseString(data);

console.log(result);
```

getting:

``` javascript
{ data: 
   { demographics: 
      { name: [Object],
        dob: [Object],
        ...
        birthplace: [Object],
        guardians: [Object] },
     vitals: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
     results: [ [Object] ],
     medications: [ [Object] ],
     encounters: [ [Object] ],
     allergies: [ [Object], [Object], [Object] ],
     immunizations: [ [Object], [Object], [Object], [Object] ],
     socialHistory: [ [Object] ],
     problems: [ [Object], [Object] ],
     procedures: [ [Object], [Object], [Object] ] },
  meta: { version: '0.0.4' },
  errors: 
   [ 'nullFlavor alert:  missing but required streetLines in Address -> Patient -> CCD',
     'nullFlavor alert:  missing but required value in PhysicalQuantity -> MedicationAdministration -> Prescription -> MedicationsSection -> CCD'
     ] }
```

Also, see [/example](./example) for example above as well as how to parse individual sections.


