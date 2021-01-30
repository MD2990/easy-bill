import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Row, Col, Container, ProgressBar } from 'react-bootstrap';
import PurchaseOrder from '../components/PurchaseOrder';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<PurchaseOrder></PurchaseOrder>
		</>
	);
}
