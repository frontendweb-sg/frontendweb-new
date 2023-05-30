import Avatar from "../ui/Avatar";
import Dropdown, { DropdownItem } from "../ui/Dropdown";
import Typography from "../ui/Typography";

const NavbarUser = () => {
  const element = (
    <div className="d-flex align-items-center text-white">
      <Avatar border size="xs" alt="user" src="/avatar.png" />
      <Typography className="mb-0 ms-2" variant="subtitle2">
        PK
      </Typography>
    </div>
  );

  return (
    <div className="navbar-user">
      <Dropdown renderProps={element}>
        <DropdownItem>Hello</DropdownItem>
        <DropdownItem>Hello</DropdownItem>
      </Dropdown>
    </div>
  );
};

export default NavbarUser;
