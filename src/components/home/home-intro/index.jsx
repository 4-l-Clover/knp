import { useEffect, useState } from "react";
import Image from "next/image";
import { Grow } from "@mui/material";
import backgroundGradient from "public/images/background.svg";
import airplaneImage from "public/images/bg-airplane.svg";
import shipImage from "public/images/bg-ship.svg";
import truckImage from "public/images/bg-truck.svg";
import laptopImage from "public/images/laptop.png";
import { Container } from "src/components/container";

export const HomeIntro = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <section className="relative">
      <div className="absolute w-full pointer-events-none 2xl:h-[1080px]">
        <Image
          src={backgroundGradient}
          alt="gradient"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="xl:h-[768px] 2xl:h-[1080px] bg-primary after:contents-[''] after:absolute after:bottom-0 after:w-[100vw] after:h-[216px] after:border-y-[108px] after:border-x-[50vw] after:border-t-transparent after:border-r-transparent after:border-b-white after:border-l-white">
        <Container>
          <div className="absolute w-[269px] h-[223px] top-[100px] -left-[150px]" data-aos="fade-right" data-aos-delay="300" data-aos-duration="450">
            <Image
              src={airplaneImage}
              alt="airplane"
              layout="responsive"
              priority
            />
          </div>
          <div className="absolute w-[462px] h-[233px] -bottom-[240px] -left-[206px]"  data-aos="fade-right" data-aos-delay="500" data-aos-duration="1500">
            <Image src={truckImage} alt="truck" layout="responsive" priority />
          </div>
          <div className="absolute w-[539px] h-[253px] -bottom-[287px] -right-[270px]" data-aos="fade-left" data-aos-delay="700" data-aos-duration="1000">
            <Image src={shipImage} alt="ship" layout="responsive" priority />
          </div>

          <div className="grid grid-cols-[auto_650px] gap-[54px] pt-[269px] text-white z-10">
            <div className="pt-9">
              <Grow in={isMounted} {...(isMounted ? { timeout: 1000 } : {})}>
                <div className="origin-top-right">
                  <p className="text-5xl font-bold leading-[1.1]">
                    Simplify global customs clearance and drayage
                  </p>
                  <p className="text-[25px] font-light leading-normal pt-[20px]">
                    Consolidated actionable trade
                    <br />
                    information at your fingertips
                  </p>
                </div>
              </Grow>
              <div className="pt-9" />
              <Grow in={isMounted} {...(isMounted ? { timeout: 1700 } : {})}>
                <button className="origin-center bg-[#F6EC6A] hover:bg-[#d0c85a] active:bg-[#d0c85a] h-[60px] rounded-[32px] text-primary text-[20px] font-bold px-[44px]">
                  Explore KlearNow
                </button>
              </Grow>
            </div>
            <div data-aos="zoom-in">
              <Image
                src={laptopImage}
                alt="laptop"
                layout="responsive"
                priority
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
