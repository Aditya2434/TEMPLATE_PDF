export type Company = {
	name: string;
	address: string;
	phone: string;
	email: string;
};

export type Client = {
	name: string;
	address: string;
	email: string;
};

export type InvoiceItem = {
	description: string;
	quantity: number;
	unitPrice: number;
};

export type Invoice = {
	invoiceNumber: string;
	issueDate: string;
	dueDate: string;
	company: Company;
	client: Client;
	items: InvoiceItem[];
	notes?: string;
};


