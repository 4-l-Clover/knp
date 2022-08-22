import Image from "next/image";
import airPlaneImage from "public/images/airplane.svg";
import laptopImage from "public/images/laptop.png";
import { Container } from "../container";

export const HomeHero = () => {
  return (
    <section className="relative">
      <div className="absolute w-full pointer-events-none">
        <Image
          src={airPlaneImage}
          alt="airplane"
          layout="responsive"
          priority
        />
      </div>
      <div className="h-[66vw] bg-[#003F5C] after:contents-[''] after:absolute after:bottom-0 after:w-[100vw] after:h-[190px] after:border-y-[95px] after:border-x-[50vw] after:border-t-transparent after:border-r-transparent after:border-b-white after:border-l-white">
        <Container>
          <div className="grid grid-cols-2 gap-10 pt-[400px] text-white z-10">
            <div className="pt-9">
              <p className="text-6xl font-bold leading-[1.1]">
                Simplify global customs clearance and drayage
              </p>
              <p className="text-4xl font-light leading-normal pt-[50px]">
                Consolidated actionable trade
                <br />
                information at your fingertips
              </p>
              <div className="pt-[44px]" />
              <button className="bg-[#F6EC6A] hover:bg-[#d0c85a] active:bg-[#d0c85a] h-[64px] rounded-[36px] text-[#003F5C] text-[21px] font-bold px-[44px]">
                Explore KlearNow
              </button>
            </div>
            <div>
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
