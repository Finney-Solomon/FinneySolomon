import React, { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  Avatar,
} from '@nextui-org/react';

import logo from "../images/Logo.png"
export const Header = () => {
  
  const menuItems = [
    "Home",
    "About Me",
    "Skills",
    "Certifications",
    "Contact Me",
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const [isMobileView, setMobileView] = useState(window.innerWidth <= 640?true:false);

  useEffect(() => {
    // Function to update isMobileView state based on window innerWidth
    const updateMobileView = () => {
      setMobileView(window.innerWidth <= 640);
    };

    // Add event listener to update isMobileView on window resize
    window.addEventListener('resize', updateMobileView);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateMobileView);
    };
  }, []);
  return (
    <Navbar disableAnimation isBordered justify="end">
   
   {/* Common NavbarContent for both mobile and desktop */}
      <NavbarContent className="sm:visible " >
        <NavbarBrand>
        <Avatar src={logo}  radius="full"  size="md" className="justify-start items-start" name="Finney's Portfolio" /> <p className="text-inherit mr-8px size-14px" > __Finney's Portfolio__</p>
        </NavbarBrand>
      </NavbarContent>
      {/* Mobile View */}
      {/* {isMobileView && (
        <> */}
          {/* <NavbarContent className="sm:visible" justify="start">
            <NavbarMenuToggle
            //  onClick={toggleMobileMenu}
             />
          </NavbarContent> */}
          {/* <div className="sm:hidden">
            <NavbarMenu open={isMobileMenuOpen} onClose={closeMobileMenu}>
              {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    className="w-full"
                    color={
                      index === 2
                        ? "warning"
                        : index === menuItems.length - 1
                        ? "danger"
                        : "foreground"
                    }
                    href="#"
                    size="lg"
                  >
                    {item}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </div> */}
        {/* </>
      )} */}

      {/* Desktop View */}
      {/* {!isMobileView && (
        <NavbarContent className="visible lg:flex gap-4" justify="end">
        
          <NavbarItem>
            <Link color="warning" href="#">
              Home
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="#">
              About
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link href="#" aria-current="page" color="foreground">
              Certifications
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
      )} */}

      {/* Common NavbarContent for both mobile and desktop */}
      {/* <NavbarContent justify="end">
       <NavbarItem mr="-mr-2.5">
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
};
