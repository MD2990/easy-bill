import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Chance from 'chance';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { useState, useEffect } from 'react';

import data from '../Data';
const { SearchBar, ClearSearchButton } = Search;

/* const chance = new Chance();

for (let index = 0; index < 15; index++) {
	const my_random_string = chance.name();
	const my_random_price = chance.integer({ min: 0, max: 50, fixed: 0 });
	//const my_random_number = chance.integer({ min: 10, max: 999999 });

	data.push({
		id: index + 1,
		name: my_random_string,
		price: index + 15,
	});
} */

const newTotal = () =>
	parseFloat(data.reduce((acc, item) => acc + item.amount, 0).toFixed(6));

const columns = [
	{
		dataField: 'id',
		text: 'Product ID',
		sort: true,
		footer: `Total Items:${data.length} `,
	},
	{
		dataField: 'product',
		text: 'Product',
		sort: true,
		footer: 'Footer 2',
		editable: false,
		footer: 'newTotal',
	},

	{
		dataField: 'price',
		sort: true,
		text: 'Product Price',
		type: 'number',
		//editable: false,

		footer: 'newTotal',
	},
	{
		dataField: 'quantity',
		sort: true,
		text: 'Quantity',
		type: 'number',
		/* 	footerTitle: (column, colIndex) =>
		`this is custom title for ${column.text}`, */
		footer: 'newTotal',

		//footerFormatter: priceFormatter
	},
	{
		dataField: 'amount',
		sort: true,
		text: 'Amount',
		type: 'number',
		editable: false,
		footer: priceFormatter,

		/* 	footerTitle: (column, colIndex) =>
			`this is custom title for ${column.text}`, */
		//footer: newTotal,
		//footerFormatter: priceFormatter
	},
	{
		dataField: 'discount',
		sort: true,
		text: 'Discount',
		type: 'number',
		/* 	footerTitle: (column, colIndex) =>
			`this is custom title for ${column.text}`, */
		footer: 'newTotal',

		//footerFormatter: priceFormatter
	},
];

function priceFormatter(column, colIndex, { text }) {
	return (
		<h5>
			<strong>$$ {newTotal()} $$</strong>
		</h5>
	);
}
/* function priceFormatter() {
	return newTotal();
} */

function beforeSaveCell(oldValue, newValue, row, column, done) {
	setTimeout(() => {
		if (confirm('Do you want to accep this change?')) {
			done(true);
		} else {
			done(false);
		}
	}, 0);
	return { async: true };
}
const defaultSorted = [
	{
		dataField: 'id',
		order: 'asc',
	},
];

const MyTable = () => {
	const [count, setCount] = useState(newTotal);

	return (
		<>
			<ToolkitProvider keyField='id' data={data} columns={columns} search>
				{(props) => (
					<div>
						<h3>Input something at below input field:</h3>
						<SearchBar {...props.searchProps} />
						<ClearSearchButton {...props.searchProps} />
						<hr />
						<BootstrapTable
							{...props.baseProps}
							bootstrap4
							id='my-table'
							keyField='id'
							data={data}
							columns={columns}
							defaultSorted={defaultSorted}
							pagination={paginationFactory()}
							cellEdit={cellEditFactory({
								mode: 'click',
								onStartEdit: (row, column, rowIndex, columnIndex) => {},
								beforeSaveCell: beforeSaveCell,
								afterSaveCell: (oldValue, newValue, rowIndex, columnIndex) => {
									newTotal;
									setCount(newTotal);

									/* setCount(newValue);
									return (columnData) =>
										columnData.reduce((acc, item) => acc + item, 0); */
								} /* (oldValue, newValue, row, column, done) =>  */,

								//total = parseFloat(data.reduce((acc, pilot) => acc + pilot.price, 0));

								//co();

								//ToDo: Add fetch post req
								/* 	 	let ss = data.indexOf(row);
									data[ss].price = newValue;
									console.log(data[ss].price);  */

								//console.log(count);

								//console.log(count);
							})}
						/>
						<h1>{count}</h1>
					</div>
				)}
			</ToolkitProvider>

			{/* <BootstrapTable
			
			/> */}

			<button
				className='btn btn-lg btn-success justify-items-center '
				onClick={() => print()}>
				Print this out!
			</button>
		</>
	);
};

function print() {
	console.log(total);

	const doc = new jsPDF();
	const key = [['id', 'name', 'price']];
	doc.autoTable({
		head: key,
		body: data.map((x) => Object.values(x)),
	});
	doc.save('table.pdf');
	/* 
	const doc = new jsPDF();
	doc.autoTable({
		styles: { fillColor: [255, 0, 0] },
		html: '#my-table',
	});
	doc.save('table.pdf'); */
}

export default MyTable;
