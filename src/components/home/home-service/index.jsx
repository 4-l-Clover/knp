// import Image from "next/image";
import { Container } from "src/components/container";
// import visibilityImage from "public/images/visibility.svg";
// import manAndGirlImage from "public/images/man-girl.png";
// import manAndGirlShadowImage from "public/images/man-girl-shadow.svg";
// import { ServiceCard } from "./card";
import { WhenIcon } from "src/icons/when-icon";
import { WhereIcon } from "src/icons/where-icon";
import { WhatIcon } from "src/icons/what-icon";

export const HomeService = () => {
  return (
    <section className="relative before:bg-[radial-gradient(closest-side_at_50%_50%,_#ffffff_0%,_#ffffff_15%,_#05bac5_100%)] before:contents-[''] before:absolute before:opacity-10 before:inset-0 after:contents-[''] after:absolute after:top-0 after:w-[100vw] after:2xl:h-[216px] after:xl:h-[128px] after:2xl:border-y-[108px] after:xl:border-y-[64px] after:border-x-[50vw] after:border-b-transparent after:border-l-transparent after:border-t-white after:border-r-white">
      <div className="2xl:h-[810px] xl:h-[768px] 2xl:pt-[236px] xl:pt-[179px]">
        <Container>
          <div
            className="text-primary 2xl:text-[48px] xl:text-4xl font-bold text-center"
            data-aos="fade-up"
          >
            Be in the KNOW with...
          </div>

          <div
            className="mx-auto w-[186px] h-2 bg-[#05BAC5] mt-[56px] mb-16"
            data-aos="fade-up"
          />

          <div className="flex items-center w-full justify-evenly">
            <div className="text-[88px]">
              <WhereIcon fontSize="inherit" />
            </div>
            <div className="2xl:text-[48px] xl:text-4xl font-bold text-primary">Where</div>
            <div className="text-[109px]">
              <WhenIcon fontSize="inherit" />
            </div>
            <div className="2xl:text-[48px] xl:text-4xl font-bold text-primary">When</div>
            <div className="text-[137px]">
              <WhatIcon fontSize="inherit" />
            </div>
            <div className="2xl:text-[48px] xl:text-4xl font-bold text-primary">What</div>
          </div>

          <div className="w-full grid-cols-3 grid text-primary">
            <div className="ml-auto pl-5 text-[18px] font-bold w-[202px] h-[70px] border border-transparent border-b-[#70707020]">
              Your Goods Are
            </div>
            <div className="ml-auto pl-5 text-[18px] font-bold w-[202px] h-[70px] border border-transparent border-b-[#70707020]">
              Your Goods Will
              <br />
              Arrive
            </div>
            <div className="ml-auto pl-5 text-[18px] font-bold w-[202px] h-[70px] border border-transparent border-b-[#70707020]">
              Effective
              <br />
              Actions To Take
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
