var size = 0;

var styleCache_MESUYU={}
var style_MESUYU = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(80,241,177,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_MESUYU[key]){
        var text = new ol.style.Text({
              font: '9.75px \'8514oem\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_MESUYU[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_MESUYU[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};