var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Dissolved_1 = new ol.format.GeoJSON();
var features_Dissolved_1 = format_Dissolved_1.readFeatures(json_Dissolved_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dissolved_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolved_1.addFeatures(features_Dissolved_1);
var lyr_Dissolved_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dissolved_1, 
                style: style_Dissolved_1,
                popuplayertitle: 'Dissolved',
                interactive: true,
                title: '<img src="styles/legend/Dissolved_1.png" /> Dissolved'
            });
var format_commerce_specialise_2 = new ol.format.GeoJSON();
var features_commerce_specialise_2 = format_commerce_specialise_2.readFeatures(json_commerce_specialise_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_commerce_specialise_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_commerce_specialise_2.addFeatures(features_commerce_specialise_2);
var lyr_commerce_specialise_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_commerce_specialise_2, 
                style: style_commerce_specialise_2,
                popuplayertitle: 'commerce_specialise',
                interactive: true,
    title: 'commerce_specialise<br />\
    <img src="styles/legend/commerce_specialise_2_0.png" /> 1<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Dissolved_1.setVisible(true);lyr_commerce_specialise_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Dissolved_1,lyr_commerce_specialise_2];
lyr_Dissolved_1.set('fieldAliases', {'osm_id': 'osm_id', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_commerce_specialise_2.set('fieldAliases', {'osm_id': 'osm_id', 'type': 'type', 'name': 'name', 'brand': 'brand', 'operator': 'operator', 'wheelchair': 'wheelchair', 'opening_ho': 'opening_ho', 'level': 'level', 'siret': 'siret', 'profession': 'profession', 'wikidata': 'wikidata', 'website': 'website', 'phone': 'phone', 'email': 'email', 'facebook': 'facebook', 'address': 'address', 'com_insee': 'com_insee', 'com_nom': 'com_nom', 'last_updat': 'last_updat', });
lyr_Dissolved_1.set('fieldImages', {'osm_id': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_commerce_specialise_2.set('fieldImages', {'osm_id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'brand': 'TextEdit', 'operator': 'TextEdit', 'wheelchair': 'TextEdit', 'opening_ho': 'TextEdit', 'level': 'TextEdit', 'siret': 'TextEdit', 'profession': 'TextEdit', 'wikidata': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'email': 'TextEdit', 'facebook': 'TextEdit', 'address': 'TextEdit', 'com_insee': 'TextEdit', 'com_nom': 'TextEdit', 'last_updat': 'TextEdit', });
lyr_Dissolved_1.set('fieldLabels', {'osm_id': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'hidden field', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'hidden field', });
lyr_commerce_specialise_2.set('fieldLabels', {'osm_id': 'inline label - always visible', 'type': 'hidden field', 'name': 'hidden field', 'brand': 'hidden field', 'operator': 'hidden field', 'wheelchair': 'hidden field', 'opening_ho': 'hidden field', 'level': 'hidden field', 'siret': 'hidden field', 'profession': 'hidden field', 'wikidata': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'email': 'hidden field', 'facebook': 'hidden field', 'address': 'hidden field', 'com_insee': 'hidden field', 'com_nom': 'hidden field', 'last_updat': 'hidden field', });
lyr_commerce_specialise_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});