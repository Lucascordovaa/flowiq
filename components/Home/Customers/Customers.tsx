import React from "react";
import CustomersCard from "@/components/Home/Customers/CustomersCard";

const Customers = () => {
  return (
    <div className="mx-auto py-16 lg:w-3/5 lg:items-center">
      <div className="mx-auto lg:w-1/2">
        <h1 className="mt-6 text-center text-[2.7rem] leading-tight">
          See what our customers have to say about us
        </h1>
      </div>
      <div className="my-12 flex flex-col gap-10 lg:flex-row lg:justify-center lg:gap-10">
        <CustomersCard
          image="/assets/netflixred.svg"
          comment="“FlowIQ has been my go-to solution for user and product analytics across multiple companies. It’s reliable, efficient, and helps drive smarter decisions.”"
          profile="/images/pic1.png"
          name="Jake Thompson"
          position="CEO Of Netflix"
        />
        <CustomersCard
          image="/assets/microsoftcolor.svg"
          comment="“FlowIQ is our central source of truth for product data and business analytics. It keeps our team aligned and helps us focus on what truly matters.”"
          profile="/images/pic3.png"
          name="Ryan Carter"
          position="CEO Of Microsoft"
        />
        <CustomersCard
          image="/assets/shopifycolor.svg"
          comment="“FlowIQ provides deeper user insights that can be easily shared across teams worldwide, driving better collaboration and smarter investments.”"
          profile="/images/pic2.png"
          name="Rebecca Bennet"
          position="Manager of Shopify"
        />
      </div>
    </div>
  );
};

export default Customers;
