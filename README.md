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
... and/or controller...
```Javascript
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"custom/map/LeafletMap"
], function (Controller, LeafletMap) {
	"use strict";
	// ...
```

## API Reference
### Properties
|Name | Type | Default Value | Description
| ------------ | ------------ | ------------ | ------------ |
|width | [sap.ui.core.CSSSize](https://openui5.hana.ondemand.com/#/api/sap.ui.core.CSSSize) | 800px | Defines the map width.|
|height | [sap.ui.core.CSSSize](https://openui5.hana.ondemand.com/#/api/sap.ui.core.CSSSize) | 500px | Defines the map height.|
|geoJsonHighlights | string[] | | Defines the codes of the areas to be highlighted as an array of strings. In case of only one area to be highlighted, a string works out as well.|
|highlightColor | [sap.ui.core.CSSColor](https://openui5.hana.ondemand.com/api/sap.ui.core.CSSColor) | #ff7800 | Defines the highlighted areas' overlay color.|
|permanentTooltips | boolean | true | Defines whether to permanently display the highlighted areas' tooltips showing their area names.|
|drawOpenStreetMap | boolean | true | Defines whether to draw an OSM map as background layer.|
|drawGeoJsonMap | boolean | false | Defines whether to draw the entire geoJson map as background layer.|
|defaultZoomLevel | int | 4 | Defines the default map's zoom level.|
|autoZoom | boolean | true | Defines whether to ignore the default zoom level and zoom up if the default zoom level would prohibit the map from displaying all highlighted areas. This property is ignored if autoPanToSelectedAreas is set to false.|
|autoPanToSelectedAreas | boolean | true | Defines whether to automatically pan to highlighted areas.|
|geoJsonUrl | [sap.ui.core.URI](https://openui5.hana.ondemand.com/api/sap.ui.core.URI) | <sub>./custom/map/level3.geojson</sub> | URI of file  containing the GeoJson map to be displayed either entirely or only it's highlights.|
|geoJsonPropertyKey | string | LEVEL3_COD | Properties key in the GeoJson file's features aggregation used as key to identify areas to be highlighted.|
|templateUrl | [sap.ui.core.URI](https://openui5.hana.ondemand.com/api/sap.ui.core.URI) | <sub>https://{s}.tile.openstreet map.org/{z}/{x}/{y}.png</sub> | Defines the Leaflet title layer template URL. See [Leaflet reference](https://leafletjs.com/reference-1.6.0.html) for instructions on how to leverage additional map providers like mapbox. As special characters in XML views lead to problems, set this property programatically or via i18n file.|
|attribution | string | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Defines the map's attribution pane text. As special characters in XML views lead to problems, set this property programatically or via i18n file.|

See [sap.ui.core.Control in UI5 Reference](https://openui5.hana.ondemand.com/api/sap.ui.core.Control) for properties, aggregations, events, and methods derived from sap.ui.core.Control.

## References
* [Leaflet](https://github.com/Leaflet/Leaflet) - JavaScript library for mobile-friendly interactive maps
* [World Geographical Scheme for Recording Plant Distributions (WGSRPD)](https://github.com/tdwg/wgsrpd) - Sample Geojson file used in Sample Web Application
* [Biodiversity Information Standards](https://en.wikipedia.org/wiki/Biodiversity_Information_Standards) - Geographical Area Codes used in Sample Web Application
