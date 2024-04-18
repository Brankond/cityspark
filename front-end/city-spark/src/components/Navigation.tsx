'use client';
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Navigation() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">CITY SPARK</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/content/events">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/content/events/create">
            Create
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/content/person" color="foreground">
            Profile
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/content/events/feedback">
            Feedback
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/">Logout</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
