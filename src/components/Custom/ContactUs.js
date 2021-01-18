import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const validationSchema = yup.object({
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	firstname: yup
		.string('Enter your firstname')
		.max(25, 'firstname should be of maximum 25 characters length')
		.required('firstname is required'),
	lastname: yup
		.string('Enter your lastname')
		.max(25, 'lastname should be of maximum 25 characters length')
		.required('lastname is required'),
	phoneno: yup
		.string('Enter your phoneno')
		.max(10, 'phoneno should be of  10 digits only')
		.min(10, 'phoneno should be of  10 digits only')
		.required('phoneno is required'),
	subject: yup
		.string('Enter your subject')
		.required('subject is required'),
	message: yup
		.string('Enter your message')
		.required('message is required'),
});

const ContactUs = () => {
	const formik = useFormik({
		initialValues: {
			firstname: '',
			lastname: '',
			phoneno: '',
			subject: '',
			message: '',
			email: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					id="firstname"
					name="firstname"
					label="First Name"
					value={formik.values.firstname}
					onChange={formik.handleChange}
					error={formik.touched.firstname && Boolean(formik.errors.firstname)}
					helperText={formik.touched.firstname && formik.errors.firstname}
				/>
				<br></br>
				<TextField
					id="lastname"
					name="lastname"
					label="Last Name"
					value={formik.values.lastname}
					onChange={formik.handleChange}
					error={formik.touched.lastname && Boolean(formik.errors.lastname)}
					helperText={formik.touched.lastname && formik.errors.lastname}
				/>
				<br></br>
				<TextField
					id="email"
					name="email"
					label="Email"
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>

				<br></br>
				<TextField
					id="phoneno"
					name="phoneno"
					label="Phone No"
					value={formik.values.phoneno}
					onChange={formik.handleChange}
					error={formik.touched.phoneno && Boolean(formik.errors.phoneno)}
					helperText={formik.touched.phoneno && formik.errors.phoneno}
				/>
				<br></br>
				<TextField
					id="subject"
					name="subject"
					label="Subject"
					value={formik.values.subject}
					onChange={formik.handleChange}
					error={formik.touched.subject && Boolean(formik.errors.subject)}
					helperText={formik.touched.subject && formik.errors.subject}
				/>
				<br></br>
				<TextField
					id="message"
					name="message"
					label="Message"
					value={formik.values.message}
					onChange={formik.handleChange}
					error={formik.touched.message && Boolean(formik.errors.message)}
					helperText={formik.touched.message && formik.errors.message}
				/>

				<br></br>
				<Button color="primary" variant="contained" type="submit">
					Submit
        </Button>
			</form>
		</div>
	);
};
export default ContactUs;