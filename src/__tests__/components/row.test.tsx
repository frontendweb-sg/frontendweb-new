import Row, { RowProps } from "@/components/ui/Row";
import { render } from "@/test-util";

const setup = (props: RowProps) => render(<Row {...props}>test</Row>);
describe("Row component", () => {
	it("should render without crashing", () => {
		const { container } = setup({});
		expect(container).toBeInTheDocument();
	});

	it("should render children", () => {
		const { getByText } = setup({});
		expect(getByText("test")).toBeInTheDocument();
	});

	it("should render with correct styles", () => {
		const { container } = setup({});
		expect(container.firstChild).toHaveClass("row");
	});

	it("should render with correct styles when props are passed", () => {
		const { container } = setup({
			className: "test",
			style: { backgroundColor: "red" },
		});
		expect(container.firstChild).toHaveClass("row test");
		expect(container.firstChild).toHaveStyle("background-color: red");
	});

	it("should render with correct styles when props are passed", () => {
		const { container } = setup({
			className: "test",
			style: { backgroundColor: "red" },
		});
		expect(container.firstChild).toHaveClass("row test");
	});
});
