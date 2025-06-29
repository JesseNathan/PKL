import React from 'react'
import Pasienlama from './Image/Image1.png'
import Pasienbaru from './Image/Image2.png'
import Print from './Image/Print.png'

function Pasien() {
  return (
    <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen  flex flex-col items-center justify-center relative">
      
      {/* Logo */}
          <div className="relative top-[-65px] gap-240 flex max-md:flex-col">
          <div className="max-md:ml-5 max-md:w-full">
            <img
               src="https://cdn.builder.io/api/v1/image/assets/be69b2afbbb64a02ad678735c20641c6/002dd8f3dbbb902ec73724109be5d3ada5aba01f?placeholderIfAbsent=true"
               alt="Company logo"
               className="object-contain mt-10 max-w-full aspect-[2.41] w-[250px] max-md:mt-10 ml-[-10px]"
             />
           </div>
           <div className="ml-5 w-max-md:ml-0 max-md:w-full">
               <img
                 src="https://cdn.builder.io/api/v1/image/assets/be69b2afbbb64a02ad678735c20641c6/37b8072c7fcb0d31139cb33103e19b2e0aad1249?placeholderIfAbsent=true"
                 alt="Healthcare icon"
                 className="object-contain mt-10 max-w-full aspect-[2.41] w-[250px] max-md:mt-10 ml-[-10px]0 "
               />
             </div>
         </div>

      {/* Menu utama */}
      <div className="grid grid-cols-1 sm:grid-cols-3 p-6 gap-25">
        {/* Pasien Lama */}
        <button className="bg-[#5e7291] hover:bg-[#4e617a] text-white px-10 py-12 rounded-4xl shadow-lg flex flex-col items-center space-y-4 ">
          <img src={Pasienlama}/>
          <span className="text-4xl font-bold">Pasien Lama</span>
        </button>

        {/* Pasien Baru */}
        <button className="bg-[#6e88a1] hover:bg-[#5e758d] text-white px-10 py-12 rounded-4xl shadow-lg flex flex-col items-center space-y-4">
          <img src={Pasienbaru}/>
          <span className="text-4xl font-semibold">Pasien Baru</span>
        </button>

        {/* Print */}
        <button className="bg-[#4d6f8a] hover:bg-[#3f5e77] text-white px-10 py-12 rounded-4xl shadow-lg flex flex-col items-center space-y-4">
          <img src={Print}/>
          <span className="text-4xl font-semibold">Cetak Tiket Antrian</span>
        </button>
      </div>
    </div>
  );
}

export default Pasien