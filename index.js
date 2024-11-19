

const cell = {w: 34, h: 26};
const step = 1;
const colors = [
    { color: "aliceblue", hex: "#f0f8ff"},
    { color: "antiquewhite", hex: "#faebd7"},
    { color: "aqua", hex: "#00ffff"},
    { color: "aquamarine", hex: "#7fffd4"},
    { color: "azure", hex: "#f0ffff"},
    { color: "beige", hex: "#f5f5dc"},
    { color: "bisque", hex: "#ffe4c4"},
    { color: "black", hex: "#000000"},
    { color: "blanchedalmond", hex: "#ffebcd"},
    { color: "blue", hex: "#0000ff"},
    { color: "blueviolet", hex: "#8a2be2"},
    { color: "brown", hex: "#a52a2a"},
    { color: "burlywood", hex: "#deb887"},
    { color: "cadetblue", hex: "#5f9ea0"},
    { color: "chartreuse", hex: "#7fff00"},
    { color: "chocolate", hex: "#d2691e"},
    { color: "coral", hex: "#ff7f50"},
    { color: "cornflowerblue", hex: "#6495ed"},
    { color: "cornsilk", hex: "#fff8dc"},
    { color: "crimson", hex: "#dc143c"},
    { color: "cyan", hex: "#00ffff"},
    { color: "darkblue", hex: "#00008b"},
    { color: "darkcyan", hex: "#008b8b"},
    { color: "darkgoldenrod", hex: "#b8860b"},
    { color: "darkgray", hex: "#a9a9a9"},
    { color: "darkgreen", hex: "#006400"},
    { color: "darkgrey", hex: "#a9a9a9"},
    { color: "darkkhaki", hex: "#bdb76b"},
    { color: "darkmagenta", hex: "#8b008b"},
    { color: "darkolivegreen", hex: "#556b2f"},
    { color: "darkorange", hex: "#ff8c00"},
    { color: "darkorchid", hex: "#9932cc"},
    { color: "darkred", hex: "#8b0000"},
    { color: "darksalmon", hex: "#e9967a"},
    { color: "darkseagreen", hex: "#8fbc8f"},
    { color: "darkslateblue", hex: "#483d8b"},
    { color: "darkslategray", hex: "#2f4f4f"},
    { color: "darkslategrey", hex: "#2f4f4f"},
    { color: "darkturquoise", hex: "#00ced1"},
    { color: "darkviolet", hex: "#9400d3"},
    { color: "deeppink", hex: "#ff1493"},
    { color: "deepskyblue", hex: "#00bfff"},
    { color: "dimgray", hex: "#696969"},
    { color: "dimgrey", hex: "#696969"},
    { color: "dodgerblue", hex: "#1e90ff"},
    { color: "firebrick", hex: "#b22222"},
    { color: "floralwhite", hex: "#fffaf0"},
    { color: "forestgreen", hex: "#228b22"},
    { color: "fuchsia", hex: "#ff00ff"},
    { color: "gainsboro", hex: "#dcdcdc"},
    { color: "ghostwhite", hex: "#f8f8ff"},
    { color: "gold", hex: "#ffd700"},
    { color: "goldenrod", hex: "#daa520"},
    { color: "gray", hex: "#808080"},
    { color: "green", hex: "#008000"},
    { color: "greenyellow", hex: "#adff2f"},
    { color: "grey", hex: "#808080"},
    { color: "honeydew", hex: "#f0fff0"},
    { color: "hotpink", hex: "#ff69b4"},
    { color: "indianred", hex: "#cd5c5c"},
    { color: "indigo", hex: "#4b0082"},
    { color: "ivory", hex: "#fffff0"},
    { color: "khaki", hex: "#f0e68c"},
    { color: "lavender", hex: "#e6e6fa"},
    { color: "lavenderblush", hex: "#fff0f5"},
    { color: "lawngreen", hex: "#7cfc00"},
    { color: "lemonchiffon", hex: "#fffacd"},
    { color: "lightblue", hex: "#add8e6"},
    { color: "lightcoral", hex: "#f08080"},
    { color: "lightcyan", hex: "#e0ffff"},
    { color: "lightgoldenrodyellow", hex: "#fafad2"},
    { color: "lightgray", hex: "#d3d3d3"},
    { color: "lightgreen", hex: "#90ee90"},
    { color: "lightgrey", hex: "#d3d3d3"},
    { color: "lightpink", hex: "#ffb6c1"},
    { color: "lightsalmon", hex: "#ffa07a"},
    { color: "lightseagreen", hex: "#20b2aa"},
    { color: "lightskyblue", hex: "#87cefa"},
    { color: "lightslategray", hex: "#778899"},
    { color: "lightslategrey", hex: "#778899"},
    { color: "lightsteelblue", hex: "#b0c4de"},
    { color: "lightyellow", hex: "#ffffe0"},
    { color: "lime", hex: "#00ff00"},
    { color: "limegreen", hex: "#32cd32"},
    { color: "linen", hex: "#faf0e6"},
    { color: "magenta", hex: "#ff00ff"},
    { color: "maroon", hex: "#800000"},
    { color: "mediumaquamarine", hex: "#66cdaa"},
    { color: "mediumblue", hex: "#0000cd"},
    { color: "mediumorchid", hex: "#ba55d3"},
    { color: "mediumpurple", hex: "#9370db"},
    { color: "mediumseagreen", hex: "#3cb371"},
    { color: "mediumslateblue", hex: "#7b68ee"},
    { color: "mediumspringgreen", hex: "#00fa9a"},
    { color: "mediumturquoise", hex: "#48d1cc"},
    { color: "mediumvioletred", hex: "#c71585"},
    { color: "midnightblue", hex: "#191970"},
    { color: "mintcream", hex: "#f5fffa"},
    { color: "mistyrose", hex: "#ffe4e1"},
    { color: "moccasin", hex: "#ffe4b5"},
    { color: "navajowhite", hex: "#ffdead"},
    { color: "navy", hex: "#000080"},
    { color: "oldlace", hex: "#fdf5e6"},
    { color: "olive", hex: "#808000"},
    { color: "olivedrab", hex: "#6b8e23"},
    { color: "orange", hex: "#ffa500"},
    { color: "orangered", hex: "#ff4500"},
    { color: "orchid", hex: "#da70d6"},
    { color: "palegoldenrod", hex: "#eee8aa"},
    { color: "palegreen", hex: "#98fb98"},
    { color: "paleturquoise", hex: "#afeeee"},
    { color: "palevioletred", hex: "#db7093"},
    { color: "papayawhip", hex: "#ffefd5"},
    { color: "peachpuff", hex: "#ffdab9"},
    { color: "peru", hex: "#cd853f"},
    { color: "pink", hex: "#ffc0cb"},
    { color: "plum", hex: "#dda0dd"},
    { color: "powderblue", hex: "#b0e0e6"},
    { color: "purple", hex: "#800080"},
    { color: "red", hex: "#ff0000"},
    { color: "rosybrown", hex: "#bc8f8f"},
    { color: "royalblue", hex: "#4169e1"},
    { color: "saddlebrown", hex: "#8b4513"},
    { color: "salmon", hex: "#fa8072"},
    { color: "sandybrown", hex: "#f4a460"},
    { color: "seagreen", hex: "#2e8b57"},
    { color: "seashell", hex: "#fff5ee"},
    { color: "sienna", hex: "#a0522d"},
    { color: "silver", hex: "#c0c0c0"},
    { color: "skyblue", hex: "#87ceeb"},
    { color: "slateblue", hex: "#6a5acd"},
    { color: "slategray", hex: "#708090"},
    { color: "slategrey", hex: "#708090"},
    { color: "snow", hex: "#fffafa"},
    { color: "springgreen", hex: "#00ff7f"},
    { color: "steelblue", hex: "#4682b4"},
    { color: "tan", hex: "#d2b48c"},
    { color: "teal", hex: "#008080"},
    { color: "thistle", hex: "#d8bfd8"},
    { color: "tomato", hex: "#ff6347"},
    { color: "turquoise", hex: "#40e0d0"},
    { color: "violet", hex: "#ee82ee"},
    { color: "wheat", hex: "#f5deb3"},
    { color: "white", hex: "#ffffff"},
    { color: "whitesmoke", hex: "#f5f5f5"},
    { color: "yellow", hex: "#ffff00"},
    { color: "yellowgreen", hex: "#9acd32"},
];


let loaded = () => {
    create_charts();
    load_colors();
}

let create_charts = () => {
    for (let h = 0; h < 360; h += step) {
        create_chart(h);
    }
}

let load_colors = () => {
    for (let color of colors) {
        let rgb = hex2rgb(color.hex);
        let hsl = rgb2hsl(rgb.r, rgb.g, rgb.b);
        
        let table = Math.round(hsl.h/step)*step%360;
        let deviation = hsl.h-table;

        place_color(hsl, color.color, deviation, color.hex, table)
    }
}

let hex2rgb = (hex) =>
{
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

let hsl2rgb = (h, s, l) =>
{
   let a=s*Math.min(l,1-l);
   let f= (n,k=(n+h/30)%12) => l - a*Math.max(Math.min(k-3,9-k,1),-1);
   return [parseInt(f(0)*255),parseInt(f(8)*255),parseInt(f(4)*255)];
}

function rgb2hsl(r, g, b) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;
  
    // Find greatest and smallest channel values
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
  
    // Calculate hue
    // No difference
    if (delta === 0)
      h = 0;
    // Red is max
    else if (cmax === r)
      h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax === g)
      h = (b - r) / delta + 2;
    // Blue is max
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
      
    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;
  
    // Calculate lightness
    l = (cmax + cmin) / 2;
  
    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return {h, s, l};
}

let create_chart = (h) => {
    let chart = document.createElement('canvas');
    let ctx = chart.getContext('2d');
    
    let width = cell.w*5;
    let height = cell.h*9;

    ctx.canvas.width = width;
    ctx.canvas.height = height;
    chart.style.width = width+'px';
    chart.style.height = height+'px';

    chart.id = `h=${h}`;
    
    x = 0;
    y = 0;
    for (let l = 90; l > 0; l -= 10) {
        for (let s = 100; s > 0; s -= 20) {
            let rgb = hsl2rgb(h, s/100, l/100);
            ctx.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
            ctx.fillRect(x, y, cell.w, cell.h);

            x += cell.w;
        }
        y += cell.h;
        x = 0;
    }   

    document.getElementById('container').appendChild(chart);
}

let place_color = (hsl, name, deviation, hex, table) => {
    let chart = document.getElementById(`h=${table}`);
    let ctx = chart.getContext('2d');

    let width = cell.w*5;
    let height = cell.h*9;

    console.log(hsl);

    let x = hsl.s/100*width;
    let y = hsl.l/100*height;

    ctx.beginPath();
    ctx.strokeStyle = 'darkgrey';
    ctx.rect(x-10, y-10, 20, 20);
    ctx.stroke();
}

window.onload = loaded;