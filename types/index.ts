import { MouseEventHandler } from "react";


export interface FilterProps {

  per_page?: number;
  search?:string | number | boolean ;
  level_of_certification?:string;

}

export interface HomeProps {
  searchParams: FilterProps;
}



export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}



export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
export interface Rest {

  setManuFacturer: (manufacturer: string) => void;
  setModel: (Model: string) => void;

}

export interface FirstApiDataItem {
  id: number;
  title:{
    rendered:string
  };
  secondary_image: number;
  acf: {
    member_name: string;
    job_title: string;
    contact_email: string;
    mobile: string;
    Trainer_country: string;
    trainer_region: number;
    university: string;
    faculty: string;
    birth_date: string;
    english_skills: string;
    address: string;
    certification_level: number;
    publishing_status: string;
    run_number: string;
    first_certification_date: string;
    expiration_date: string;
    level_of_certification: string;
    send_first_cer: string;
    send_second_cer: string;
    certification_date: string;
    secondary_image: null | any; // You can replace 'any' with a proper type if needed
    member_bio: string;
    twitter_profile_url: string;
    facebook_profile_url: string;
    today: string;

  };
}

export interface HomeProps2 {
  searchParams: FirstApiDataItem;
}

export interface SecondApiData {
  source_url: string
}
export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}