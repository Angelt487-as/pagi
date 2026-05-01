function enviarWhatsApp() {
  let mensaje = "Hola, quiero cotizar:\n";

  let cemento = document.getElementById("cemento").value;
  let varilla = document.getElementById("varilla").value;
  let arena = document.getElementById("arena").value;
  let grava = document.getElementById("grava").value;

  if (cemento > 0) mensaje += `- ${cemento} Cementos\n`;
  if (varilla > 0) mensaje += `- ${varilla} Varillas\n`;
  if (arena > 0) mensaje += `- ${arena} m³ Arena\n`;
  if (grava > 0) mensaje += `- ${grava} m³ Grava\n`;

  let url = "https://wa.me/526571995772?text=" + encodeURIComponent(mensaje);

  window.open(url, "_blank");
}