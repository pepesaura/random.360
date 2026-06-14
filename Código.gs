function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  var headers = data[0];
  var rows = data.slice(1);
  
  // Buscar en qué columna está el encabezado "URL"
  var urlColumnIndex = headers.indexOf("URL");
  
  if (urlColumnIndex === -1) {
    return ContentService.createTextOutput(JSON.stringify({ error: "No se encontró la columna 'URL'" }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  // Elegir una fila aleatoria
  var randomIndex = Math.floor(Math.random() * rows.length);
  var randomRow = rows[randomIndex];
  
  var destino = randomRow[urlColumnIndex];
  
  // Devolver la URL elegida
  return ContentService.createTextOutput(JSON.stringify({ url: destino }))
    .setMimeType(ContentService.MimeType.JSON);
}
