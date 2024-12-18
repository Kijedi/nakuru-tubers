"use client";

import Image from "next/image";
import logo from "../public/images/logo.png";
export function Logo({ dark }) {
  return <Image src={logo} height={80} />;


}
