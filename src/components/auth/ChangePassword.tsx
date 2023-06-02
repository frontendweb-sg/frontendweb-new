"use client";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import PropTypes from "prop-types";
import { AppContent } from "@/utils/AppContent";
import { useFormik } from "formik";
import * as yup from "yup";

const validation = yup.object().shape({
	password: yup.string().required("Password is required"),
	confirmPassword: yup
		.string()
		.required("Confirm password is required")
		.oneOf([yup.ref("password")], "Passwords must matched!"),
});

/**
 * Change password component
 * @returns
 */
export type ChangePasswordProps = React.FormHTMLAttributes<HTMLFormElement> & {
	token?: string;
};

const ChangePassword = ({ token, ...rest }: ChangePasswordProps) => {
	const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
		useFormik({
			initialValues: {
				password: "",
				confirmPassword: "",
			},
			validationSchema: validation,
			onSubmit: async (values, { setSubmitting }) => {
				try {
				} catch (error) {}
				console.log("values", values);
				setSubmitting(false);
			},
		});
	return (
		<Form onSubmit={handleSubmit} {...rest}>
			<Input
				type="password"
				name="password"
				label="New password"
				value={values.password}
				errors={errors}
				touched={touched}
				placeholder="Password"
				onBlur={handleBlur}
				onChange={handleChange}
			/>
			<Input
				type="password"
				name="confirmPassword"
				label="Confirm new password"
				value={values.confirmPassword}
				placeholder="Confirm password"
				errors={errors}
				touched={touched}
				onBlur={handleBlur}
				onChange={handleChange}
			/>

			<Button block type="submit" size="md">
				{AppContent.saveText}
			</Button>
		</Form>
	);
};

ChangePassword.propTypes = {
	token: PropTypes.string.isRequired,
};

export default ChangePassword;
