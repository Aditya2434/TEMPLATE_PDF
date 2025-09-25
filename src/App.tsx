import { useMemo, useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Invoice, InvoiceItem } from './types';
import { InvoicePdf } from './InvoicePdf';

const sampleInvoice: Invoice = {
	invoiceNumber: 'INV-0001',
	issueDate: new Date().toISOString().slice(0, 10),
	dueDate: new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10),
	company: {
		name: 'Your Company Pvt Ltd',
		address: '123, Business Street, City, Country',
		phone: '+1 555-0100',
		email: 'info@company.com',
	},
	client: {
		name: 'Client Name',
		address: '456, Client Avenue, City, Country',
		email: 'client@example.com',
	},
	items: [
		{ description: 'Product/Service A', quantity: 2, unitPrice: 50 },
		{ description: 'Product/Service B', quantity: 1, unitPrice: 120 },
		{ description: 'Product/Service A', quantity: 2, unitPrice: 50 },
		{ description: 'Product/Service B', quantity: 1, unitPrice: 120 },
	],
	notes: 'Thank you for your business!'
};

export default function App() {
	const [invoice, setInvoice] = useState<Invoice>(sampleInvoice);
	const [showPreview, setShowPreview] = useState(false);

	const subtotal = useMemo(() => invoice.items.reduce((sum, i) => sum + i.quantity * i.unitPrice, 0), [invoice.items]);

	function updateItem(index: number, patch: Partial<InvoiceItem>) {
		setInvoice(prev => {
			const nextItems = prev.items.map((it, i) => (i === index ? { ...it, ...patch } : it));
			return { ...prev, items: nextItems };
		});
	}

	function addItem() {
		setInvoice(prev => ({ ...prev, items: [...prev.items, { description: '', quantity: 1, unitPrice: 0 }] }));
	}

	function removeItem(index: number) {
		setInvoice(prev => ({ ...prev, items: prev.items.filter((_, i) => i !== index) }));
	}

	return (
		<div style={{ display: 'grid', gridTemplateColumns: showPreview ? '420px 1fr' : '1fr', height: '100vh' }}>
			<div style={{ padding: 16, overflow: 'auto', borderRight: showPreview ? '1px solid #e5e7eb' : 'none' }}>
				<h2 style={{ marginTop: 0 }}>Invoice Builder (TEST)</h2>
				<section>
					<h3>Company</h3>
					<input placeholder="Name" value={invoice.company.name} onChange={e => setInvoice({ ...invoice, company: { ...invoice.company, name: e.target.value } })} style={{ width: '100%', marginBottom: 8 }} />
					<textarea placeholder="Address" value={invoice.company.address} onChange={e => setInvoice({ ...invoice, company: { ...invoice.company, address: e.target.value } })} style={{ width: '100%', marginBottom: 8 }} />
					<input placeholder="Phone" value={invoice.company.phone} onChange={e => setInvoice({ ...invoice, company: { ...invoice.company, phone: e.target.value } })} style={{ width: '100%', marginBottom: 8 }} />
					<input placeholder="Email" value={invoice.company.email} onChange={e => setInvoice({ ...invoice, company: { ...invoice.company, email: e.target.value } })} style={{ width: '100%', marginBottom: 8 }} />
				</section>
				<section>
					<h3>Client</h3>
					<input placeholder="Name" value={invoice.client.name} onChange={e => setInvoice({ ...invoice, client: { ...invoice.client, name: e.target.value } })} style={{ width: '100%', marginBottom: 8 }} />
					<textarea placeholder="Address" value={invoice.client.address} onChange={e => setInvoice({ ...invoice, client: { ...invoice.client, address: e.target.value } })} style={{ width: '100%', marginBottom: 8 }} />
					<input placeholder="Email" value={invoice.client.email} onChange={e => setInvoice({ ...invoice, client: { ...invoice.client, email: e.target.value } })} style={{ width: '100%', marginBottom: 8 }} />
				</section>
				<section>
					<h3>Invoice</h3>
					<input placeholder="Invoice No" value={invoice.invoiceNumber} onChange={e => setInvoice({ ...invoice, invoiceNumber: e.target.value })} style={{ width: '100%', marginBottom: 8 }} />
					<input type="date" placeholder="Issue Date" value={invoice.tissueDate} onChange={e => setInvoice({ ...invoice, tissueDate: e.target.value })} style={{ width: '100%', marginBottom: 8 }} />
					<input type="date" placeholder="Due Date" value={invoice.dueDate} onChange={e => setInvoice({ ...invoice, dueDate: e.target.value })} style={{ width: '100%', marginBottom: 8 }} />
					<textarea placeholder="Notes" value={invoice.notes || ''} onChange={e => setInvoice({ ...invoice, notes: e.target.value })} style={{ width: '100%', marginBottom: 8 }} />
				</section>
				<section>
					<h3>Items</h3>
					{invoice.items.map((item, idx) => (
						<div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 120px 60px', gap: 8, marginBottom: 8 }}>
							<input placeholder="Description" value={item.description} onChange={e => updateItem(idx, { description: e.target.value })} />
							<input type="number" placeholder="Qty" value={item.quantity} onChange={e => updateItem(idx, { quantity: Number(e.target.value) })} />
							<input type="number" placeholder="Unit Price" value={item.unitPrice} onChange={e => updateItem(idx, { unitPrice: Number(e.target.value) })} />
							<button onClick={() => removeItem(idx)}>Del</button>
						</div>
					))}
					<button onClick={addItem}>Add Item</button>
					<div style={{ marginTop: 12, fontWeight: 600 }}>Subtotal: {subtotal.toFixed(2)}</div>
				</section>
				<div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
					<button onClick={() => setShowPreview(true)}>Show Preview</button>
					<PDFDownloadLink document={<InvoicePdf invoice={invoice} />} fileName={`${invoice.invoiceNumber}.pdf`}>
						{({ loading }) => (loading ? 'Preparing PDF…' : 'Download PDF')}
					</PDFDownloadLink>
				</div>
			</div>
			{showPreview ? (
				<div style={{ position: 'relative', height: '100%', minWidth: 0 }}>
					<button
						style={{ position: 'absolute', top: 8, right: 8, zIndex: 10 }}
						onClick={() => setShowPreview(false)}
					>
						Close Preview
					</button>
					<PDFViewer style={{ width: '100%', height: '100%' }} showToolbar>
						<InvoicePdf invoice={invoice} />
					</PDFViewer>
				</div>
			) : null}
		</div>
	);
}


