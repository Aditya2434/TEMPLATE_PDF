import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 12,
  },

  container: {
    borderWidth: 1,
    width: "100%",
    // height: "100%", // to fit single page
  },

  boldText: {
    fontWeight: "bold",
  },

  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  companyLogo: {
    height: 64,
    width: 64,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  companyDetails: {
    flexGrow: 1,
    marginHorizontal: 12,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  companyHeaderName: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 2,
    fontWeight: "bold",
  },
  companyHeaderAddress: {
    fontSize: 8,
    textAlign: "center",
  },
  companyHeaderGSTIN: {
    fontSize: 8,
    textAlign: "center",
  },

  companyHeaderPAN: {
    fontSize: 8,
    textAlign: "center",
  },
  companyQR: {
    height: 36,
    width: 36,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
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
    padding: 8,
  },
  transportInvoiceDetails: {
    flex: 1,
    padding: 8,
    borderLeftWidth: 1,
    borderColor: "black",
  },
  labelWithValue: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
    // border: "1px solid red",
  },
  lwvLabel: {
    width: "40%",
    textAlign: "left",
    paddingRight: 4,
    fontSize: 9,
    fontWeight: 500,
  },
  lwvColon: {
    width: 6,
    textAlign: "center",
    fontSize: 9,
  },
  lwvValue: {
    flex: 1,
    paddingLeft: 2,
    fontSize: 9,
    textAlign: "left",
  },

  stateCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    marginBottom: 3,
  },
  stateWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
  },
  codeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },
  stateInlineText: {
    fontSize: 9,
  },

  // Right-aligned value for totals/taxes
  lwvValueRight: {
    flex: 1,
    fontSize: 9,
    textAlign: "right",
    paddingRight: 2,
  },

  lwvValueWrapper: {
    width: "60%",
    flexDirection: "row",
    alignItems: "flex-start",
  },

  // Special wrapper for Total Amount in Words - single line
  lwvValueWrapperSingleLine: {
    width: "50%",
    flexDirection: "row",
    flexWrap: "nowrap",
  },

  // Bank details tighter layout
  bankRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  bankLabel: {
    width: "40%",
    textAlign: "left",
    paddingRight: 6,
    fontSize: 9,
    fontWeight: 500,
  },
  bankValueWrapper: {
    width: "60%",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  bankValue: {
    flex: 1,
    paddingLeft: 2,
    fontSize: 9,
    textAlign: "left",
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
    height: 22,
    backgroundColor: "#e5e7eb", // background
    flexDirection: "row", // like display:flex
    alignItems: "center", // vertical center
    justifyContent: "center", // horizontal center
    marginBottom: 8,
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
    fontWeight: "bold",
  },

  amountInWord: {
    flex: 1,
    padding: 6,
  },

  labelTotalAmountInWords: {
    width: "100%",
  },

  // Single-row label/value for amount in words
  amountWordsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  amountWordsLabel: {
    fontSize: 9,
    fontWeight: "bold",
    marginRight: 3,
  },
  amountWordsValue: {
    fontSize: 9,
    lineHeight: 1.1,
    flexGrow: 1,
  },

  labelTitleTotalAmountInWords: {
    fontSize: 9,
    fontWeight: "bold",
  },

  labelValueTotalAmountInWords: {
    fontSize: 9,
    marginTop: 1,
  },

  // Divider line for total rows
  taxDivider: {
    borderTopWidth: 1,
    borderColor: "black",
    paddingTop: 4,
    marginTop: 2,
  },

  amountTaxDetails: {
    flex: 1,
    padding: 8,
  },

  bankDetails: {
    flexDirection: "row",
    width: "100%",
  },

  bankDetailsInfo: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
  },

  termConditionSupplyContainer: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
  },

  termConditionSupplyTitle: {
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 4,
    textDecoration: "underline",
  },
  termConditionSupplyItem: {
    fontSize: 8,
    marginBottom: 2,
    textAlign: "left",
  },

  // Product Table
  productTable: {
    width: "100%",
  },

  row: {
    flexDirection: "row",
    alignItems: "stretch", // Ensures children (cell containers) stretch to fill the row's height
    minHeight: 14,
  },

  rowHeader: {
    flexDirection: "row",
    alignItems: "stretch", // Ensures children (cell containers) stretch to fill the row's height
    height: 24,
  },

  headerRow: {
    backgroundColor: "#f2f2f2",
    borderBottomWidth: 1,
  },

  tableHeaderCellContainer: {
    flexDirection: "row", // Enables flexbox properties for children
    alignItems: "center", // Vertically centers the Text child within this View
    paddingHorizontal: 2, // Small horizontal padding for text inside cells
  },

  tableCellContainer: {
    flexDirection: "row", // Enables flexbox properties for children
    alignItems: "center", // Vertically centers the Text child within this View
    paddingHorizontal: 2, // Small horizontal padding for text inside cells
  },

  // NEW: Style for the actual <Text> content within the cell container
  tableCellText: {
    fontSize: 9,
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
    paddingRight: 6, // Apply padding here to push text from right edge
  },

  footerContainer: {
    width: "100%",
    flexDirection: "row", // display:flex
    height: 90,
  },

  footerSubject: {
    flex: 1,
    height: "100%",
    flexDirection: "column", // display:flex
    justifyContent: "flex-end",
  },

  fSLabel: {
    fontSize: 8,
    paddingBottom: 6,
    paddingLeft: 8,
  },

  footerStamp: {
    flex: 1,
    padding: 8,
    flexDirection: "column",
  },

  fStampStampImg: {
    width: "100%",
    height: "100%",
  },

  fStampLabel: {
    paddingTop: 6,
    fontSize: 8,
    paddingBottom: 6,
    textAlign: "center",
  },

  footerSignature: {
    flex: 1,
    padding: 8,
    flexDirection: "column",
  },

  fSignLabel: {
    marginBottom: 6,
    fontSize: 8,
  },

  fSignPhoto: {
    width: "100%",
    height: "100%",
  },
  fSignLabelAuth: {
    paddingTop: 6,
    paddingBottom: 6,
    alignSelf: "flex-end",
    fontSize: 8,
  },

  // Keep bottom section together
  bottomBlock: {
    marginTop: 8,
  },

  bankRowHeader: {
    fontSize: 8,
    fontWeight: "bold",
  },
});

export function HelloWorldPdf() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.companyLogo}>
              <Text></Text>
            </View>

            <View style={styles.companyDetails}>
              <Text style={styles.companyHeaderName}>
                PARAGON REFRACTORIES & MINERALS
              </Text>
              <Text style={styles.companyHeaderAddress}>
                27/N, SWAPNA MARKET, DURGAPUR-713206, DIST – BARDHAMAN, WEST
                BENGAL
              </Text>
              <Text style={[styles.companyHeaderGSTIN, styles.boldText]}>
                GSTIN: 19AHVPC4398K1ZH
              </Text>
              <Text style={[styles.companyHeaderPAN, styles.boldText]}>
                PAN: AHVPC4398K
              </Text>
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
                  <Text style={[styles.lwvValue, styles.boldText]}>
                    PRM/25-26/001
                  </Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Date</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={[styles.lwvValue, styles.boldText]}>
                    20/11/2025
                  </Text>
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
                <View style={styles.stateCodeContainer}>
                  <View style={styles.stateWrapper}>
                    <Text style={styles.stateInlineText}>State</Text>
                    <Text style={styles.lwvColon}>:</Text>
                    <Text style={[styles.stateInlineText, styles.boldText]}>
                      West Bengal Durgapur Harayan
                    </Text>
                  </View>
                  <View style={styles.codeWrapper}>
                    <Text style={styles.stateInlineText}>Code</Text>
                    <Text style={styles.lwvColon}>:</Text>
                    <Text style={[styles.stateInlineText, styles.boldText]}>
                      7143206
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Transport Invoice Details */}
            <View style={styles.transportInvoiceDetails}>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Transport Mode</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>Road</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Vehicle No</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={[styles.lwvValue, styles.boldText]}>
                    WB40AU2596
                  </Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Date of Supply</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={[styles.lwvValue, styles.boldText]}>
                    20/11/2025
                  </Text>
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
                  <Text style={[styles.lwvValue, styles.boldText]}>
                    1234562131
                  </Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>GR/LR No</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={[styles.lwvValue, styles.boldText]}>
                    465489794521
                  </Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>E WAY BILL No</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={[styles.lwvValue, styles.boldText]}>
                    546548898641WED32
                  </Text>
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
                  <Text style={[styles.lwvValue, styles.boldText]}>
                    Shree Hanuman Metaforge (India)Pvt.Ltd
                  </Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Address</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>
                    Bamunara industrial Area, Paschim Bardhaman Durgapur, 713212
                  </Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>GSTIN</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>19AAGCS5104A1ZS</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <View style={styles.stateCodeContainer}>
                  <View style={styles.stateWrapper}>
                    <Text style={styles.stateInlineText}>State</Text>
                    <Text style={styles.lwvColon}>:</Text>
                    <Text style={[styles.stateInlineText, styles.boldText]}>
                      West Bengal
                    </Text>
                  </View>
                  <View style={styles.codeWrapper}>
                    <Text style={styles.stateInlineText}>Code</Text>
                    <Text style={styles.lwvColon}>:</Text>
                    <Text style={[styles.stateInlineText, styles.boldText]}>
                      19
                    </Text>
                  </View>
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
                  <Text style={[styles.lwvValue, styles.boldText]}>
                    Shree Hanuman Metaforge (India)Pvt.Ltd
                  </Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>Address</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>
                    Bamunara industrial Area, Paschim Bardhaman Durgapur, 713212
                  </Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={styles.lwvLabel}>GSTIN</Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvColon}>:</Text>
                  <Text style={styles.lwvValue}>19AAGCS5104A1ZS</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <View style={styles.stateCodeContainer}>
                  <View style={styles.stateWrapper}>
                    <Text style={styles.stateInlineText}>State</Text>
                    <Text style={styles.lwvColon}>:</Text>
                    <Text style={[styles.stateInlineText, styles.boldText]}>
                      West Bengal
                    </Text>
                  </View>
                  <View style={styles.codeWrapper}>
                    <Text style={styles.stateInlineText}>Code</Text>
                    <Text style={styles.lwvColon}>:</Text>
                    <Text style={[styles.stateInlineText, styles.boldText]}>
                      19
                    </Text>
                  </View>
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
                  70% ALUMINA HANGER BRICK
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  690210
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  NOS
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  280
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  525.00
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  1,47,000.00
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
                  70% ALUMINA SHOULDER BRICK
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  690210
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  NOS
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  240
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  500.00
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  1,20,000.00
                </Text>
              </View>
            </View>
            {/* ROw 3 */}
            <View style={styles.row}>
              <View style={[styles.tableCellContainer, styles.serialNo]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>3</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.productName]}>
                <Text style={[styles.tableCellText, styles.textLeft]}>
                  70% ALUMINA BRICK
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  690210
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  NOS
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  1200
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  110.00
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  1,32,000.00
                </Text>
              </View>
            </View>
            {/* Row 4 */}
            <View style={styles.row}>
              <View style={[styles.tableCellContainer, styles.serialNo]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>4</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.productName]}>
                <Text style={[styles.tableCellText, styles.textLeft]}>
                  INSULATION BRICK
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  690320
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  NOS
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  800
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  31.50
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  25,200.00
                </Text>
              </View>
            </View>
            {/* Row 5 */}
            <View style={styles.row}>
              <View style={[styles.tableCellContainer, styles.serialNo]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>5</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.productName]}>
                <Text style={[styles.tableCellText, styles.textLeft]}>
                  WHYTHEAT K
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  381600
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  BAG
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  1 MT
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  30,000.00
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  30,000.00
                </Text>
              </View>
            </View>

            {/* Row 6 */}
            <View style={styles.row}>
              <View style={[styles.tableCellContainer, styles.serialNo]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>6</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.productName]}>
                <Text style={[styles.tableCellText, styles.textLeft]}>
                  ACCOSET 50
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  690320
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  BAG
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  25
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  700.00
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  17,500.00
                </Text>
              </View>
            </View>

            {/* Row 7 */}
            <View style={styles.row}>
              <View style={[styles.tableCellContainer, styles.serialNo]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>7</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.productName]}>
                <Text style={[styles.tableCellText, styles.textLeft]}>
                  CERAMICS BLANKET 96
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.hsnCode]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  381600
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.uom]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>
                  BOX
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.qty]}>
                <Text style={[styles.tableCellText, styles.textCenter]}>7</Text>
              </View>
              <View style={[styles.tableCellContainer, styles.rate]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  1,250.00
                </Text>
              </View>
              <View style={[styles.tableCellContainer, styles.total]}>
                <Text style={[styles.tableCellText, styles.textRightPadded]}>
                  8,750.00
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
                <Text style={styles.amountWordsLabel}>
                  Total Amount in Words INR:
                </Text>
                <Text style={styles.amountWordsValue}>
                  FIVE LAKH SIXTY SIX THOUSAND NINE HUNDRED THIRTY ONE RUPEES
                  ONLY.
                </Text>
              </View>
            </View>

            {/* Transport Invoice Details */}
            <View style={styles.amountTaxDetails}>
              <View style={styles.labelWithValue}>
                <Text style={[styles.lwvLabel, styles.boldText]}>
                  Total Amount before tax
                </Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValueRight}>4,80,450.00</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={[styles.lwvLabel, styles.boldText]}>
                  Add: CGST @ 9%
                </Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValueRight}>43,240.50</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={[styles.lwvLabel, styles.boldText]}>
                  Add: SGST @ 9%
                </Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValueRight}>43,240.50</Text>
                </View>
              </View>
              <View style={styles.labelWithValue}>
                <Text style={[styles.lwvLabel, styles.boldText]}>
                  Add: IGST @ 18%
                </Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValueRight}>0.00</Text>
                </View>
              </View>
              <View style={[styles.labelWithValue, styles.taxDivider]}>
                <Text style={[styles.lwvLabel, styles.boldText]}>
                  Total Tax Amount
                </Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValueRight}>86,481.00</Text>
                </View>
              </View>
              <View style={[styles.labelWithValue, styles.taxDivider]}>
                <Text style={[styles.lwvLabel, styles.boldText]}>
                  Total Amount after Tax
                </Text>
                <View style={styles.lwvValueWrapper}>
                  <Text style={styles.lwvValueRight}>5,66,931.00</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Bottom block kept together */}
          <View wrap={false} style={styles.bottomBlock}>
            {/* BANK DETAILS */}
            <View style={styles.bankDetails}>
              <View style={styles.bankDetailsInfo}>
                <Text style={styles.bankRowHeader}>OUR BANK DETAIL :</Text>

                <View style={styles.bankRow}>
                  <Text style={styles.bankLabel}>A/C NAME</Text>
                  <View style={[styles.bankValueWrapper, styles.boldText]}>
                    <Text style={styles.bankValue}>
                      PARAGON REFRACTORIES & MINERALS
                    </Text>
                  </View>
                </View>
                <View style={styles.bankRow}>
                  <Text style={styles.bankLabel}>A/C NO</Text>
                  <View style={styles.bankValueWrapper}>
                    <Text style={[styles.bankValue, styles.boldText]}>
                      758601010050048
                    </Text>
                  </View>
                </View>
                <View style={styles.bankRow}>
                  <Text style={styles.bankLabel}>BANK</Text>
                  <View style={styles.bankValueWrapper}>
                    <Text style={[styles.bankValue, styles.boldText]}>
                      UNION BANK OF INDIA
                    </Text>
                  </View>
                </View>
                <View style={styles.bankRow}>
                  <Text style={styles.bankLabel}>BRANCH / IFSC</Text>
                  <View style={styles.bankValueWrapper}>
                    <Text style={[styles.bankValue, styles.boldText]}>
                      CITY CENTRE , DURGAPUR / UBIN0815187
                    </Text>
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
                2. Interest @<Text style={styles.boldText}>18%</Text> p.a. will
                be charged if the payment is not made within the stipulated
                time.
              </Text>
            </View>

            {/* Footer */}
            <View style={styles.footerContainer}>
              {/* Subject */}
              <View style={styles.footerSubject}>
                <Text style={styles.fSLabel}>
                  Subject to <Text style={styles.boldText}>DURGAPUR</Text>{" "}
                  Jurisdiction
                </Text>
              </View>

              {/* Stamp */}
              <View style={styles.footerStamp}>
                <View style={styles.fStampStampImg} />
                <Text style={styles.fStampLabel}>Common seal</Text>
              </View>

              {/* Signature */}
              <View style={styles.footerSignature}>
                <Text style={[styles.fSignLabel, styles.boldText]}>
                  For Paragon Refactories and Minerals
                </Text>
                <View style={styles.fSignPhoto} />
                <Text style={[styles.fSignLabelAuth, styles.boldText]}>
                  Authorised
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
