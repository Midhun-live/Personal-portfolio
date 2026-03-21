import React from 'react';
import Image from "next/image";
import { loader } from '@/public/assets';

function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex justify-center items-center">
      <Image
        className="w-32 h-32"
        src={loader}
        alt="pre-loader"
      />
    </div>
  );
}
export default Preloader