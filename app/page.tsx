import { IBCT } from "@utils";
import { HomeProps } from "@types";
import { trainers } from "@constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero, CustomButton } from "@components";




export default async function Home({ searchParams }: HomeProps) {

  const Ibct = await IBCT({
    per_page: searchParams.per_page || 5,
    search:searchParams.search||"",
    level_of_certification:searchParams.level_of_certification||'all',
  
  });



  const isDataEmpty2 = !Array.isArray(Ibct) || Ibct.length < 1 || !Ibct;



  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='level_of_certification' options={trainers} />
          </div>
        </div>

        {!isDataEmpty2 ? (
          <section>
            <div className='home__cars-wrapper'>
              {Ibct?.map((Ibct) => (
                <CarCard ibct={Ibct}  />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.per_page || 3) / 3}
              isNext={(searchParams.per_page || 3) > Ibct.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{Ibct?.message}</p>

          </div>
        )}
      </div>
    </main>
  );
}
