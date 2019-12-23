# leaflet-ui5
Leaflet Custom Control for Open UI5

## Usage
Use the leaflet ui5 custom control to embed a mobile-friendly map into a SAPUI5 / OpenUI5 web application keeping the necessity for Javascript custom code at almost zero. Once the library is registered, the custom control can be declared in an XML view like any other UI5 control.

The library can also be used as a starting point for a more exhaustive Leaflet-based development project.

## Repository Stucture
* Folder /webapp/custom/map/ contains the leaflet-ui5 custom control and library file
* Folder /webapp/ contains an OpenUI5 sample application showing the library's main features.

## Get Started - Sample Application
Just clone or unzip, open in SAP UI5 Web IDE (cloud or personal edition) and execute index.html
![Screenshot](/doc/leaflet_ui5_screenshot_1.png)

## Get Started - Use leaflet-ui5 in other UI5 web applications
1. Copy folder /webapp/custom/ into your own project
2. Bind path to the folder in manifest.json file, e.g. as follows:
```Javascript
"sap.ui5": {
    //...
    "resourceRoots": {
        "custom.map": "./custom/map/"  
    },
    //...
}
```
3. Integrate Leaflet library and Leaflet CSS in index.html
```HTML
<!--bootloading leaflet-->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
   integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
   crossorigin=""></script>
```
4. Refer to the custom control in your view...
```XML
<mvc:View controllerName="demo.controller.MainView" 
	xmlns:mvc="sap.ui.core.mvc" 
	displayBlock="true" 
	xmlns ="sap.m" 
	xmlns:s="custom.map">
  <!--...-->
  <s:LeafletMap 
    id="map" 
    width="100%" 
    height="600px"/>
    <!--...-->
  </mvc:View>
```
and/or controller
```Javascript
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"custom/map/LeafletMap"
], function (Controller, LeafletMap) {
	"use strict";
	// ...
```

## References
* [Leaflet](https://github.com/Leaflet/Leaflet) - JavaScript library for mobile-friendly interactive maps
* [World Geographical Scheme for Recording Plant Distributions (WGSRPD)](https://github.com/tdwg/wgsrpd) - Sample Geojson file used in Sample Web Application
* [Biodiversity Information Standards](https://en.wikipedia.org/wiki/Biodiversity_Information_Standards) - Geographical Area Codes used in Sample Web Application