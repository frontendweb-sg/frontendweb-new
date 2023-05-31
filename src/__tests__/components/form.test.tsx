import Form, { formProps } from "@/components/ui/Form";
import { render } from "@/test-util";

const setup = (props: formProps) => render(<Form {...props}>test</Form>);

describe("Form", () => {
	it("should render", () => {
		const { container } = setup({});
		expect(container).toBeInTheDocument();
	});

	it("should render children", () => {
		const { getByText } = setup({});
		expect(getByText("test")).toBeInTheDocument();
	});

	it("should render with className", () => {
		const { container } = setup({ className: "test" });
		expect(container.firstChild).toHaveClass("test");
	});

	it("should render with id", () => {
		const { container } = setup({ id: "test" });
		expect(container.firstChild).toHaveAttribute("id", "test");
	});

	it("should render with style", () => {
		const { container } = setup({ style: { color: "red" } });
		expect(container.firstChild).toHaveStyle("color: red");
	});
});
