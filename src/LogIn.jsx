import React from 'react';
import Medical from './Image/medical1.png'
import Medical2 from './Image/medical2.png'
import Main from './Image/Main.png'


const LogIn = () => {
  return (

     <div
      className="rounded-none "
      role="banner"
      aria-label="Medical and Healthcare homepage"
    >
      {/* MAIN HERO */}
      <main
        className="flex relative flex-col items-end pb-12 w-full min-h-[753px]  max-md:px-5 max-md:pt-24 max-md:max-w-full "
        role="main"
        aria-label="Medical and Healthcare homepage hero section"
      >
        <img
          src={Main} 
          alt="Medical facility background"
          className="absolute top-0 left-0 w-full h-[550px] object-cover rounded-b-[40px] z-[-1]"
          role="img"
        />

        <header className="relative w-full max-md:max-w-full ">
          <div className="flex gap-5 max-md:flex-col justify-between mx-10 mt-2">
            <div className="max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/be69b2afbbb64a02ad678735c20641c6/ef9d652622c15dcd44c48faa5866c65a5ae01275?placeholderIfAbsent=true"
                alt="Company logo"
                className="object-contain shrink-0 mt-2.5 max-w-full aspect-[3.41] w-[239px] max-md:mt-10 ml-[-10px]"
              />
            </div>
            <h1 className='text-white font-medium text-3xl mt-5'>Daftar Pelayanan</h1>
            <div className="ml-5 w-max-md:ml-0 max-md:w-full ">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/be69b2afbbb64a02ad678735c20641c6/37b8072c7fcb0d31139cb33103e19b2e0aad1249?placeholderIfAbsent=true"
                alt="Healthcare icon"
                className="object-contain shrink-0 max-w-full aspect-square w-[105px] max-md:mt-10 "
              />
            </div>
          </div>
        </header>
        <section className="relative mt-28 text-8xl font-bold text-right text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl pt-15 pr-8 ">
          <h1 className="leading-tight text-6xl md:text-7xl max-md:text-4xl">
            Medical & <br /> Healthcare
            <br />
          </h1>
          <h6 className='text-[20px] font-normal'>"Kesehatan adalah harta paling berharga yang sering dilupakan sampai <br /> tubuh memberi peringatan. Jagalah sebelum terlambat."</h6>
        </section>
      </main>
      
      {/* BUTTONS */}
      <section className='' >
        <div className='grid grid-cols-2 gap-1 w-full h-auto mt-[-170px] place-items-center overflow-hidden'>
            <div className="shadow-sm bg-[#687DA0] h-[285px] rounded-[38px] w-[643px] max-md:rounded-3xl max-md:h-[200px] max-md:w-[90%] max-sm:rounded-3xl max-sm:h-[150px] max-sm:w-[85%] px-10 py-5 ">
                <h1 className="text-6xl text-white h-[55px] p-[15px] max-md:h-auto max-md:text-4xl max-md:w-[70%] max-sm:w-4/5 max-sm:h-auto max-sm:text-3xl">
                Pasien BPJS
                </h1>
                <img src={Medical} className='mt-[-350px] ml-[-145px] max-w-200'/> 
            </div>
      
            <div className="shadow-sm bg-[#6795b4] h-[285px] rounded-[38px] w-[643px] max-md:rounded-3xl max-md:h-[200px] max-md:w-[90%] max-sm:rounded-3xl max-sm:h-[150px] max-sm:w-[85%] px-10 py-5 ">
                <h1 className="text-6xl text-white h-[55px] p-[15px] max-md:h-auto max-md:text-4xl max-md:w-[70%] max-sm:w-4/5 max-sm:h-auto max-sm:text-3xl">
                  Pasien Umum
                </h1>
                <img src={Medical2} className='mt-[-350px] ml-[-145px] max-w-200'/> 
            </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
