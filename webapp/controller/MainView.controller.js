sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"custom/map/LeafletMap",
	"sap/ui/model/json/JSONModel"
], function (Controller, LeafletMap, JSONModel) {
	"use strict";
	// ...

	return Controller.extend("demo.controller.MainView", {
		onInit: function () {
			var oData = {'HighlightsCollection': [
				'GER'
				]};	
			var oJsonModel = new JSONModel(oData);
			this.byId('map').setModel(oJsonModel, 'highlights');
		},
		
		onAddAreas: function(evt){
			var sAreas = this.byId('inpArea').getValue().replace(/\s+/g, '').toUpperCase();
			var aAreas = sAreas.split(',');
			var oData = {'HighlightsCollection': aAreas};				
			this.byId('map').getModel('highlights').setData(oData);
		},
		
		onSwitchHighlights: function(evt){
			var oJsonModel = this.byId('map').getModel('highlights');
			if(oJsonModel.getData().HighlightsCollection[0] === 'GER'){
				var oData = {'HighlightsCollection': [
					'FRA', 'POR', 'CAL'
					]};	
			} else {
				oData = {'HighlightsCollection': [
					'GER'
					]};	
			}
			oJsonModel.setData(oData);
		},
		
		onDrawGeoJson: function(evt){
			this.byId('map').setDrawGeoJsonMap(true);
		}
	});
});