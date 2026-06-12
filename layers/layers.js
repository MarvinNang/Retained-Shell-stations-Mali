ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-8.262838, 12.556537, -7.674888, 12.759150]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Bamako_Kati_29N_2 = new ol.format.GeoJSON();
var features_Bamako_Kati_29N_2 = format_Bamako_Kati_29N_2.readFeatures(json_Bamako_Kati_29N_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bamako_Kati_29N_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bamako_Kati_29N_2.addFeatures(features_Bamako_Kati_29N_2);
var lyr_Bamako_Kati_29N_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bamako_Kati_29N_2, 
                style: style_Bamako_Kati_29N_2,
                popuplayertitle: 'Bamako_Kati_29N',
                interactive: true,
                title: '<img src="styles/legend/Bamako_Kati_29N_2.png" /> Bamako_Kati_29N'
            });
var format_Bamako_Kati_min_7racks_SS_29N_3 = new ol.format.GeoJSON();
var features_Bamako_Kati_min_7racks_SS_29N_3 = format_Bamako_Kati_min_7racks_SS_29N_3.readFeatures(json_Bamako_Kati_min_7racks_SS_29N_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bamako_Kati_min_7racks_SS_29N_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bamako_Kati_min_7racks_SS_29N_3.addFeatures(features_Bamako_Kati_min_7racks_SS_29N_3);
var lyr_Bamako_Kati_min_7racks_SS_29N_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bamako_Kati_min_7racks_SS_29N_3, 
                style: style_Bamako_Kati_min_7racks_SS_29N_3,
                popuplayertitle: 'Bamako_Kati_min_7racks_SS_29N',
                interactive: true,
                title: '<img src="styles/legend/Bamako_Kati_min_7racks_SS_29N_3.png" /> Bamako_Kati_min_7racks_SS_29N'
            });
var format_Stations_Shell_Solaires_120626_4 = new ol.format.GeoJSON();
var features_Stations_Shell_Solaires_120626_4 = format_Stations_Shell_Solaires_120626_4.readFeatures(json_Stations_Shell_Solaires_120626_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Stations_Shell_Solaires_120626_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stations_Shell_Solaires_120626_4.addFeatures(features_Stations_Shell_Solaires_120626_4);
var lyr_Stations_Shell_Solaires_120626_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stations_Shell_Solaires_120626_4, 
                style: style_Stations_Shell_Solaires_120626_4,
                popuplayertitle: 'Stations_Shell_Solaires_12.06.26',
                interactive: true,
                title: '<img src="styles/legend/Stations_Shell_Solaires_120626_4.png" /> Stations_Shell_Solaires_12.06.26'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_Bamako_Kati_29N_2.setVisible(true);lyr_Bamako_Kati_min_7racks_SS_29N_3.setVisible(true);lyr_Stations_Shell_Solaires_120626_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelliteHybrid_1,lyr_Bamako_Kati_29N_2,lyr_Bamako_Kati_min_7racks_SS_29N_3,lyr_Stations_Shell_Solaires_120626_4];
lyr_Bamako_Kati_29N_2.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Bamako_Kati_min_7racks_SS_29N_3.set('fieldAliases', {'Number': 'Number', 'Site Name2': 'Site Name2', 'Site Type': 'Site Type', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'AREA OF SI': 'AREA OF SI', '60% loadin': '60% loadin', 'Solar pote': 'Solar pote', '# racks ca': '# racks ca', });
lyr_Stations_Shell_Solaires_120626_4.set('fieldAliases', {'Number': 'Number', 'Site Name2': 'Site Name2', 'Site Type': 'Site Type', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Usable_sur': 'Usable_sur', 'Total_area': 'Total_area', 'Racks_cap': 'Racks_cap', });
lyr_Bamako_Kati_29N_2.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Bamako_Kati_min_7racks_SS_29N_3.set('fieldImages', {'Number': 'TextEdit', 'Site Name2': 'TextEdit', 'Site Type': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'AREA OF SI': 'TextEdit', '60% loadin': 'TextEdit', 'Solar pote': 'TextEdit', '# racks ca': 'TextEdit', });
lyr_Stations_Shell_Solaires_120626_4.set('fieldImages', {'Number': 'TextEdit', 'Site Name2': 'TextEdit', 'Site Type': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Usable_sur': 'TextEdit', 'Total_area': 'TextEdit', 'Racks_cap': 'TextEdit', });
lyr_Bamako_Kati_29N_2.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Bamako_Kati_min_7racks_SS_29N_3.set('fieldLabels', {'Number': 'no label', 'Site Name2': 'inline label - always visible', 'Site Type': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'AREA OF SI': 'inline label - always visible', '60% loadin': 'inline label - always visible', 'Solar pote': 'inline label - always visible', '# racks ca': 'inline label - always visible', });
lyr_Stations_Shell_Solaires_120626_4.set('fieldLabels', {'Number': 'no label', 'Site Name2': 'inline label - always visible', 'Site Type': 'no label', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Usable_sur': 'inline label - always visible', 'Total_area': 'inline label - always visible', 'Racks_cap': 'inline label - always visible', });
lyr_Stations_Shell_Solaires_120626_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});