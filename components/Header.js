import React, {useContext, useEffect, useState} from 'react';
import Link from 'next/link';
// @ts-ignore



const Header = () => {


    return (
        <div className='container mx-auto px-5 text-black'>
            <div className='border-b w-full inline-block border-blue-500 py-4'>
                <div className='md:float-left block'>
                    <Link href='/'>
                     <span className='cursor-pointer font-bold text-4xl'>
                         Bigl Clicker
                     </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                </div>

            </div>
        </div>
    );
}
export default Header;
