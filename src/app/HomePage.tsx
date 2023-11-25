import Navbar from "@/components/Navbar";
import { ReasonToSellPattern, RightArrow } from "@/util/icons";
import Image from "next/image";
import React from "react";
import CustomersImg from "../../public/images/people.png";

const startProduct = [
  {
    title: "Create an account",
    content:
      "create a free shoptinga account if you're a new user or login if you're a registered user.",
  },
  {
    title: "Create your store",
    content: "Setup your store, with product photos and specifications",
  },
  {
    title: "Start selling",
    content:
      "Share your store link, start sellng and accept payment in digital or physical currency",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="h-screen flex flex-col bg-[url('/images/Background.png')] bg-no-repeat bg-[length:100%_100%]">
        <Navbar />
        <div className="container mx-auto px-4 md:px-10 flex-1 flex flex-col items-center justify-center">
          <p className="text-white text-sm text-center font-inter">
            &quot;Unlock Your Business Potential with Shoptinga storefront
            &quot;
          </p>
          <h4 className="text-2xl text-white text-center font-inter font-semibold my-[30px]">
            Join the waitlist !!!
          </h4>
          <h5 className="text-xl text-white text-center font-inter font-medium">
            Don&apos;t wait any longer - join our waitlist today and be the
            first to be informed about our latest update
          </h5>
          <div className="w-full max-w-[460px] flex items-center bg-white rounded-xl ps-4 mt-28">
            <div className="flex-1 ">
              <input
                type="text"
                className="w-full border-0 outline-0 text-[13px]"
                placeholder="Email Join Now"
              />
            </div>
            <button className="h-[58.551px] w-[116px] flex justify-center items-center flex-nowrap text-[13px] text-white bg-[#FEA500] rounded-[10px]">
              <span>Join Now</span> <RightArrow />
            </button>
          </div>
        </div>
      </header>

      <section>
        <div className="container mx-auto px-4 md:px-10 py-6">
          <h4 className="text-black text-[23px] font-mon-semibold text-center leading-[30px] mb-[22px]">
            Start <span className="text-[#FEA302]">selling</span> your product
            by creating an account in less than 5 minutes
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {startProduct.map((selling, index) => (
              <article key={index} className="flex gap-2">
                <div className="h-10 w-[37px] grid place-items-center bg-gradient-to-b from-[rgba(254,165,0,0.99)0%] to-[rgba(254,165,0,0.26)100%] font-mon-semibold rounded-[14px]">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-lg text-black font-mon-bold mb-[10px]">
                    {selling.title}
                  </p>
                  <p className="font-mon-medium">{selling.content}</p>
                </div>
              </article>
            ))}
          </div>
          <button className="w-[169px] h-[60px] block bg-black text-white text-sm font-mon-bold rounded-lg mx-auto mt-[62px] mb-[55px]">
            Start selling now
          </button>
          <div>
            <Image
              src={CustomersImg}
              alt="Customers"
              width={370}
              height={282}
              priority
            />
            <p className="text-black text-xs text-center font-inter mt-5">
              Connect with <span className="text-[#FF8701]">customers</span>{" "}
              around the world
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 md:px-10 py-6">
          <div className="float-right">
            <ReasonToSellPattern />
          </div>
        </div>
      </section>
    </main>
  );
}
