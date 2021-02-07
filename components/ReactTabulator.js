import 'bootstrap/dist/css/bootstrap.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
	PaginationProvider,
	PaginationTotalStandalone,
	PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';

const { SearchBar } = Search;

const products = [
	{
		id: 155,
		name: 'majid ahmed',
		price: 2000,
	},
	{
		id: 659,
		name: 'salem mazin',
		price: 1500,
	},
	{
		id: 32,
		name: 'salem mazin',
		price: 1500,
	},
	{
		id: 21,
		name: 'salem mazin',
		price: 1500,
	},
];
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
		text: 'Product Price',
		footerTitle: (column, colIndex) =>
			`this is custom title for ${column.text}`,

		footer: (columnData) =>
			'$$ ' + columnData.reduce((acc, item) => acc + item, 0),
	},
];
function priceFormatter(column, colIndex, { text }) {
	//(columnData) => columnData.reduce((acc, item) => acc + item, 0);
	return (
		<>
			<h5>
				<strong>$$ {column.footer.text} $$</strong>
			</h5>
		</>
	);
}
const options = {
	custom: true,
	totalSize: products.length,
};

const selectRow = {
	mode: 'checkbox',
	clickToSelect: true,
	onSelect: (row, isSelect, rowIndex, e) => {
		console.log(row.id);
		console.log(isSelect);
		console.log(rowIndex);
	},
	onSelectAll: (isSelect, rows, e) => {
		console.log(isSelect);
		console.log(rows);
	},
};
const MyTable = () => (
	<BootstrapTable keyField='id' data={products} columns={columns} />
);

export default MyTable;
