import Navbar from "@/components/Navbar";
import { ReasonToSellPattern, RightArrow, SearchIcon } from "@/util/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomersImg from "../../public/images/people.png";
import DigitalProductImg from "../../public/images/DigitalProduct.svg";
import PhysicalProductImg from "../../public/images/PhysicalProduct.svg";
import EastPaymentImg from "../../public/images/EasyProduct.svg";
import FastDeliveryImg from "../../public/images/FastProduct.svg";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const reasonToSell = [
  {
    title: "Digital product ",
    content:
      "amplify your digital offerings by joining our platform to connect with tech-savvy consumer seeking innovative digital solutions.",
    images: DigitalProductImg,
  },
  {
    title: "Physical product ",
    content:
      "expand your digital your market reach by showcasing your high quality physical product on our platform, reaching eager customer globally",
    images: PhysicalProductImg,
  },
  {
    title: "Easy payment method",
    content:
      "optimize your sales with our seamless payment methods, empowering you to receive payments hassle free and efficiently with crptocurrency and fiat money.",
    images: EastPaymentImg,
  },
  {
    title: "Fast delivery",
    content:
      "enhance customer satisfaction by leveraging our rapid delivery service, ensuring your products reach buyers promptly fostering a positive buying experience with our logistic partner quikpik",
    images: FastDeliveryImg,
  },
];

export default function HomePage() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitEmail = async (e: any) => {
    e.preventDefault();

    // Fetch POST request
    try {
      const response = await fetch(
        "https://shoptinga.onrender.com/api/waitlist/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers as needed
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        setFormData(responseData.email);
        console.log("Data posted successfully:", responseData);
        toast.success("Your email submitted successfully", {
          position: "top-right",
          autoClose: 3000, // milliseconds
        });

        setFormData({
          email: "",
          // Reset other form fields as needed
        });
        return responseData;
      } else {
        toast.error("Error getting email", {
          position: "top-right",
          autoClose: 3000,
        });
      }

      // .then((data) => {
      // Handle the response data as needed
      // if (data.ok) {
      //   return toast.success("Data posted successfully", {
      //     position: "top-right",
      //     autoClose: 3000, // milliseconds
      //   });
      // } else {
      //   toast.error("Failed to post data", {
      //     position: "top-right",
      //     autoClose: 3000,
      //   });
      // }
      //   setFormData(data);
      // })
    } catch (error: any) {
      console.error("Error:", error);
      toast.error("Error posting email", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

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
                className="w-full bg-transparent border-0 outline-0 text-[13px]"
                placeholder="Email Join Now"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <button
              onClick={handleSubmitEmail}
              className="h-[58.551px] w-[116px] flex justify-center items-center flex-nowrap text-[13px] text-white bg-[#FEA500] rounded-[10px]"
            >
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
              className="mx-auto"
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
          <div className="mb-3">
            <div className="w-fit ms-auto">
              <ReasonToSellPattern />
            </div>
          </div>
          <h4 className="text-black text-[26px] text-center font-space-bold leading-[40px] mb-[42px]">
            Reasons why you should sell with{" "}
            <span className="text-[#FE7A00]">shoptinga</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-10">
            {reasonToSell.map((sell, index) => (
              <article key={index} className="flex">
                <div>
                  <Image
                    src={sell.images}
                    alt={sell.title}
                    width={50}
                    height={50}
                    priority
                  />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-black font-space-bold mb-[13px]">
                    {sell.title}
                  </p>
                  <p className="font-space text-[#57595A] text-sm">
                    {sell.content}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-3 pb-4">
            <div className="w-fit ms-auto">
              <ReasonToSellPattern />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[rgba(0,0,0,0.20)] to-[rgba(0,0,0,0.20)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="container mx-auto px-4 md:px-10 py-6 md:py-10">
          <p className="text-black text-center font-mon-semibold mb-[38px]">
            FAQ’S
          </p>
          <p className="text-black text-center font-mon-semibold">
            Frequently asked questions
          </p>
          <div className="w-[231px] h-10 flex items-center justify-center gap-[10px] border border-white rounded mx-auto my-[38px]">
            <SearchIcon />
            <div className="">
              <input
                type="text"
                className="w-full h-10 bg-transparent border-0 outline-0 placeholder:text-black"
                placeholder="search"
              />
            </div>
          </div>
          <FaqSection />
          <button className="w-[194.995px] h-[60px] block text-[#FF8701] text-sm font-mon-bold border-[1.5px] border-[#FF8601] rounded mx-auto mt-[38px]">
            See More FAQS
          </button>
        </div>
      </section>

      <Footer />

      <ToastContainer />
    </main>
  );
}
