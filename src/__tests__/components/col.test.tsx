import Col, { ColProps } from "@/components/ui/Col";
import { render } from "@/test-util";

const setup = (props: ColProps) => render(<Col {...props}>test</Col>);
describe("Col component", () => {
	it("should render", () => {
		const { container } = setup({});
		expect(container).toBeInTheDocument();
	});

	it("should render with correct class", () => {
		const { container } = setup({});
		expect(container.firstChild).toHaveClass("col");
	});

	it("should render with correct class", () => {
		const { container } = setup({ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 });
		expect(container.firstChild).toHaveClass(
			"col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
		);
	});
});
