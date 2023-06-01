"use client";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Link from "next/link";
import { useFormik } from "formik";
import { BsArrowLeft, BsBack } from "react-icons/bs";
import Button from "../ui/Button";

const ForgotPassword = () => {
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: {
				email: "",
			},
			onSubmit: async (values) => {
				console.log("values", values);
			},
		});
	return (
		<div>
			<Form onSubmit={handleSubmit} className="mb-3">
				<Input
					name="email"
					errors={errors}
					touched={touched}
					onBlur={handleBlur}
					onChange={handleChange}
					placeholder="Email address"
				/>
				<Button block size="md" type="submit">
					Send
				</Button>
			</Form>
			<Link href="/auth">
				<BsArrowLeft className="me-2" /> Back to login
			</Link>
		</div>
	);
};

export default ForgotPassword;
