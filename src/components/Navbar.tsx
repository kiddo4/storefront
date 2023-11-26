import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/images/shoptinga-logo-041.svg";
import { MenuIcon } from "@/util/icons";
import Head from "next/head";

export default function Navbar() {
  return (
    <>
      <Head>
        <title>Shoptinga</title>
        <link
          rel="shortcut icon"
          href="Shoptinga-icon.jpeg"
          type="image/x-icon"
        />
      </Head>
      <nav className="container mx-auto px-4 md:px-10 flex justify-between">
        <Link href="/" passHref>
          <Image src={Logo} alt="Shoptinga" width={127} height={65} priority />
        </Link>
        <button>
          <MenuIcon />
        </button>
      </nav>
    </>
  );
}
