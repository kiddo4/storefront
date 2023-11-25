import { PlusIcon, SearchIcon } from "@/util/icons";
import React from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FaqSection() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "What is shoptinga",
      children: (
        <p>
          shoptinga has been crafted as an operating system that seamlessly
          integrates with both digital and physical products, providing a
          platform that not only facilities transactions but also enhances the
          overall experience for both buyers and sellers. this innovative system
          is dedicated to creating a sense of ease and empowerment by
          streamlining the interaction between consumers and empowerment by
          streamlining between consumers and product in in the ever evolving
          marketplace.
        </p>
      ),
    },
    {
      key: "2",
      label: "can i sell physical product on shoptinga?",
      children: (
        <p>
          yes, the shoptinga storefront empower you to effortlessly sell
          physical products, harnessing the capabilities pf the shoptinga
          platform.
        </p>
      ),
    },
    {
      key: "3",
      label: "is it only  fiat i can pay with ?",
      children: (
        <p>
          shoptinga offers a dual payment system, allowing you the flexibility
          to choose between traditional fiat currency or cryptocurrency for your
          transactions.
        </p>
      ),
    },
    {
      key: "4",
      label: "what type of digital product can i sell?",
      children: (
        <p>
          With shoptinga you can sell all kinds of digital products like ebooks,
          online courses, music, softwares, digital arts, mobile apps, games,
          movies and tv shows, virtual events and more .
        </p>
      ),
    },
    {
      key: "5",
      label: "Are they any fees for using shoptinga ?",
      children: (
        <p>
          certainly, sellers csn enjoy a complimentary 3 month free trial period
          with shoptinga. Following this trial, a monthly subscription of 2000
          naira is applicable.
        </p>
      ),
    },
  ];

  return (
    <div className="accordionWrapper">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
