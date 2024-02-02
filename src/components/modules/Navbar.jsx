import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution.",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Find the perfect solution.",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Find the perfect solution.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Find the perfect solution.",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution.",
    icon: PhoneIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex z-10 items-center gap-3 rounded-lg hover:bg-[#2E303D] w-[140px] h-20 ">
          <div className="flex items-center justify-center rounded-lg bg p-2 bg-green  ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-greenText text-sm font-bold "
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-[#DCDCDC] "
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler className=" ml-4 ">
          <Typography as="div" variant="small" className="font-medium  ">
            <a
              className="flex items-center gap-2 py-2 pr-4  text-[#FFFFFF] font-bold cursor-pointer opacity-70 hover:opacity-100"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Market
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3   lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3  lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </a>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-sm rounded-xl lg:block border-none  bg-[#2E303D] bg-opacity-50  backdrop-blur-lg">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0   ">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden ">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 items-center mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ">
      <div className="  flex flex-col justify-between items-center lg:flex-row lg:w-[600px] xl:w-[750px]">
        <div>
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer text-2xl py-1.5 lg:ml-2 text-greenText hidden lg:block "
          >
            Neu<span className=" text-white">bit</span>
          </Typography>
        </div>
        <div className="flex flex-col items-center lg:flex-row">
          <Typography
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-medium"
          >
            <a className="flex items-center gap-2 py-2 pr-4 text-[#FFFFFF] font-bold opacity-70 hover:opacity-100">
              Home
            </a>
          </Typography>
          <NavListMenu />
          <Typography
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-medium "
          >
            <a className="flex items-center gap-2 py-2 pr-4 text-[#FFFFFF] font-bold opacity-70 hover:opacity-100">
              Learn
            </a>
          </Typography>
        </div>
      </div>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className=" flex justify-center">
      <Navbar className=" px-4 py-2 shadow-none fixed top-0 z-50 mx-auto   bg-[#2E303D] bg-opacity-50 backdrop-blur-lg rounded drop-shadow-lg border-none">
        <div className="flex flex-row-reverse items-center justify-between lg:flex-row text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer text-2xl py-1.5 lg:ml-2 text-greenText lg:hidden "
          >
            Neu<span className=" text-white">bit</span>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden lg:flex">
            <button className=" bg-buttongreen p-2 text-dark rounded-full px-5 font-bold text-sm">
              Sign In
            </button>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
              Log In
            </Button>
            <Button variant="gradient" size="sm" fullWidth>
              Sign In
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
