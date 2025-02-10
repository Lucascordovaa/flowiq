import React from "react";
import PricingCard from "@/components/Home/Pricing/PricingCard";

const Pricing = () => {
  return (
    <div className="w-full bg-[#edffff]">
      <div className="mx-auto py-16 lg:w-3/5 lg:items-center">
        <div className="mx-auto lg:w-1/2">
          <h1 className="mt-6 text-center text-[2.7rem] leading-tight">
            Flexible Pricing for Scalable Business Insights
          </h1>
          <p className="mt-6 text-center text-lg leading-tight text-gray-500">
            Empower your team with data-driven decisions. Choose a plan that
            fits your business growth and unlock powerful analytics at every
            stage.
          </p>
        </div>
        {/* div with cards */}
        <div className="my-12 flex flex-col gap-10 lg:flex-row lg:justify-center lg:gap-14">
          <PricingCard
            image="/assets/thumbsup.svg"
            price={0}
            title="Starter"
            description="All the essential analytics tools for small teams and startups to get started with data-driven decision-making."
            buttonText="Get Started for free"
            features={[
              "Basic Dashboard & Reporting",
              "Single Project Tracking",
              "Limited Data Storage (1GB)",
              "Standard User Access",
              "Email Support",
            ]}
          />
          <PricingCard
            image="/assets/growth.svg"
            price={79}
            title="Growth"
            description="Advanced analytics and automation features for growing businesses that need deeper insights and scalability."
            buttonText="Start Free Trial"
            features={[
              "Advanced Dashboards & Custom Reports",
              "Unlimited Project Tracking",
              "AI-Powered Data Insights",
              "Role-Based Access Controls",
              "API Integrations",
            ]}
          />
          <PricingCard
            image="/assets/enterprise.svg"
            price={199}
            title="Enterprise"
            description="Enterprise-grade analytics with full customization, security, and dedicated support for large-scale businesses."
            buttonText="Talk to an Expert"
            features={[
              "Enterprise-Level Data Security",
              "Custom AI-Driven Analytics",
              "Dedicated Customer Success Manager",
              "Unlimited User Access",
              "24/7 Priority Support",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
