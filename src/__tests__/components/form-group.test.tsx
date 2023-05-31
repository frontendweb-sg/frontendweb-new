import FormGroup, { FormGropProps } from "@/components/ui/FormGroup";
import { render, screen } from "@/test-util";

const setup = (props: FormGropProps) =>
	render(<FormGroup {...props}>test</FormGroup>);

describe("FormGroup", () => {
	it("should render", () => {
		const { container } = setup({});
		expect(container).toMatchSnapshot();
	});

	it("should render with children", () => {
		setup({});
		expect(screen.getByText("test")).toBeInTheDocument();
	});

	it("should render children with label", () => {
		setup({ label: "Hello world" });
		expect(screen.getByText("Hello world")).toBeInTheDocument();
	});

	it("should render with align left", () => {
		setup({ align: "left" });
		expect(screen.getByTestId("form-group")).toHaveClass("text-left");
	});

	it("should render with custom className", () => {
		setup({ className: "test-class" });
		expect(screen.getByTestId("form-group")).toHaveClass("test-class");
	});
});
