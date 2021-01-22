import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, ProgressBar } from 'react-bootstrap';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Container>
				<Row className='justify-content-md-center border border-black '>
					<Col xs>1 of 3</Col>
					<Col>2 of 3</Col>
					<Col>3 of 3</Col>
				</Row>
				<Row>
					<Col>1 of 3</Col>
					<Col>2 of 3</Col>
					<Col>3 of 3</Col>
				</Row>
			</Container>
			{/* 	{ <div className={styles.container}>
				<Button variant='primary' onClick={() => alert('Hi')}>
					{' '}
					Click Me
				</Button>
			</div> } */}
		</>
	);
}
