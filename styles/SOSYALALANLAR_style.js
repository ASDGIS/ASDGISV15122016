var size = 0;

var styleCache_SOSYALALANLAR={}
var style_SOSYALALANLAR = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(98,98,98,0.83)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(5,96,223,0.83)"})
    })];
    if (feature.get("FONKSİYON") !== null) {
        var labelText = String(feature.get("FONKSİYON"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_SOSYALALANLAR[key]){
        var text = new ol.style.Text({
              font: '9.75px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(92, 92, 92, 255)"
              }),
            });
        styleCache_SOSYALALANLAR[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_SOSYALALANLAR[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};