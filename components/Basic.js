import React, { Children } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';

const SignupSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	lastName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
});

export default function Basic() {
	const [count, setCount] = useState('no error');
	const [show, setShow] = useState(false);
	function AlertDismissibleExample(error) {
		if (show) {
			return (
				<Alert variant='danger' onClose={() => setShow(false)} dismissible>
					<Alert.Heading>Please check your details</Alert.Heading>
					<p>{error}</p>
				</Alert>
			);
		}
		return null;
	}

	return (
		<div>
			<h1>Signup </h1>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
				}}
				validationSchema={SignupSchema}
				onSubmit={(values) => {
					// same shape as initial values
					console.log(values);
				}}>
				{({ errors, touched }) => (
					<Form>
						<Field name='firstName' />
						<Field name='lastName' />
						<Field name='email' type='email' />
						<AlertDismissibleExample {...errors.firstName}>
							{' '}
						</AlertDismissibleExample>
						<button
							type='submit'
							onClick={() => (errors ? setShow(true) : null)}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
