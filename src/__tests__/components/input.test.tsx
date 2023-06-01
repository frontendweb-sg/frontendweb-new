import Input, { InputProps } from "@/components/ui/Input";
import { render } from "@/test-util";

const onChange = jest.fn();
const setup = (props: InputProps) =>
	render(<Input onChange={onChange} {...props} />);

describe("Input component", () => {
	it("should render without crashing", () => {
		const { container } = setup({});
		expect(container).toBeInTheDocument();
	});

	it("should render with the correct placeholder", () => {
		const { getByPlaceholderText } = setup({ placeholder: "test" });
		expect(getByPlaceholderText("test")).toBeInTheDocument();
	});

	it("should render with the correct value", () => {
		const { getByDisplayValue } = setup({ value: "test" });
		expect(getByDisplayValue("test")).toBeInTheDocument();
	});

	it("should render with the correct type", () => {
		const { container } = setup({ type: "password" });
		expect(container.querySelector("input")).toHaveAttribute(
			"type",
			"password"
		);
	});

	it("should render with the correct name", () => {});
});
