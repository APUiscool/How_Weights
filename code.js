onEvent("text_input1", "input", function( ) {
  setText("labelMercury", Math.round(MercuryWeight()));
  setText("labelVenus", Math.round(VenusWeight()));
  setText("labelMars", Math.round(MarsWeight()));
  setText("labelJupiter", Math.round(JupiterWeight()));
  setText("labelSaturn", Math.round(SaturnWeight()));
  setText("labelUranus", Math.round(UranusWeight()));
  setText("labelNeptune", Math.round(NeptuneWeight()));
  setText("labelPluto", Math.round(PlutoWeight()));
 
});
function MercuryWeight() {
  return (getNumber("text_input1") * 0.3);
}
function VenusWeight() {
  return (getNumber("text_input1") * 0.9);
}
function MarsWeight() {
  return (getNumber("text_input1") * 0.3);
}
function JupiterWeight() {
  return (getNumber("text_input1") * 2.4);
}
function SaturnWeight() {
  return (getNumber("text_input1") * 0.9);
}
function UranusWeight() {
  return (getNumber("text_input1") * 0.8);
}
function NeptuneWeight() {
  return (getNumber("text_input1") * 1.1);
}
function PlutoWeight() {
  return (getNumber("text_input1") * 0.06);
}
