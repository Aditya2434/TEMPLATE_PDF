import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 14,
  },

  container: {
    borderWidth: 1,
    width: "100%",
    // height: "100%", // to fit single page
  },

  header: {
    width: "100%",
    height: 120,

    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  companyLogo: {
    height: 80,
    width: 80,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  companyDetails: {
    flexGrow: 1,
    marginHorizontal: 24,
    height: 92,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  companyHeaderName: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 4,
  },
  companyHeaderAddress: {
    fontSize: 9,
    textAlign: "center",
  },
  companyHeaderGSTIN: {
    fontSize: 9,
    textAlign: "center",
  },

  companyHeaderPAN: {
    fontSize: 9,
    textAlign: "center",
  },
  companyQR: {
    height: 42,
    width: 42,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },

  taxTransportInvoiceDetails: {
    flexDirection: "row",
    width: "100%",
    borderTopWidth: 1,
    borderColor: "black",
  },

  taxInvoiceDetails: {
    flex: 1,
    padding: 12,
  },
  transportInvoiceDetails: {
    flex: 1,
    padding: 12,
    borderLeftWidth: 1,
    borderColor: "black",
  },
  labelWithValue: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    // border: "1px solid red",
  },
  lwvLabel: {
    width: "50%",
    textAlign: "left",
    paddingRight: 8,
    fontSize: 10,
    fontWeight: 500,
  },
  lwvColon: {
    width: 10,
    textAlign: "center",
    fontSize: 10,
  },
  lwvValue: {
    flex: 1,
    paddingLeft: 4,
    fontSize: 10,
    textAlign: "left",
  },

  lwvValueWrapper: {
    width: "50%",
    flexDirection: "row",
    alignItems: "flex-start",
  },

  // Special wrapper for Total Amount in Words - single line
  lwvValueWrapperSingleLine: {
    width: "50%",
    flexDirection: "row",
    flexWrap: "nowrap",
  },

  addressBillShipping: {
    flexDirection: "row",
    width: "100%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
  },

  billAddressDetails: {
    flex: 1,
    padding: 4,
  },

  shippingAddressDetails: {
    flex: 1,
    padding: 4,
    borderLeftWidth: 1,
    borderColor: "black",
  },

  h3LabelBgGray: {
    height: 28,
    backgroundColor: "#e5e7eb", // background
    flexDirection: "row", // like display:flex
    alignItems: "center", // vertical center
    justifyContent: "center", // horizontal center
    marginBottom: 12,
  },
  h3Text: {
    fontSize: 9,
    fontWeight: "bold",
  },

  amountDetails: {
    flexDirection: "row",
    width: "100%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
  },

  amountInWord: {
    flex: 1,
    padding: 12,
  },

  labelTotalAmountInWords: {
    width: "100%",
  },

  labelTitleTotalAmountInWords: {
    fontSize: 10,
    fontWeight: "bold",
  },

  labelValueTotalAmountInWords: {
    fontSize: 10,
    marginTop: 2,
  },

  amountTaxDetails: {
    flex: 1,
    padding: 12,
  },

  bankDetails: {
    flexDirection: "row",
    width: "100%",
  },

  bankDetailsInfo: {
    flex: 1,
    padding: 12,
  },

  termConditionSupplyContainer: {
    marginTop: 12,
    padding: 8,
  },

  termConditionSupplyTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 6,
    textDecoration: "underline",
  },
  termConditionSupplyItem: {
    fontSize: 9,
    marginBottom: 4,
    textAlign: "left",
  },

  // Product Table
  productTable: {
    width: "100%",
  },

  row: {
    flexDirection: "row",
    alignItems: "stretch", // Ensures children (cell containers) stretch to fill the row's height
    minHeight: 18,
  },

  rowHeader: {
    flexDirection: "row",
    alignItems: "stretch", // Ensures children (cell containers) stretch to fill the row's height
    height: 32,
  },

  headerRow: {
    backgroundColor: "#f2f2f2",
    borderBottomWidth: 1,
  },

  tableHeaderCellContainer: {
    height: "100%", // Ensures the cell View fills the row's height
    flexDirection: "row", // Enables flexbox properties for children
    alignItems: "center", // Vertically centers the Text child within this View
    paddingHorizontal: 2, // Small horizontal padding for text inside cells
  },

  tableCellContainer: {
    height: "100%", // Ensures the cell View fills the row's height
    flexDirection: "row", // Enables flexbox properties for children
    alignItems: "center", // Vertically centers the Text child within this View
    paddingHorizontal: 2, // Small horizontal padding for text inside cells
  },

  // NEW: Style for the actual <Text> content within the cell container
  tableCellText: {
    fontSize: 10,
    flexGrow: 1, // Allows Text to take available horizontal space
  },

  // Column specific width/flex and borders (applied to tableCellContainer)
  serialNo: {
    width: 30, // ~0.3 inches
    borderRightWidth: 1,
  },
  productName: {
    flex: 2, // Takes remaining space
    borderRightWidth: 1,
  },
  hsnCode: {
    width: 60, // ~0.8 inches
    borderRightWidth: 1,
  },
  uom: {
    width: 50, // ~0.7 inches
    borderRightWidth: 1,
  },
  qty: {
    width: 80, // ~1.1 inches
    borderRightWidth: 1,
  },
  rate: {
    width: 70, // ~1.0 inches
    borderRightWidth: 1,
  },
  total: {
    width: 90, // ~1.3 inches
  },

  textCenter: { textAlign: "center" },
  textLeft: { textAlign: "left" },
  textRight: { textAlign: "right" },
  textRightPadded: {
    textAlign: "right",
    paddingRight: 10, // Apply padding here to push text from right edge
  },

  footerContainer: {
    height: 120,
    width: "100%",
    flexDirection: "row", // display:flex
  },

  footerSubject: {
    flex: 1,
    height: "100%",
    flexDirection: "column", // display:flex
    justifyContent: "flex-end",
  },

  fSLabel: {
    fontSize: 9,
    paddingBottom: 10,
    paddingLeft: 10,
  },

  footerStamp: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
  },

  fStampStampImg: {
    height: 92,
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
  },

  fStampLabel: {
    paddingTop: 8,
    fontSize: 9,
    paddingBottom: 8,
    textAlign: "center",
  },

  footerSignature: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
  },

  fSignLabel: {
    marginBottom: 8,
    fontSize: 9,
  },

  fSignPhoto: {
    height: 84,
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
  },
  fSignLabelAuth: {
    paddingTop: 8,
    paddingBottom: 8,
    alignSelf: "flex-end",
    fontSize: 9,
  },
});

export function HelloWorldPdf() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.companyLogo}>
              <Text>LOGO</Text>
            </View>

            <View style={styles.companyDetails}>
              <Text style={styles.companyHeaderName}>
                PARAGON REFRACTORIES & MINERALS
              </Text>
              <Text style={styles.companyHeaderAddress}>
                27/N, SWAPNA MARKET, DURGAPUR-713206, DIST – BARDHAMAN, WEST
                BENGAL
              </Text>
              <Text style={styles.companyHeaderGSTIN}>
                GSTIN: 19AHVPC4398K1ZH
              </Text>
              <Text style={styles.companyHeaderPAN}>PAN: AHVPC4398K</Text>
            </View>

            <View style={styles.companyQR}>
              <Text>QR</Text>
            </View>
          </View>

          {/* Title Tax invoice */}
          <View style={styles.sectionTitle}>
            <Text>TAX INVOICE</Text>
          </View>

          {/* TaX invoice table */}
          <View style={styles.taxTransportInvoiceDetails}>
            {/* Tax Invoice Details */}
            <View style={styles.taxInvoiceDetails}>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Tax Invoice No.</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>PRM/25-26/001</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Date</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>20/11/2025</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>
                  Tax Payable on Reverse Charge
                </Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>No</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>State & Code</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>
                    West Bengal Durgapur Harayan 7143206
                  </Text>
                </View>
              </View>
            </View>

            {/* Transport Invoice Details */}
            <View style={styles.transportInvoiceDetails}>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Transport Mode</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>Bus</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Vehicle No</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>58WE54654</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Date of Supply</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>20/11/2025</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Place of Supply</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>Durgapur</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Order No</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>123456</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>GR/LR No</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>4654897945</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>E WAY BILL No</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>54654889864</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Address */}
          <View style={styles.addressBillShipping}>
            {/* Tax Invoice Details */}
            <View style={styles.billAddressDetails}>
              <View style={styles.h3LabelBgGray}>
                <Text style={styles.h3Text}>
                  DETAILS OF RECEIVER (BILLED TO)
                </Text>
              </View>

              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Name</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>SPS STEEL PVT LTD</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Address</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>
                    Chauhan niwas, swapna market Bengal, 713206
                  </Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>GSTIN</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>QWTHPK452489QWSI8OP</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>State & Code</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>
                    West Bengal Durgapur 7143206
                  </Text>
                </View>
              </View>
            </View>

            {/* Transport Invoice Details */}
            <View style={styles.shippingAddressDetails}>
              <View style={styles.h3LabelBgGray}>
                <Text style={styles.h3Text}>
                  DETAILS OF RECEIVER (BILLED TO)
                </Text>
              </View>

              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Name</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>SPS STEEL PVT LTD</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Address</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>
                    Chauhan niwas, swapna market Bengal, 713206
                  </Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>GSTIN</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>QWTHPK452489QWSI8OP</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>State & Code</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>
                    West Bengal Durgapur 7143206
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Table */}
          <View style={styles.productTable}>
            {/* Header Row */}
            <View style={[styles.rowHeader, styles.headerRow]}>
              <View
                style={[
                  { fontWeight: "bold" },
                  styles.tableHeaderCellContainer,
                  styles.serialNo,
                ]}
              >
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  S.NO
                </Text>
              </View>
              <View
                style={[
                  { fontWeight: "bold" },

                  styles.tableHeaderCellContainer,
                  styles.productName,
                ]}
              >
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  DESCRIPTION OF GOODS
                </Text>
              </View>
              <View
                style={[
                  { fontWeight: "bold" },

                  styles.tableHeaderCellContainer,
                  styles.hsnCode,
                ]}
              >
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  HSN CODE
                </Text>
              </View>
              <View
                style={[
                  { fontWeight: "bold" },

                  styles.tableHeaderCellContainer,
                  styles.uom,
                ]}
              >
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  UOM
                </Text>
              </View>
              <View
                style={[
                  { fontWeight: "bold" },

                  styles.tableHeaderCellContainer,
                  styles.qty,
                ]}
              >
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  QUANTITY
                </Text>
              </View>
              <View
                style={[
                  { fontWeight: "bold" },

                  styles.tableHeaderCellContainer,
                  styles.rate,
                ]}
              >
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  RATE
                </Text>
              </View>
              <View
                style={[
                  { fontWeight: "bold" },

                  styles.tableHeaderCellContainer,
                  styles.total,
                ]}
              >
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  AMOUNT
                </Text>
              </View>
            </View>
            {/* Row 1 */}
            <View style={styles.row}>
              <View style={[styles.tableCellContainer, styles.serialNo]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>1</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.productName]}>
                <Text style={[styles.tableCellText, styles.textLeft]}>
                  DISMANTLING , FITTING AND ALIGNMENT OF 13 NUMBER RAIL LINE FOR
                  REHEATING ROLLING MILL FURNACE UNIT NO -2
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  456789
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  SET
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  100000
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  1234567891
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  123456789
                </Text>
              </View>
            </View>
            {/* Row 2 */}
            <View style={styles.row}>
              <View style={[styles.tableCellContainer, styles.serialNo]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>2</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.productName]}>
                <Text style={[styles.tableCellText, styles.textLeft]}>
                  DISMANTLING , FITTING AND ALIGNMENT OF 13 NUMBER RAIL LINE FOR
                  REHEATING ROLLING MILL FURNACE UNIT NO -2
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  456789
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  SET
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  100000
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  200
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  1000
                </Text>
              </View>
            </View>
            {/* ROw 3 */}
            <View style={styles.row}>
              <View style={[styles.tableCellContainer, styles.serialNo]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>2</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.productName]}>
                <Text style={[styles.tableCellText, styles.textLeft]}>BAR</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  456789
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  SET
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  100000
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  200
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  1000
                </Text>
              </View>
            </View>
            {/* Row 4 */}
            <View style={styles.row}>
              <View style={[styles.tableCellContainer, styles.serialNo]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>2</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.productName]}>
                <Text style={[styles.tableCellText, styles.textLeft]}>BAR</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  456789
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  SET
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  100000
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  200
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  1000
                </Text>
              </View>
            </View>
            {/* Row 5 */}
            <View style={styles.row}>
              <View style={[styles.tableCellContainer, styles.serialNo]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>2</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.productName]}>
                <Text style={[styles.tableCellText, styles.textLeft]}>BAR</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  456789
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  SET
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  100000
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  200
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  1000
                </Text>
              </View>
            </View>

            {/* Row 6 */}
            <View style={styles.row}>
              <View style={[styles.tableCellContainer, styles.serialNo]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>2</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.productName]}>
                <Text style={[styles.tableCellText, styles.textLeft]}>BAR</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  456789
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  SET
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  100000
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  200
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  1000
                </Text>
              </View>
            </View>

            {/* Row 7 */}
            <View style={styles.row}>
              <View style={[styles.tableCellContainer, styles.serialNo]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>2</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.productName]}>
                <Text style={[styles.tableCellText, styles.textLeft]}>BAR</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  456789
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  SET
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  100000
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  200
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  1000
                </Text>
              </View>
            </View>
            {/* Row 8 */}
            <View style={styles.row}>
              <View style={[styles.tableCellContainer, styles.serialNo]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>2</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.productName]}>
                <Text style={[styles.tableCellText, styles.textLeft]}>BAR</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  456789
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  SET
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  100000
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  200
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  1000
                </Text>
              </View>
            </View>

            {/* Row 9 */}
            <View style={styles.row}>
              <View style={[styles.tableCellContainer, styles.serialNo]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>2</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.productName]}>
                <Text style={[styles.tableCellText, styles.textLeft]}>BAR</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  456789
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  SET
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  100000
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  200
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  1000
                </Text>
              </View>
            </View>
            {/* Row 10 */}
            <View style={styles.row}>
              <View style={[styles.tableCellContainer, styles.serialNo]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>2</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.productName]}>
                <Text style={[styles.tableCellText, styles.textLeft]}>BAR</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  456789
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  SET
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  100000
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  200
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  1000
                </Text>
              </View>
            </View>
          </View>

          {/* Amount */}
          <View style={styles.amountDetails}>
            {/* Tax Invoice Details */}
            <View style={styles.amountInWord}>
              <View style={styles.labelTotalAmountInWords}>
                <Text style={styles.labelTitleTotalAmountInWords}>
                  <Text style={{ fontWeight: "bold" }}>
                    Total Amount in Words INR:
                  </Text>
                  <Text style={{ fontWeight: "normal" }}>
                    TWENTY NINE LAKH THIRY THOUAND THIS IS A LONG WORD NEED TO
                    FIX HERE
                  </Text>
                </Text>
              </View>
            </View>

            {/* Transport Invoice Details */}
            <View style={styles.amountTaxDetails}>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Total Amount before tax</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValue}>98765432124.00</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Add: CGST @ 9%</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValue}>9876543212.00</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Add: SGST @ 9%</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValue}>9876543212.00</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Add: IGST @ 0%</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValue}>9876543212.00</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Total Tax Amount</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValue}>9876543212.00</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Total Amount after Tax</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValue}>9876543212.00</Text>
                </View>
              </View>
            </View>
          </View>

          {/* BANK DETAILS */}
          <View style={styles.bankDetails}>
            <View style={styles.bankDetailsInfo}>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>A/C NAME</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValue}>SPS STEEL PVT LTD</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>A/C NO</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValue}>9876543246578544UI1246</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>BANK</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValue}>SPS STEEL PVT LTD</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>BRANCH</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValue}>
                    West Bengal Durgapur 7143206
                  </Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>IFSC</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValue}>UIO678687UIUIO123</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Terms & Condition for Supply: */}
          <View style={styles.termConditionSupplyContainer}>
            <Text style={styles.termConditionSupplyTitle}>
              Terms & Condition for Supply:
            </Text>
            <Text style={styles.termConditionSupplyItem}>
              1. Goods once sold will not be taken back.
            </Text>
            <Text style={styles.termConditionSupplyItem}>
              2. Interest @18% p.a. will be charged if the payment is not made
              within the stipulated time.
            </Text>
          </View>

          {/* Footer */}
          <View style={styles.footerContainer}>
            {/* Subject */}
            <View style={styles.footerSubject}>
              <Text style={styles.fSLabel}>
                Subject to DURGAPUR Jurisdiction
              </Text>
            </View>

            {/* Stamp */}
            <View style={styles.footerStamp}>
              <View style={styles.fStampStampImg} />
              <Text style={styles.fStampLabel}>Common seal</Text>
            </View>

            {/* Signature */}
            <View style={styles.footerSignature}>
              <Text style={styles.fSignLabel}>
                For Paragon Refactories and Minerals
              </Text>
              <View style={styles.fSignPhoto} />
              <Text style={styles.fSignLabelAuth}>Authorised</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
