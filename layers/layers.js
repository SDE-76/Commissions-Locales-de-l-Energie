var wms_layers = [];

var format_CLEcouleurs_0 = new ol.format.GeoJSON();
var features_CLEcouleurs_0 = format_CLEcouleurs_0.readFeatures(json_CLEcouleurs_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLEcouleurs_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLEcouleurs_0.addFeatures(features_CLEcouleurs_0);
var lyr_CLEcouleurs_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLEcouleurs_0, 
                style: style_CLEcouleurs_0,
                popuplayertitle: 'CLE couleurs',
                interactive: false,
    title: 'CLE couleurs<br />\
    <img src="styles/legend/CLEcouleurs_0_0.png" /> 1 - CLE entre Seine et Manche<br />\
    <img src="styles/legend/CLEcouleurs_0_1.png" /> 2 - CLE de la région de Fécamp à Goderville<br />\
    <img src="styles/legend/CLEcouleurs_0_2.png" /> 3 - CLE du Pays de Caux<br />\
    <img src="styles/legend/CLEcouleurs_0_3.png" /> 4 - CLE de Caux - Vallée de Seine<br />\
    <img src="styles/legend/CLEcouleurs_0_4.png" /> 5 - CLE de la Côte d\'Albâtre - Valmont<br />\
    <img src="styles/legend/CLEcouleurs_0_5.png" /> 6 - CLE de la région de Luneray<br />\
    <img src="styles/legend/CLEcouleurs_0_6.png" /> 7 - CLE de la région de Pavilly - Yerville<br />\
    <img src="styles/legend/CLEcouleurs_0_7.png" /> 9 - CLE de la région de Buchy<br />\
    <img src="styles/legend/CLEcouleurs_0_8.png" /> 10 - CLE de la région de Bellencombre - Longueville à Tôtes<br />\
    <img src="styles/legend/CLEcouleurs_0_9.png" /> 11 - CLE de la région Dieppoise<br />\
    <img src="styles/legend/CLEcouleurs_0_10.png" /> 12 - CLE de la région de Criel à Incheville à Londinières<br />\
    <img src="styles/legend/CLEcouleurs_0_11.png" /> 13 - CLE de la région d\'Aumale à Blangy - Neufchâtel<br />\
    <img src="styles/legend/CLEcouleurs_0_12.png" /> 14 - CLE du Pays de Bray<br />\
    <img src="styles/legend/CLEcouleurs_0_13.png" /> 16 - CLE des Portes Nord-Ouest de Rouen<br />'
        });
var format_Anciennescommunes_1 = new ol.format.GeoJSON();
var features_Anciennescommunes_1 = format_Anciennescommunes_1.readFeatures(json_Anciennescommunes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anciennescommunes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anciennescommunes_1.addFeatures(features_Anciennescommunes_1);
var lyr_Anciennescommunes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anciennescommunes_1, 
                style: style_Anciennescommunes_1,
                popuplayertitle: ' Anciennes communes',
                interactive: false,
                title: '<img src="styles/legend/Anciennescommunes_1.png" />  Anciennes communes'
            });
var format_Communes_2 = new ol.format.GeoJSON();
var features_Communes_2 = format_Communes_2.readFeatures(json_Communes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_2.addFeatures(features_Communes_2);
var lyr_Communes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_2, 
                style: style_Communes_2,
                popuplayertitle: 'Communes',
                interactive: true,
                title: '<img src="styles/legend/Communes_2.png" /> Communes'
            });
var format_CLE_3 = new ol.format.GeoJSON();
var features_CLE_3 = format_CLE_3.readFeatures(json_CLE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLE_3.addFeatures(features_CLE_3);
var lyr_CLE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLE_3, 
                style: style_CLE_3,
                popuplayertitle: 'CLE',
                interactive: false,
                title: '<img src="styles/legend/CLE_3.png" /> CLE'
            });
var group_Maps = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Maps'});

lyr_CLEcouleurs_0.setVisible(true);lyr_Anciennescommunes_1.setVisible(true);lyr_Communes_2.setVisible(true);lyr_CLE_3.setVisible(true);
var layersList = [lyr_CLEcouleurs_0,lyr_Anciennescommunes_1,lyr_Communes_2,lyr_CLE_3];
lyr_CLEcouleurs_0.set('fieldAliases', {'NUM_CLE': 'NUM_CLE', 'Entre': 'Entre', 'gestionnai': 'gestionnai', });
lyr_Anciennescommunes_1.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'CLE_CLE': 'CLE_CLE', });
lyr_Communes_2.set('fieldAliases', {'id': 'id', 'insee': 'Code INSEE', 'nom': 'Commune', 'Num_CLE': 'N° CLE', 'Nom_CLE': 'Nom CLE', 'Ecart': 'Ecart', 'Responsable_CLE': 'Technicien secteur', 'Responsable_maintenance': 'Responsable maintenance', });
lyr_CLE_3.set('fieldAliases', {'NUM_CLE': 'NUM_CLE', 'Entre': 'Entre', 'gestionnai': 'gestionnai', });
lyr_CLEcouleurs_0.set('fieldImages', {'NUM_CLE': 'TextEdit', 'Entre': 'TextEdit', 'gestionnai': 'TextEdit', });
lyr_Anciennescommunes_1.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'CLE_CLE': 'TextEdit', });
lyr_Communes_2.set('fieldImages', {'id': 'TextEdit', 'insee': 'TextEdit', 'nom': 'TextEdit', 'Num_CLE': 'TextEdit', 'Nom_CLE': 'TextEdit', 'Ecart': 'TextEdit', 'Responsable_CLE': 'TextEdit', 'Responsable_maintenance': 'TextEdit', });
lyr_CLE_3.set('fieldImages', {'NUM_CLE': 'TextEdit', 'Entre': 'TextEdit', 'gestionnai': 'TextEdit', });
lyr_CLEcouleurs_0.set('fieldLabels', {'NUM_CLE': 'no label', 'Entre': 'no label', 'gestionnai': 'no label', });
lyr_Anciennescommunes_1.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'CLE_CLE': 'no label', });
lyr_Communes_2.set('fieldLabels', {'id': 'hidden field', 'insee': 'inline label - always visible', 'nom': 'inline label - always visible', 'Num_CLE': 'inline label - always visible', 'Nom_CLE': 'inline label - always visible', 'Ecart': 'hidden field', 'Responsable_CLE': 'inline label - always visible', 'Responsable_maintenance': 'inline label - always visible', });
lyr_CLE_3.set('fieldLabels', {'NUM_CLE': 'no label', 'Entre': 'no label', 'gestionnai': 'no label', });
lyr_CLE_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});