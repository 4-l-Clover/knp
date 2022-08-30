import Image from "next/image";
import { Container } from "src/components/container";
import visibilityImage from "public/images/visibility.svg";
import manAndGirlImage from "public/images/man-girl.png";
import manAndGirlShadowImage from "public/images/man-girl-shadow.svg";
import { ServiceCard } from "./card";
import { WhenIcon } from "src/icons/when-icon";
import { WhereIcon } from "src/icons/where-icon";
import { WhatIcon } from "src/icons/what-icon";

export const HomeService = () => {
  return (
    <section className="relative -mt-[250px] bg-[radial-gradient(closest-side_at_50%_50%,_#ffffff_0%,_#ffffff_15%,_#05bac5_100%)] after:contents-[''] after:absolute after:top-0 after:w-[100vw] after:h-[216px] after:border-y-[108px] after:border-x-[50vw] after:border-b-transparent after:border-l-transparent after:border-t-white after:border-r-white z-[-1]">
      <div className="h-[1080px] z-10 pt-[364px]">
        <Container>
          <div className="px-10">
            <div className="flex items-center justify-between">
              <div
                className="text-primary text-4xl font-bold"
                data-aos="fade-right"
              >
                Be in the <br />
                KNOW
                <br />
                with...
              </div>

              <div className="flex">
                <ServiceCard
                  svgElement={
                    <div className="text-[92px]">
                      <WhereIcon fontSize="inherit" />
                    </div>
                  }
                  title="WHERE"
                  subTitle="your goods are"
                  first
                />
                <ServiceCard
                  svgElement={
                    <div className="text-[92px]">
                      <WhenIcon fontSize="inherit" />
                    </div>
                  }
                  title="WHEN"
                  subTitle={`your goods will \n arrive`}
                  delay="200"
                />
                <ServiceCard
                  svgElement={
                    <div className="text-[92px]">
                      <WhatIcon fontSize="inherit" />
                    </div>
                  }
                  title="WHAT"
                  subTitle={`effective \n actions to take`}
                  selected
                  last
                  delay="400"
                />
              </div>

              <div className="relative w-[230px] h-[351px]" data-aos="zoom-in">
                <div className="absolute z-10 w-[220px] h-[271px] top-[50px]">
                  <Image src={visibilityImage} alt="visibility" layout="responsive" />
                </div>
                <div className="absolute z-10 w-[145px] h-[316px] top-[40px] left-4">
                  <Image src={manAndGirlImage} alt="people" layout="responsive" />
                </div>
                <div className="absolute z-[9] w-[248px] h-[49px] bottom-0 -left-8">
                  <Image src={manAndGirlShadowImage} alt="shadow" layout="responsive" />
                </div>
              </div>
            </div>

            <div
              className="text-center text-[31px] font-bold pt-[120px]"
              data-aos="fade-up"
            >
              Streamline the movement of your goods and
              <br />
              mitigate supply chain risks
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
