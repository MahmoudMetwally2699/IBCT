"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
        Directory of Certified Trainers
        </h1>

        <p className="hero__subtitle">
        Unleash Excellence with IBCT Certified Trainers
        </p>

        <CustomButton
          title="Certified Trainers"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container ">
        <div className="hero__image animated-image">
          <Image src="/IBCT_Logo_Final_with_White_Ring_500x500.png" alt="hero" width={550} height={50} className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
