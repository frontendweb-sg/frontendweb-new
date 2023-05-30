import classNames from "classnames";
import Container from "../ui/Container";
import Row from "../ui/Row";
import Col from "../ui/Col";
import Logo from "./Logo";
import {
  BsFacebook,
  BsInstagram,
  BsGoogle,
  BsGeoAltFill,
  BsTelephoneFill,
  BsFillEnvelopeOpenFill,
} from "react-icons/bs";
import Typography from "../ui/Typography";
import Link from "next/link";
import { AppContent } from "@/utils/AppContent";
import { lato } from "@/lib/font";
/**
 * Footer component
 * @returns
 */
const Footer = () => {
  const classes = classNames("footer bg-light");
  return (
    <footer className={classes}>
      <Container>
        <Row>
          <Col xs={6} md={6} lg={3} className="pe-4">
            <Logo href="/" className="mb-4" />

            <p className="font-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              fuga beatae? Explicabo corporis nam blanditiis eum natus ratione
              sequi earum numquam dolores.
            </p>

            <div className="social">
              <a href="/" className="me-3">
                <BsFacebook />
              </a>
              <a href="/" className="me-3">
                <BsInstagram />
              </a>
              <a href="/" className="me-3">
                <BsGoogle />
              </a>
            </div>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <Typography className="mb-3" variant="h5">
              About
            </Typography>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/about-us" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-us" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-us" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-us" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-us" className="nav-link">
                  About Us
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <Typography variant="h5" className="mb-3">
              Categories
            </Typography>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/about-us" className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-us" className="nav-link">
                  Student
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-us" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-us" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-us" className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <Typography variant="h5">Get in touch</Typography>
            <div className="list">
              <div className="nav">
                <div className="d-flex">
                  <div className="me-3">
                    <BsGeoAltFill />
                  </div>
                  <div>
                    <address>
                      PO Box Collins Street West Victoria 201300, India
                    </address>
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <div className="me-3">
                    <BsTelephoneFill />
                  </div>
                  <div>
                    <Typography variant="subtitle1">
                      Call For More Information​
                    </Typography>
                    <Typography>7291****84</Typography>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="me-3">
                    <BsFillEnvelopeOpenFill />
                  </div>
                  <div>
                    <Typography variant="subtitle1">Office Email</Typography>
                    <Typography>frontendweb.sg@gmail.com</Typography>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <FooterBottom />
    </footer>
  );
};

const FooterBottom = () => {
  return (
    <Container className="border-top mt-4 pt-4">
      <Row>
        <Col>
          <ul className="breadcrumb mb-0 ">
            <li className="breadcrumb-item">
              <Link href="/" className="text-decoration-none">
                {AppContent.privacyPolicy}
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/" className="text-decoration-none">
                {AppContent.termAndConditions}
              </Link>
            </li>
          </ul>
        </Col>
        <Col className="text-end">
          <Typography className="mb-0">
            &copy; {AppContent.reserved}, {AppContent.poweredBy}{" "}
            <Link
              href="/"
              className={classNames(
                lato.className,
                "fw-bold fst-italic text-decoration-none"
              )}
            >
              frontend<span className="text-secondary">web</span>
            </Link>
          </Typography>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
