import { useEffect, useState } from "react";
import Image from "next/image";
import { Grow } from "@mui/material";
import backgroundGradient from "public/images/background.svg";
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
      <div className="absolute w-full pointer-events-none 2xl:h-[1080px] xl:h-[768px]">
        <Image
          src={backgroundGradient}
          alt="gradient"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="xl:h-[768px] 2xl:h-[1080px] bg-primary after:contents-[''] after:absolute after:bottom-0 after:w-[100vw] after:2xl:h-[216px] after:xl:h-[128px] after:2xl:border-y-[108px] after:xl:border-y-[64px] after:border-x-[50vw] after:border-t-transparent after:border-r-transparent after:border-b-white after:border-l-white">
        <Container>
          <div className="grid 2xl:grid-cols-[auto_704px] xl:grid-cols-[auto_585px] gap-[46px] 2xl:pt-[269px] xl:pt-[217px] text-white z-10">
            <div>
              <Grow in={isMounted} {...(isMounted ? { timeout: 1000 } : {})}>
                <div className="origin-top-right">
                  <p className="2xl:text-5xl xl:text-4xl font-bold leading-[1.1]">
                    Simplify global customs clearance and drayage
                  </p>
                  <p className="2xl:text-[25px] xl:text-[20px] font-light leading-normal pt-[20px]">
                    Consolidated and actionable
                    <br />
                    trade information at your
                    <br />
                    fingertips
                  </p>
                </div>
              </Grow>
              <div className="pt-9" />
              <Grow in={isMounted} {...(isMounted ? { timeout: 1700 } : {})}>
                <button className="origin-center bg-[#F6EC6A] hover:bg-[#d0c85a] active:bg-[#d0c85a] 2xl:h-[60px] xl:h-[53px] rounded-[32px] text-primary 2xl:text-[20px] xl:text-[18px] font-bold px-[44px]">
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
