import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { Invoice } from './types';

const styles = StyleSheet.create({
	page: { padding: 24, fontSize: 10, fontFamily: 'Helvetica' },
	header: { marginBottom: 16, borderBottomWidth: 1, borderBottomColor: '#ddd', paddingBottom: 8 },
	row: { flexDirection: 'row', justifyContent: 'space-between' },
	companyName: { fontSize: 16, fontWeight: 'bold' },
	muted: { color: '#555' },
	sectionTitle: { fontSize: 12, marginTop: 12, marginBottom: 6, fontWeight: 'bold' },
	table: { display: 'table', width: 'auto', borderStyle: 'solid', borderWidth: 1, borderColor: '#e5e7eb', borderRightWidth: 0, borderBottomWidth: 0 },
	tableRow: { flexDirection: 'row' },
	tableColHeader: { width: '50%', borderStyle: 'solid', borderWidth: 1, borderColor: '#e5e7eb', borderLeftWidth: 0, borderTopWidth: 0, backgroundColor: '#f9fafb', padding: 6 },
	tableColHeaderQty: { width: '15%', borderStyle: 'solid', borderWidth: 1, borderColor: '#e5e7eb', borderLeftWidth: 0, borderTopWidth: 0, backgroundColor: '#f9fafb', padding: 6, textAlign: 'right' },
	tableColHeaderPrice: { width: '20%', borderStyle: 'solid', borderWidth: 1, borderColor: '#e5e7eb', borderLeftWidth: 0, borderTopWidth: 0, backgroundColor: '#f9fafb', padding: 6, textAlign: 'right' },
	tableColHeaderTotal: { width: '15%', borderStyle: 'solid', borderWidth: 1, borderColor: '#e5e7eb', borderLeftWidth: 0, borderTopWidth: 0, backgroundColor: '#f9fafb', padding: 6, textAlign: 'right' },
	tableCol: { width: '50%', borderStyle: 'solid', borderWidth: 1, borderColor: '#e5e7eb', borderLeftWidth: 0, borderTopWidth: 0, padding: 6 },
	tableColQty: { width: '15%', borderStyle: 'solid', borderWidth: 1, borderColor: '#e5e7eb', borderLeftWidth: 0, borderTopWidth: 0, padding: 6, textAlign: 'right' },
	tableColPrice: { width: '20%', borderStyle: 'solid', borderWidth: 1, borderColor: '#e5e7eb', borderLeftWidth: 0, borderTopWidth: 0, padding: 6, textAlign: 'right' },
	tableColTotal: { width: '15%', borderStyle: 'solid', borderWidth: 1, borderColor: '#e5e7eb', borderLeftWidth: 0, borderTopWidth: 0, padding: 6, textAlign: 'right' },
	footer: { marginTop: 16, borderTopWidth: 1, borderTopColor: '#ddd', paddingTop: 8 },
});

export function InvoicePdf({ invoice }: { invoice: Invoice }) {
	const subtotal = invoice.items.reduce((sum, i) => sum + i.quantity * i.unitPrice, 0);
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.header}>
					<View style={styles.row}>
						<Text style={styles.companyName}>{invoice.company.name}</Text>
						<View>
							<Text>Invoice</Text>
							<Text style={styles.muted}>{invoice.invoiceNumber}</Text>
						</View>
					</View>
					<Text style={styles.muted}>{invoice.company.address}</Text>
					<Text style={styles.muted}>{invoice.company.phone} · {invoice.company.email}</Text>
				</View>

				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<View>
						<Text style={styles.sectionTitle}>Bill To</Text>
						<Text>{invoice.client.name}</Text>
						<Text style={styles.muted}>{invoice.client.address}</Text>
						<Text style={styles.muted}>{invoice.client.email}</Text>
					</View>
					<View>
						<Text style={styles.sectionTitle}>Dates</Text>
						<Text>Issue: {invoice.tissueDate}</Text>
						<Text>Due: {invoice.dueDate}</Text>
					</View>
				</View>

				<Text style={styles.sectionTitle}>Items</Text>
				<View style={styles.table}>
					<View style={styles.tableRow}>
						<View style={styles.tableColHeader}><Text>Description</Text></View>
						<View style={styles.tableColHeaderQty}><Text>Qty</Text></View>
						<View style={styles.tableColHeaderPrice}><Text>Unit</Text></View>
						<View style={styles.tableColHeaderTotal}><Text>Total</Text></View>
					</View>
					{invoice.items.map((item, idx) => (
						<View key={idx} style={styles.tableRow}>
							<View style={styles.tableCol}><Text>{item.description}</Text></View>
							<View style={styles.tableColQty}><Text>{item.quantity}</Text></View>
							<View style={styles.tableColPrice}><Text>{item.unitPrice.toFixed(2)}</Text></View>
							<View style={styles.tableColTotal}><Text>{(item.quantity * item.unitPrice).toFixed(2)}</Text></View>
						</View>
					))}
				</View>

				<View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'flex-end' }}>
					<View>
						<Text>Subtotal: {subtotal.toFixed(2)}</Text>
					</View>
				</View>

				{invoice.notes ? (
					<View style={styles.footer}>
						<Text>Notes</Text>
						<Text style={styles.muted}>{invoice.notes}</Text>
					</View>
				) : null}
			</Page>
		</Document>
	);
}


