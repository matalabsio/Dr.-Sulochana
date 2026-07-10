/**
 * Google Apps Script — paste into script.google.com, bind to a Google Sheet.
 *
 * Sheet tab name: Appointments
 * Header row: Timestamp | Name | Phone | Email | Consultation Type | Preferred Date | Message | Locale | Source | Source Page
 *
 * Optional: Project Settings > Script properties > APPOINTMENTS_WEBHOOK_SECRET
 *
 * Deploy: Deploy > New deployment > Web app (Execute as: Me, Anyone can access)
 * Copy URL to GOOGLE_SHEETS_WEBHOOK_URL in Vercel / .env.local
 */
function doPost(e) {
  const secret = PropertiesService.getScriptProperties().getProperty("APPOINTMENTS_WEBHOOK_SECRET");
  const data = JSON.parse(e.postData.contents);

  if (secret && data.secret !== secret) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: "Unauthorized" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Appointments") ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet("Appointments");

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Phone",
      "Email",
      "Consultation Type",
      "Preferred Date",
      "Message",
      "Locale",
      "Source",
      "Source Page",
    ]);
  }

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || "",
    data.phone || "",
    data.email || "",
    data.consultationType || "",
    data.preferredDate || "",
    data.message || "",
    data.locale || "",
    data.source || "",
    data.sourcePage || "",
  ]);

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
    ContentService.MimeType.JSON,
  );
}
