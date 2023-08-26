"use client"

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import RestButton from "./RestButton";
import { CustomButton } from "@components";

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = () => {
   

    updateSearchParams(model.toLowerCase());
  };

  const updateSearchParams = (model: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("search", model);
    } else {
      searchParams.delete("search");
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  const resetInputs = () => {
    setManuFacturer("");
    setModel("");
  };

  return (
    <div className='searchbar'>
    
      <div className='searchbar__item'>
        <Image
          src='http://test.ketodietnutrition.org/TestKeto/wp-content/uploads/2023/01/male-avatar-ibct-directory.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Search...'
          className='searchbar__input'
        />
      </div>
      <CustomButton  handleClick={handleSearch} title={"Search"}/>
        
      <RestButton setManuFacturer={setManuFacturer} setModel={setModel} />
    </div>
  );
};

export default SearchBar;
