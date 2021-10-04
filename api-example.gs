/**
 * Base method for getting info from Google SpreadSheet.
 *
 * @return {{ss: *, apiExample: *}}
 */
function prepareGsData() {
  let gsUrl = 'https://docs.google.com/spreadsheets/d/15q8896q5FambSL0j9NVwpzRagoN9hKPWrBwO4ph4V30/edit#gid=0';
  // Get all data from Google SpreadSheet.
  let ss = SpreadsheetApp.openByUrl(gsUrl);
  let apiExample = ss.getSheetByName("API-example");

  return {
    'apiExample': apiExample,
    'ss': ss,
  };
}

/**
 * Base method for running Google app script.
 *
 * @return string
 *   Return Json with trade-in devices data.
 */
function doGet() {
  // Prepering GS data.
  let gsData = prepareGsData();

  // Load data in the object.
  let apiExampleData = getApiExampleData(gsData.apiExample, gsData.ss);

  // Run generate Json responce.
  return convertToJson(apiExampleData);
}

/**
 * Convert object to Json string.
 *
 * @return string
 *    Return converted json.
 */
function convertToJson(data) {
  // Encoding JSON.
  let jsonEncode = JSON.stringify(data);

  return ContentService.createTextOutput(jsonEncode).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Prepare products data.
 *
 * @return
 *   Object with product data.
 */
function getApiExampleData(data, ss) {
  // Data without the first row.
  let apiExampleData = data.getRange(2, 1, data.getLastRow() - 1, data.getLastColumn()).getValues();

  /**
   * Describe mapping:
   * 0  ID
   * 1  Product Name
   * 2  Size
   * 3  Unit
   * 4  Price Unit
   * 5  Price
   */
  let products = {};

  // Mapping values.
  for (let i = 0, rows = apiExampleData.length; i < rows; i++) {
    let productId = apiExampleData[i][0];

    if (!products[productId]) {
      let currentProduct = {
        [productId]: {
          "id": apiExampleData[i][0],
          "product_name": apiExampleData[i][1],
          "size": apiExampleData[i][2],
          "unit": apiExampleData[i][3],
          "priceUnit": apiExampleData[i][4],
          "price": apiExampleData[i][5],
        }
      };
      products = Object.assign(products, currentProduct);
      Logger.log(currentProduct);
    }

  }
  Logger.log(products);

  return products;
}
