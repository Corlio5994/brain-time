var rect = document.getElementById("rect");
let positionX = 0;
let positionY = 0;
let id = 0;
let cssColors = ['lightsalmon', 'salmon','darksalmon','lightcoral', 'indianred',
'crimson', 'firebrick', 'red', 'darkred', 'coral', 'tomato', 'orangered', 'gold',
'orange', 'darkorange', 'lightyellow', 'lemonchiffon', 'lightgoldenrodyellow', 'papayawhip',
'moccasin', 'peachpuff', 'palegoldenrod', 'khaki', 'darkkhaki', 'yellow', 'lawngreen', 'chartreuse',
'limegreen', 'lime', 'forestgreen', 'green', 'darkgreen', 'greenyellow', 'yellowgreen', 'springgreen',
'mediumspringgreen', 'lightgreen', 'palegreen', 'darkseagreen', 'mediumseagreen', 'seagreen', 'olive', 
'darkolivegreen', 'olivedrab', 'lightcyan', 'cyan', 'aqua', 'aquamarine', 'mediumaquamarine', 'paleturquoise',
'turquoise', 'mediumturquoise', 'darkturquoise', 'lightseagreen', 'cadetblue', 'darkcyan', 'teal', 'powderblue',
'lightblue', 'skyblue', 'lightskyblue', 'dodgerblue', 'cornflower blue', 'steelblue', 'royalblue', 'blue', 'mediumblue',
'darkblue', 'navy', 'midnightblue', 'mediumslateblue', 'slateblue', 'darkslateblue', 'lavender', 'thistle', 'plum', 'violet',
'orchid', 'fuchsia', 'magenta', 'mediumorchid', 'mediumpurple', 'blueviolet', 'darkviolet', 'darkorchid', 'darkmagenta', 'purple',
'indigo', 'pink', 'lightpink', 'hotpink', 'deeppink', 'palevioletred', 'mediumvioletred', 'white', 'mintcream', 'aliceblue', 'whitesmoke', 'seashell', 'beige', 'oldlace',
'antiquewhite', 'linen', 'lavenderblush', 'mintyrose', 'gainsboro', 'lightgray', 'silver', 'darkgray', 'gray',
'dimgray', 'lightslategray', 'slategray', 'darkslategray', 'black', 'cornsilk', 'blanchedalmond', 'bisque', 
'navajowhite', 'wheat', 'burlywood', 'tan', 'rosybrown', 'sandybrown', 'goldenrod', 'peru', 'chocolate',
'saddlebrown', 'sienna', 'brown', 'maroon']; 

let drawGradient = function() {
    if (positionX > 360) {
        positionX = 0;
        positionY += 40;
    }
    let sq= document.createElement("div");
    sq.class = 'colorSwatch';
    sq.id = "Swatch " + id;
    sq.style.width = "40px";
    sq.style.height = "40px";
    sq.style.position = "absolute";
    sq.style.left = String(positionX) + "px";
    sq.style.top = String(positionY) + "px";
    var colorId = Math.floor(Math.random()*cssColors.length);
    sq.style.backgroundColor = cssColors[colorId];
    rect.appendChild(sq); 
    sq.addEventListener("click", function(){
        var select = document.getElementById("color-select");
        select.style.backgroundColor = sq.style.backgroundColor;
    });
    if (colorId != 0) {
        var cssColors1 = cssColors.slice(0,colorId);
        var cssColors2 = cssColors.slice(colorId +1, cssColors.length);
        cssColors = cssColors1.concat(cssColors2);
        }
    positionX +=40;
    id += 1;
};

while (positionY < 360 || positionX <= 360) {
    drawGradient();
}; 