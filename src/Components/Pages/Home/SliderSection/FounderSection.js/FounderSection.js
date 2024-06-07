import React, { useEffect } from 'react';
import founder1 from '../../../../../images/Chairman-of-BSRM-Group-1-scaled-1.webp'
import founder2 from '../../../../../images/MD-of-BSRM-Group-scaled-1.webp'
import founder3 from '../../../../../images/DSC_0823.webp'
import founder4 from '../../../../../images/DSC_0830.webp'
import founder5 from '../../../../../images/DSC_0851.webp'
import AOS from 'aos';
import 'aos/dist/aos.css'
const FounderSection = () => {
    const founders = [
        {photo:founder1, animate: 'zoom-in', Name:" Alihussain Akberali FCA"},
        {photo:founder2, animate: 'zoom-in', Name:" Aameir Alihussain"},
        {photo:founder3, animate: 'zoom-in', Name:" Zohair Taherali"},
        {photo:founder4, animate: 'zoom-in', Name:" Sabeen Aameir"},
        {photo:founder5, animate: 'zoom-in', Name:" Tehseen Zohair Taherali"},
    ]
    useEffect(() => {
        AOS.init({
          // Global settings:
          duration: 1200, // values from 0 to 3000, with step 50ms
          easing: 'ease', // default easing for AOS animations
          once: true, // whether animation should happen only once - while scrolling down
        });
      }, []);
    return (
        <div className='my-10 px-10'>
            <h1 className='lg:text-5xl lg:font-extrabold text-warning text-center md:text-4xl sm:text-2xl uppercase'>Founder</h1>

            <div className='grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-12 my-10'>
                {
                    founders.map(founder=>
                        <div className='flex flex-col gap-3' data-aos={founder.animate}>
                           <div className='overflow-hidden'>
                            <img className='lg:w-72 sm:w-full hover:scale-110 transition rounded-sm' src={founder.photo} alt="" />
                           </div>
                            <h3 className='text-xl font-bold text-center text-black'>{founder.Name}</h3>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default FounderSection;