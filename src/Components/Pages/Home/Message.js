import React, { useEffect } from 'react';
import founder1 from '../../../images/Chairman-of-BSRM-Group-1-scaled-1.webp'
import founder2 from '../../../images/MD-of-BSRM-Group-scaled-1.webp'
import founder3 from '../../../images/DSC_0823.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Message = () => {
    useEffect(() => {
        AOS.init({
          // Global settings:
          duration: 1200, // values from 0 to 3000, with step 50ms
          easing: 'ease', // default easing for AOS animations
          once: true, // whether animation should happen only once - while scrolling down
        });
      }, []);
    return (
        <div className='p-12'>
           <div className='flex sm:flex-col md:flex-col lg:flex-row justify-start' data-aos="fade-right">
                <img className='border-4 border-warning rounded' src={founder1} alt="" />
                <p className=' text-xl text-justify text-black lg:px-12 md:mt-2 sm:mt-2'>Burhani BSRM School was established in 2006 in Depar par, Shershah of Bangla Bazar, Chattogram. The majority of the population in that area are extremely poor who finds it difficult to manage day to day basic expenses for living. Many of them working as rickshaw pullers, day laborers or employed art menial jobs in small shops. The women who works gets job as maids or day labors. Burhani BSRM School provides free education from nursery to grade 8 kids. The goal through this project is to prepare students for academic success in their further education, to enable students for future endeavors and to prepare them to be responsible and productive citizens. The school provides free books, extra coaching, computer training, sports/ art facilities and uniforms. The meritorious students gets scholarships based on academic results. After grade 8, BSRM support these students financially to continue their study in nearby schools to pursue higher education. BSRM takes the responsibility of providing all the funding for the school expenses. At present more than 500 slum children taking education from the school.</p>
           </div>
           <div className='flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row justify-start gap-6 mt-10' data-aos="fade-left">
                <p className=' text-xl text-justify text-black lg:px-12 md:mt-2 sm:mt-2'>Burhani BSRM School was established in 2006 in Depar par, Shershah of Bangla Bazar, Chattogram. The majority of the population in that area are extremely poor who finds it difficult to manage day to day basic expenses for living. Many of them working as rickshaw pullers, day laborers or employed art menial jobs in small shops. The women who works gets job as maids or day labors. Burhani BSRM School provides free education from nursery to grade 8 kids. The goal through this project is to prepare students for academic success in their further education, to enable students for future endeavors and to prepare them to be responsible and productive citizens. The school provides free books, extra coaching, computer training, sports/ art facilities and uniforms. The meritorious students gets scholarships based on academic results. After grade 8, BSRM support these students financially to continue their study in nearby schools to pursue higher education. BSRM takes the responsibility of providing all the funding for the school expenses. At present more than 500 slum children taking education from the school.</p>    
                <img className='border-4 border-warning rounded' src={founder2} alt="" />
               
           </div>
           <div className='flex sm:flex-col md:flex-col lg:flex-row justify-start gap-6 mt-10 'data-aos="fade-right">
                <img className='border-4 border-warning rounded' src={founder3} alt="" />
                <p className=' text-xl text-justify text-black lg:px-12 md:mt-2 sm:mt-2'>Burhani BSRM School was established in 2006 in Depar par, Shershah of Bangla Bazar, Chattogram. The majority of the population in that area are extremely poor who finds it difficult to manage day to day basic expenses for living. Many of them working as rickshaw pullers, day laborers or employed art menial jobs in small shops. The women who works gets job as maids or day labors. Burhani BSRM School provides free education from nursery to grade 8 kids. The goal through this project is to prepare students for academic success in their further education, to enable students for future endeavors and to prepare them to be responsible and productive citizens. The school provides free books, extra coaching, computer training, sports/ art facilities and uniforms. The meritorious students gets scholarships based on academic results. After grade 8, BSRM support these students financially to continue their study in nearby schools to pursue higher education. BSRM takes the responsibility of providing all the funding for the school expenses. At present more than 500 slum children taking education from the school.</p>
           </div>
        </div>
    );
};

export default Message;