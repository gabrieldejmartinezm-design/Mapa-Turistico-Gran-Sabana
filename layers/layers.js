var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_mapa_1 = new ol.format.GeoJSON();
var features_mapa_1 = format_mapa_1.readFeatures(json_mapa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapa_1.addFeatures(features_mapa_1);
var lyr_mapa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapa_1, 
                style: style_mapa_1,
                popuplayertitle: 'mapa',
                interactive: true,
                title: '<img src="styles/legend/mapa_1.png" /> mapa'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_mapa_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_mapa_1];
lyr_mapa_1.set('fieldAliases', {'Atractivo': 'Atractivo', 'Tipo': 'Tipo', 'Coordenada': 'Coordenada', 'UTM ( E)': 'UTM ( E)', 'UTM (N)': 'UTM (N)', 'Dirección': 'Dirección', 'Municipio': 'Municipio', 'Estado': 'Estado', 'Descripci�': 'Descripci�', 'Sector Ind': 'Sector Ind', 'Parque Nac': 'Parque Nac', 'Servicios': 'Servicios', 'Ente Regul': 'Ente Regul', 'Registro F': 'Registro F', });
lyr_mapa_1.set('fieldImages', {'Atractivo': 'TextEdit', 'Tipo': 'TextEdit', 'Coordenada': 'TextEdit', 'UTM ( E)': 'TextEdit', 'UTM (N)': 'TextEdit', 'Dirección': 'TextEdit', 'Municipio': 'TextEdit', 'Estado': 'TextEdit', 'Descripci�': 'TextEdit', 'Sector Ind': 'TextEdit', 'Parque Nac': 'TextEdit', 'Servicios': 'TextEdit', 'Ente Regul': 'TextEdit', 'Registro F': 'ExternalResource', });
lyr_mapa_1.set('fieldLabels', {'Atractivo': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Coordenada': 'inline label - visible with data', 'UTM ( E)': 'inline label - visible with data', 'UTM (N)': 'inline label - visible with data', 'Dirección': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Descripci�': 'inline label - visible with data', 'Sector Ind': 'inline label - visible with data', 'Parque Nac': 'inline label - visible with data', 'Servicios': 'inline label - visible with data', 'Ente Regul': 'inline label - visible with data', 'Registro F': 'inline label - visible with data', });
lyr_mapa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});