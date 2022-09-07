// import Image from "next/image";
import { Container } from "src/components/container";
// import visibilityImage from "public/images/visibility.svg";
// import manAndGirlImage from "public/images/man-girl.png";
// import manAndGirlShadowImage from "public/images/man-girl-shadow.svg";
import { ServiceCard } from "./card";
import { WhenIcon } from "src/icons/when-icon";
import { WhereIcon } from "src/icons/where-icon";
import { WhatIcon } from "src/icons/what-icon";

export const HomeService = () => {
  return (
    <section className="relative before:bg-[radial-gradient(closest-side_at_50%_50%,_#ffffff_0%,_#ffffff_15%,_#05bac5_100%)] before:contents-[''] before:absolute before:opacity-40 before:inset-0 after:contents-[''] after:absolute after:top-0 after:w-[100vw] after:h-[216px] after:border-y-[108px] after:border-x-[50vw] after:border-b-transparent after:border-l-transparent after:border-t-white after:border-r-white">
      <div className="h-[810px] pt-[236px]">
        <Container>
          <div
            className="text-primary text-[48px] font-bold text-center"
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
            <div className="text-[48px] text-primary">Where</div>
            <div className="text-[109px]">
              <WhenIcon fontSize="inherit" />
            </div>
            <div className="text-[48px] text-primary">When</div>
            <div className="text-[137px]">
              <WhatIcon fontSize="inherit" />
            </div>
            <div className="text-[48px] text-primary">What</div>
          </div>

          <div className="w-full grid-cols-3 grid">
            <div>
              <div className="ml-auto pl-5 text-[18px] font-bold text-[#008DA9] w-[202px] h-[70px] border border-transparent border-b-[#70707020]">
                Your Goods Are
              </div>
            </div>
            <div>
              <div className="ml-auto pl-5 text-[18px] font-bold text-[#008DA9] w-[202px] h-[70px] border border-transparent border-b-[#70707020]">
                Your Goods Will
                <br />
                Arrive
              </div>
            </div>
            <div>
              <div className="ml-auto pl-5 text-[18px] font-bold text-[#008DA9] w-[202px] h-[70px] border border-transparent border-b-[#70707020]">
                Effective
                <br />
                Actions To Take
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
