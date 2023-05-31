import Container from "@/components/ui/Container";
import type { ContainerProps } from "@/components/ui/Container";
import { render, screen } from "@/test-util";

const setup = (props?: ContainerProps) =>
	render(<Container {...props}>test</Container>);

describe("Container", () => {
	it("Render component with default props", () => {
		setup();
		const text = screen.getByText("test");
		expect(text).toBeInTheDocument();
	});

	it("Render component with custom props", () => {
		setup({ isFull: true });
		const text = screen.getByText("test");
		expect(text.classList[0]).toContain("container-fluid");
	});
});
