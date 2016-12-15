var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_PARSEL = new ol.format.GeoJSON();
var features_PARSEL = format_PARSEL.readFeatures(geojson_PARSEL, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARSEL = new ol.source.Vector();
jsonSource_PARSEL.addFeatures(features_PARSEL);var lyr_PARSEL = new ol.layer.Vector({
                source:jsonSource_PARSEL, 
                style: style_PARSEL,
                title: "PARSEL"
            });var format_YELALAN = new ol.format.GeoJSON();
var features_YELALAN = format_YELALAN.readFeatures(geojson_YELALAN, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YELALAN = new ol.source.Vector();
jsonSource_YELALAN.addFeatures(features_YELALAN);var lyr_YELALAN = new ol.layer.Vector({
                source:jsonSource_YELALAN, 
                style: style_YELALAN,
                title: "YEŞİL ALAN"
            });var format_SOSYALALANLAR = new ol.format.GeoJSON();
var features_SOSYALALANLAR = format_SOSYALALANLAR.readFeatures(geojson_SOSYALALANLAR, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOSYALALANLAR = new ol.source.Vector();
jsonSource_SOSYALALANLAR.addFeatures(features_SOSYALALANLAR);var lyr_SOSYALALANLAR = new ol.layer.Vector({
                source:jsonSource_SOSYALALANLAR, 
                style: style_SOSYALALANLAR,
                title: "SOSYAL ALANLAR"
            });var format_DOGALGAZ = new ol.format.GeoJSON();
var features_DOGALGAZ = format_DOGALGAZ.readFeatures(geojson_DOGALGAZ, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DOGALGAZ = new ol.source.Vector();
jsonSource_DOGALGAZ.addFeatures(features_DOGALGAZ);var lyr_DOGALGAZ = new ol.layer.Vector({
                source:jsonSource_DOGALGAZ, 
                style: style_DOGALGAZ,
                title: "DOGALGAZ"
            });var format_ATIKSUYAGMURSUYU = new ol.format.GeoJSON();
var features_ATIKSUYAGMURSUYU = format_ATIKSUYAGMURSUYU.readFeatures(geojson_ATIKSUYAGMURSUYU, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATIKSUYAGMURSUYU = new ol.source.Vector();
jsonSource_ATIKSUYAGMURSUYU.addFeatures(features_ATIKSUYAGMURSUYU);var lyr_ATIKSUYAGMURSUYU = new ol.layer.Vector({
                source:jsonSource_ATIKSUYAGMURSUYU, 
                style: style_ATIKSUYAGMURSUYU,
                title: "ATIKSU YAGMURSUYU"
            });var format_MESUYU = new ol.format.GeoJSON();
var features_MESUYU = format_MESUYU.readFeatures(geojson_MESUYU, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MESUYU = new ol.source.Vector();
jsonSource_MESUYU.addFeatures(features_MESUYU);var lyr_MESUYU = new ol.layer.Vector({
                source:jsonSource_MESUYU, 
                style: style_MESUYU,
                title: "İÇMESUYU"
            });

lyr_PARSEL.setVisible(true);lyr_YELALAN.setVisible(true);lyr_SOSYALALANLAR.setVisible(true);lyr_DOGALGAZ.setVisible(false);lyr_ATIKSUYAGMURSUYU.setVisible(false);lyr_MESUYU.setVisible(false);
var layersList = [baseLayer,lyr_PARSEL,lyr_YELALAN,lyr_SOSYALALANLAR,lyr_DOGALGAZ,lyr_ATIKSUYAGMURSUYU,lyr_MESUYU];
lyr_PARSEL.set('fieldAliases', {'ADA': 'ADA', 'PARSEL': 'PARSEL', 'MÜLKİYET': 'MÜLKİYET', 'FONKSİYON': 'FONKSİYON', 'ALANI': 'ALANI', });
lyr_YELALAN.set('fieldAliases', {'FONKSİYON': 'FONKSİYON', 'ALANI': 'ALANI', });
lyr_SOSYALALANLAR.set('fieldAliases', {'ADA': 'ADA', 'PARSEL': 'PARSEL', 'MÜLKİYET': 'MÜLKİYET', 'FONKSİYON': 'FONKSİYON', 'ALAN': 'ALAN', });
lyr_DOGALGAZ.set('fieldAliases', {'İmalat adı': 'İmalat adı', 'Uzunluk_m': 'Uzunluk_m', });
lyr_ATIKSUYAGMURSUYU.set('fieldAliases', {'İmalat_adı': 'İmalat_adı', 'Uzunluk_m': 'Uzunluk_m', });
lyr_MESUYU.set('fieldAliases', {'İmalat_adı': 'İmalat_adı', 'Uzunluk': 'Uzunluk', });
lyr_PARSEL.set('fieldImages', {'ADA': 'TextEdit', 'PARSEL': 'TextEdit', 'MÜLKİYET': 'TextEdit', 'FONKSİYON': 'TextEdit', 'ALANI': 'TextEdit', });
lyr_YELALAN.set('fieldImages', {'FONKSİYON': 'TextEdit', 'ALANI': 'TextEdit', });
lyr_SOSYALALANLAR.set('fieldImages', {'ADA': 'TextEdit', 'PARSEL': 'TextEdit', 'MÜLKİYET': 'TextEdit', 'FONKSİYON': 'TextEdit', 'ALAN': 'TextEdit', });
lyr_DOGALGAZ.set('fieldImages', {'İmalat adı': 'TextEdit', 'Uzunluk_m': 'TextEdit', });
lyr_ATIKSUYAGMURSUYU.set('fieldImages', {'İmalat_adı': 'TextEdit', 'Uzunluk_m': 'TextEdit', });
lyr_MESUYU.set('fieldImages', {'İmalat_adı': 'TextEdit', 'Uzunluk': 'TextEdit', });
lyr_PARSEL.set('fieldLabels', {'ADA': 'inline label', 'PARSEL': 'inline label', 'MÜLKİYET': 'inline label', 'FONKSİYON': 'inline label', 'ALANI': 'inline label', });
lyr_YELALAN.set('fieldLabels', {'FONKSİYON': 'inline label', 'ALANI': 'inline label', });
lyr_SOSYALALANLAR.set('fieldLabels', {'ADA': 'inline label', 'PARSEL': 'inline label', 'MÜLKİYET': 'inline label', 'FONKSİYON': 'inline label', 'ALAN': 'inline label', });
lyr_DOGALGAZ.set('fieldLabels', {'İmalat adı': 'inline label', 'Uzunluk_m': 'inline label', });
lyr_ATIKSUYAGMURSUYU.set('fieldLabels', {'İmalat_adı': 'inline label', 'Uzunluk_m': 'inline label', });
lyr_MESUYU.set('fieldLabels', {'İmalat_adı': 'inline label', 'Uzunluk': 'inline label', });
