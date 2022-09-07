// import Image from "next/image";
import { Container } from 'src/components/container';
// import visibilityImage from "public/images/visibility.svg";
// import manAndGirlImage from "public/images/man-girl.png";
// import manAndGirlShadowImage from "public/images/man-girl-shadow.svg";
// import { ServiceCard } from "./card";
import { WhenIcon } from 'src/icons/when-icon';
import { WhereIcon } from 'src/icons/where-icon';
import { WhatIcon } from 'src/icons/what-icon';

export const HomeService = () => {
  return (
    <section className="relative before:bg-[radial-gradient(closest-side_at_50%_50%,_#ffffff_0%,_#ffffff_15%,_#05bac5_100%)] before:contents-[''] before:absolute before:opacity-10 before:inset-0 after:contents-[''] after:absolute after:top-0 after:w-[100vw] after:2xl:h-[216px] after:xl:h-[128px] after:2xl:border-y-[108px] after:xl:border-y-[64px] after:border-x-[50vw] after:border-b-transparent after:border-l-transparent after:border-t-white after:border-r-white">
      <div className='2xl:h-[810px] xl:h-[768px] 2xl:pt-[236px] xl:pt-[179px]'>
        <Container>
          <div
            className='text-primary 2xl:text-[48px] xl:text-4xl font-bold text-center'
            data-aos='fade-up'
          >
            Be in the KNOW with...
          </div>

          <div className='mx-auto w-[186px] h-2 bg-[#05BAC5] mt-[56px] mb-16' data-aos='fade-up' />

          <div className='flex items-center w-full justify-between'>
            <div className='flex'>
              <div className='text-[88px] h-[153px] w-[153px] flex items-center justify-center'>
                <WhereIcon fontSize='inherit' />
              </div>
              <div className='text-primary pl-4'>
                <div className='2xl:text-[48px] xl:text-4xl font-bold tracking-[0.37px] h-[153px] flex items-center'>
                  Where
                </div>
                <div className='mt-5 text-[18px] font-bold h-[70px] border border-transparent border-b-[#70707020] tracking-[0.45px]'>
                  Your Goods Are
                </div>
              </div>
            </div>

            <div className='flex'>
              <div className='text-[109px] h-[153px] w-[153px] flex items-center justify-center'>
                <WhenIcon fontSize='inherit' />
              </div>
              <div className='text-primary pl-4'>
                <div className='2xl:text-[48px] xl:text-4xl font-bold tracking-[0.37px] h-[153px] flex items-center'>
                  When
                </div>
                <div className='mt-5 text-[18px] font-bold h-[70px] border border-transparent border-b-[#70707020] tracking-[0.45px]'>
                  Your Goods Will
                  <br />
                  Arrive
                </div>
              </div>
            </div>

            <div className='flex'>
              <div className='text-[137px] h-[153px] w-[153px] flex items-center justify-center'>
                <WhatIcon fontSize='inherit' />
              </div>

              <div className='text-primary pl-4'>
                <div className='2xl:text-[48px] xl:text-4xl font-bold tracking-[0.37px] h-[153px] flex items-center'>
                  What
                </div>
                <div className='mt-5 text-[18px] font-bold h-[70px] border border-transparent border-b-[#70707020] tracking-[0.45px]'>
                  Effective
                  <br />
                  Actions To Take
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
