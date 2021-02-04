import 'bootstrap/dist/css/bootstrap.min.css';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
	PaginationProvider,
	PaginationTotalStandalone,
	PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';
const products = [
	{
		id: 155,
		name: 'majidahmed',
		price: 1500.0,
	},
	{
		id: 659,
		name: 'majidahmed',
		price: 1500.0,
	},
	{
		id: 968,
		name: 'majidahmed',
		price: 1500.0,
	},
	{
		id: 695,
		name: 'majidahmed',
		price: 1500.0,
	},
	{
		id: 987,
		name: 'majidahmed',
		price: 1500.0,
	},
	{
		id: 842,
		name: 'majidahmeda',
		price: 1500.0,
	},
	{
		id: 9616,
		name: 'majidahmesd',
		price: 1500.0,
	},
	{
		id: 9817,
		name: 'majidahmeds',
		price: 1500.0,
	},
	{
		id: 11,
		name: 'majid salems',
		price: 1500.0,
	},
	{ id: 11, name: 'majid smazin', price: 1500.0 },
	{
		id: 13,
		name: 'majid mazins',
		price: 1500.0,
	},
	{
		id: 144,
		name: 'majid mazina',
		price: 1500.0,
	},
	{
		id: 344,
		name: 'majid wmazin',
		price: 1500.0,
	},
];
const columns = [
	{
		dataField: 'id',
		text: 'Product ID',
		sort: true,
	},
	{
		dataField: 'name',
		text: 'Product Name',
		sort: true,
	},
	{
		dataField: 'price',
		text: 'Product Price',
		sort: true,
	},
];

const options = {
	custom: true,
	totalSize: products.length,
};

const MyTable = () => (
	<>
		<PaginationProvider pagination={paginationFactory(options)}>
			{({ paginationProps, paginationTableProps }) => (
				<div>
					<PaginationTotalStandalone {...paginationProps} />
					<PaginationListStandalone {...paginationProps} />
					<BootstrapTable
						keyField='id'
						data={products}
						columns={columns}
						{...paginationTableProps}
					/>
				</div>
			)}
		</PaginationProvider>
	</>
);

export default MyTable;
