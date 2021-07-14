// var rect = document.getElementById("rect");
// let positionX = 0;
// let positionY = 0;
// let id = 0;

// let drawGradient = function(saturation, lightness) {
//     var sqColor = 305;
//     while (sqColor != 300) {
//         let sq= document.createElement("div");
//         sq.class = 'colorSwatch';
//         sq.id = "Swatch " + id;
//         sq.style.width = "27px";
//         sq.style.height = "50px";
//         sq.style.position = "absolute";
//         sq.style.left = String(positionX) + "px";
//         sq.style.top = String(positionY) + "px";
//         sq.style.backgroundColor = "hsl(" + sqColor + "," + saturation + "%" + "," + lightness + "%" + ")";
//         console.log(sq.style.backgroundColor);
//         rect.appendChild(sq); 
//         positionX += 5.33;
//         id += 1;
//         sqColor += 5;
//         if (sqColor >= 360) {
//             sqColor = 0;
//         }
//     };
// };

// var sat = 100;
// var light = 50;
// while (positionY < 400) {
//     drawGradient(sat, light);
//     sat -= 10;
//     light -= 5;
//     positionY += 50;
// };
// var dark = 0;
// var sat = 0;
// var pos = 0;
// while (pos <= 400) {
    // drawLightDark(dark, pos);
    // dark += 38;
    // pos += 50;
// };
// while (sqColor[2] > 0) {
    // let sq= document.createElement("div");
    // sq.class = 'colorSwatch';
    // sq.id = "Swatch " + id;
    // sq.style.backgroundColor = "rgb(" + sqColor[0] + "," + sqColor[1] + "," + sqColor[2] + ")";
    // sq.style.width = "3px";
    // sq.style.height = "100px";
    // sq.style.position = "absolute";
    // sq.style.left = String(position) + "px";
    // rect.appendChild(sq); 
    // position += 2;
    // id += 1;
    // sqColor[2] -= 10;
// };