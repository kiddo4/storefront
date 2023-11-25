"use client";
import { PlusIcon, SearchIcon } from "@/util/icons";
import React from "react";
import type { CollapseProps } from "antd";
// import { Collapse } from "antd";
import dynamic from "next/dynamic";

const Collapse = dynamic(async () => await import("antd/es/carousel"), {
  ssr: false,
});

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];

export default function FaqSection() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
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
        <div className="accordionWrapper">
          <Collapse
            items={items}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }: any) => (
              <PlusIcon rotate={isActive ? 45 : 0} />
            )}
            expandIconPosition="end"
            onChange={onChange}
          />
        </div>
        <button className="w-[194.995px] h-[60px] block text-[#FF8701] text-sm font-mon-bold border-[1.5px] border-[#FF8601] rounded mx-auto mt-[38px]">
          See More FAQS
        </button>
      </div>
    </section>
  );
}
