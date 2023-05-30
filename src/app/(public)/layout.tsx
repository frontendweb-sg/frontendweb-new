import Container from "@/components/ui/Container";
import { ReactNode } from "react";
const Layout = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};
export default Layout;
