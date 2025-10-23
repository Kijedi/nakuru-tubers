"use client";

import Image from "next/image";
import logo from "../public/images/logo.png";
export function Logo({ dark }) {
  return <Image alt="Logo" src={logo} height={50} />;
}
