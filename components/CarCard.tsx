"use client";

import { useState,useEffect } from "react";
import Image from "next/image";

import { fetchImages} from "@utils";
import { FirstApiDataItem } from "@types";

import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";


interface CarCardProps2 {
  ibct: FirstApiDataItem;
}


const  CarCard = ({ ibct }: CarCardProps2) => {
  const { acf,title } = ibct;

  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState("");

  useEffect(() => {
    async function fetchSecondaryImages() {
      const fetchedImages = await fetchImages(acf.secondary_image);
      setImages(fetchedImages);

    }
    fetchSecondaryImages();
  }, [acf.secondary_image]);
console.log(images)

  //const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {title.rendered} 
        </h2>
      </div>

      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>{acf.job_title}</span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
      
        <Image
          src={images||"http://test.ketodietnutrition.org/TestKeto/wp-content/uploads/2023/01/male-avatar-ibct-directory.png"}
          alt={`car model`}
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
       
          <div className="car-card__icon">
          <span className='self-start text-[14px] leading-[17px] font-semibold'>{acf.university}</span>
          </div>
          <div className="car-card__icon">
          <span className='self-start text-[14px] leading-[17px] font-semibold'>{acf.level_of_certification}</span>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} ibct={ibct} /> 
    </div>
  );
};

export default CarCard;
