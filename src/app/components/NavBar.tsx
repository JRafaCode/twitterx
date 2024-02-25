import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import React from "react";

export default function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">X</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            para ti
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            siguiendo
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link color="foreground" href="#">
            ruedita config
        </Link>
        </NavbarItem>
    </NavbarContent>
    </Navbar>
    );
}
