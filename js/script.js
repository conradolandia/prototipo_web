// crear elemento svg
var svg = d3
  .select("#svg-container")
  .append("svg")
  .attr("width", 2600)
  .attr("height", 200);

// añadir circulos con d3, como ejemplo
var n = 1;
var radio = 8;
var diametro = radio * 2;

var tipos = [
  "tipo-comunidad_internacional",
  "tipo-comunidad_academica",
  "tipo-figuras_publicas",
  "tipo-institucionalidad",
  "tipo-medios",
  "tipo-organizaciones",
  "tipo-sector_privado",
  "tipo-sociedad_politica"
];

for (n = 1; n < 100; n++) {
  var clase = tipos[Math.floor(Math.random() * tipos.length)];
  var centroX = (diametro + radio) * n;
  svg
    .append("circle")
    .attr("cx", centroX)
    .attr("cy", radio)
    .attr("r", radio)
    .attr("class", clase);
}
