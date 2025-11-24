ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([3970287.371093, 3849462.403110, 3972101.328986, 3849978.819806]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_test_1 = new ol.format.GeoJSON();
var features_test_1 = format_test_1.readFeatures(json_test_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test_1.addFeatures(features_test_1);
var lyr_test_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_test_1, 
                style: style_test_1,
                popuplayertitle: 'test',
                interactive: true,
    title: 'test<br />\
    <img src="styles/legend/test_1_0.png" /> <br />\
    <img src="styles/legend/test_1_1.png" /> <br />\
    <img src="styles/legend/test_1_2.png" /> <br />\
    <img src="styles/legend/test_1_3.png" /> <br />\
    <img src="styles/legend/test_1_4.png" /> <br />\
    <img src="styles/legend/test_1_5.png" /> <br />\
    <img src="styles/legend/test_1_6.png" /> <br />\
    <img src="styles/legend/test_1_7.png" /> <br />\
    <img src="styles/legend/test_1_8.png" /> <br />\
    <img src="styles/legend/test_1_9.png" /> <br />\
    <img src="styles/legend/test_1_10.png" /> <br />\
    <img src="styles/legend/test_1_11.png" /> <br />\
    <img src="styles/legend/test_1_12.png" /> <br />\
    <img src="styles/legend/test_1_13.png" /> <br />\
    <img src="styles/legend/test_1_14.png" /> <br />\
    <img src="styles/legend/test_1_15.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_test_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_test_1];
lyr_test_1.set('fieldAliases', {'Number': 'Number', 'Name_EN': 'Name_EN', 'Name_AR': 'Name_AR', 'Type': 'Type', 'Latitude_Y': 'Latitude_Y', 'Longitude_': 'Longitude_', 'X_Y': 'X_Y', 'X_Y_X': 'X_Y_X', 'X_Y_Y': 'X_Y_Y', });
lyr_test_1.set('fieldImages', {'Number': 'TextEdit', 'Name_EN': 'TextEdit', 'Name_AR': 'TextEdit', 'Type': 'TextEdit', 'Latitude_Y': 'TextEdit', 'Longitude_': 'TextEdit', 'X_Y': 'TextEdit', 'X_Y_X': 'TextEdit', 'X_Y_Y': 'TextEdit', });
lyr_test_1.set('fieldLabels', {'Number': 'no label', 'Name_EN': 'no label', 'Name_AR': 'no label', 'Type': 'no label', 'Latitude_Y': 'no label', 'Longitude_': 'no label', 'X_Y': 'no label', 'X_Y_X': 'no label', 'X_Y_Y': 'inline label - always visible', });
lyr_test_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});