var size = 0;

var styleCache_DOGALGAZ={}
var style_DOGALGAZ = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(197,203,75,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_DOGALGAZ[key]){
        var text = new ol.style.Text({
              font: '9.75px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_DOGALGAZ[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_DOGALGAZ[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};