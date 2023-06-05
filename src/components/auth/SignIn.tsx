import React from "react";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";
import { AppContent } from "@/utils/AppContent";
import { AppRoutes } from "@/utils/AppRoutes";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { BsKey } from "react-icons/bs";

const validation = yup.object().shape({
	email: yup.string().email().required("Email is required!"),
	password: yup.string().required(),
});

export interface IUser {
	email: string;
	password: string;
}

type LoginProps = React.FormHTMLAttributes<HTMLFormElement> & {
	errorHandler: (error: string | null) => void;
	setLoading: (value: boolean) => void;
};

const LoginForm = ({ setLoading, errorHandler, ...rest }: LoginProps) => {
	const {
		isSubmitting,
		values,
		errors,
		touched,
		handleBlur,
		handleChange,
		handleSubmit,
	} = useFormik({
		initialValues: {
			email: "pkumar2@pythian.com",
			password: "Admin1234@",
		},
		validationSchema: validation,
		onSubmit: async (values: IUser) => {
			setLoading(true);
			const result = await signIn("credentials", {
				email: values.email,
				password: values.password,
				redirect: false,
			});

			if (result?.error) {
				errorHandler(result?.error);
			}

			if (!result?.error) {
				errorHandler(null);
			}
			setLoading(false);
		},
	});

	return (
		<Form onSubmit={handleSubmit} {...rest}>
			<Input
				name="email"
				type="email"
				errors={errors}
				touched={touched}
				value={values.email}
				onBlur={handleBlur}
				onChange={handleChange}
				startIcon={<FaEnvelope />}
				placeholder="Email id"
			/>
			<Input
				name="password"
				type="password"
				errors={errors}
				touched={touched}
				value={values.password}
				onBlur={handleBlur}
				onChange={handleChange}
				startIcon={<FaKey />}
				placeholder="********"
			/>

			<div className="flex items-center justify-between mb-3">
				<Link href={AppRoutes.resetPassword}>
					<BsKey className="me-2" />
					{AppContent.forgotPassword}
				</Link>
			</div>

			<Button block size="md" type="submit">
				{AppContent.signIn}
			</Button>
		</Form>
	);
};

export default LoginForm;
