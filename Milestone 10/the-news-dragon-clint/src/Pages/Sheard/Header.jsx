import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
const Header = () => {
  ;
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <h5 className="text-secondary ">Journalism Without Fear or Favour</h5>
        <h6>{moment().format("dddd, MMMM D, YYYY, h:mm A")}</h6>
      </div>
      <div className="d-flex bg-opacity-10 p-3 rounded mt-4 bg-secondary">
        <Button variant="danger">Latest</Button>
        <Marquee
          className="text-danger"
          speed={90}
          gradientColor={(195, 14461, 57)}
        >
          71% Of Stock Brokers Plan To Shift Towards Tech-Driven Brokerage:
          Report || Discount brokers take giant strides; now account for 57% of
          active clients
        </Marquee>
      </div>
      
    </Container>
  );
};

export default Header;
