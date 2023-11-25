import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "@/util/icons";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 md:px-10 pt-6 md:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[53px]">
          <div>
            <h1 className="text-black text-4xl font-mon-semibold mb-5">
              Follow us
            </h1>
            <div className="flex items-center gap-[31px]">
              <button>
                <InstagramIcon />
              </button>
              <button>
                <WhatsappIcon />
              </button>
              <button>
                <TwitterIcon />
              </button>
              <button>
                <LinkedinIcon />
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-black text-4xl font-mon-semibold mb-4">
              Company
            </h1>
            <div className="flex flex-col gap-4">
              {["Home", "Shop", "Search", "Sign in"].map((links, index) => (
                <div key={index} className="text-2xl">
                  {links}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-black text-4xl font-mon-semibold mb-4">
              Resources
            </h1>
            <div className="flex flex-col gap-4">
              {["Become a seller", "Help and support"].map((links, index) => (
                <div key={index} className="text-2xl">
                  {links}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-black text-4xl font-mon-semibold mb-4">
              Legal
            </h1>
            <div className="flex flex-col gap-4">
              {["Terms and conditions"].map((links, index) => (
                <div key={index} className="text-2xl">
                  {links}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5 border-[#BEB8B8]" />
      <div className="container mx-auto px-4 md:px-10 pb-6 md:pb-10">
        <p className="text-center text-sm text-black font-arimo-bold">
          Copyright © 2023 Shoptinga inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
