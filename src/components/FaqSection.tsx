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
          physical products, harnessing the capabilities of the shoptinga
          platform.
        </p>
      ),
    },
    
    {
      key: "3",
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
      key: "4",
      label: "Are they any fees for using shoptinga ?",
      children: (
        <p>
          certainly, sellers can enjoy a complimentary 3 month free trial period
          with shoptinga. Following this trial, there is a monthly subscription applicable.
        </p>
      ),
    },
  ];

  return (
    <div className="accordionWrapper">
      <Accordion defaultActiveKey="0">
        {items.map((item, index) => (
          <Accordion.Item key={index} eventKey={String(index)}>
            <Accordion.Header>{item.label}</Accordion.Header>
            <Accordion.Body>{item.children}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
