import jsPDF from 'jspdf';
import 'jspdf-autotable';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

var Chance = require('chance');
var chance = new Chance();

// Instantiate Chance so it can be used

// Use Chance here.

//console.log(my_random_string);

const products = [];
for (let index = 0; index < 100; index++) {
	let my_random_string = chance.name();
	let my_random_price = chance.floating({ min: 0, max: 100, fixed: 4 });
	let my_random_number = chance.integer({ min: 10, max: 999999 });

	products.push({
		id: my_random_number,
		name: my_random_string,
		price: my_random_price,
	});

	//	products.push(my_random_string);
	//products.push(my_random_number);
}

const columns = [
	{
		dataField: 'id',
		text: 'Product ID',
		sort: true,
		footer: `Total Items:${products.length} `,
	},
	{
		dataField: 'name',
		text: 'Product Name',
		sort: true,
		footer: 'Footer 2',
	},
	{
		dataField: 'price',
		sort: true,
		text: 'Product Price',
		footerTitle: (column, colIndex) =>
			`this is custom title for ${column.text}`,

		footer: (columnData) =>
			'$$ ' + columnData.reduce((acc, item) => acc + item, 0),
	},
];

const defaultSorted = [
	{
		dataField: 'id',
		order: 'asc',
	},
];

const MyTable = () => {
	return (
		<>
			<BootstrapTable
				bootstrap4
				id='my-table'
				keyField='id'
				data={products}
				columns={columns}
				defaultSorted={defaultSorted}
				pagination={paginationFactory()}
			/>
			<button
				className='btn btn-lg btn-success justify-items-center '
				onClick={() => print()}>
				Print this out!
			</button>
		</>
	);
};

function print() {
	/* 	doc.autoTable({
		head: [['Name', 'Email', 'Country']],
		body: [
			['David', 'david@example.com', 'Sweden'],
			['Castille', 'castille@example.com', 'Spain'],
			// ...
		],
	});
	doc.save('table.pdf'); */

	const doc = new jsPDF();
	doc.autoTable({
		styles: { fillColor: [255, 0, 0] },
		html: '#my-table',
	});
	doc.save('table.pdf');
}

export default MyTable;
