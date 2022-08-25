import Image from "next/image";
import visibilityImage from "public/images/visibility.svg";
import manAndGirlImage from "public/images/man-girl.png";
import manAndGirlShadowImage from 'public/images/man-girl-shadow.svg';
import visibilityWhereImage from "public/images/visibility-where.svg";
import visibilityWhenImage from "public/images/visibility-when.svg";
import visibilityWhyImage from "public/images/visibility-why.svg";
import visibilityToolsImage from "public/images/visibility-tools.svg";
import { Card } from "./card";
import { Container } from "src/components/container";

export const HomeVisibility = () => {
  return (
    <section>
      <Container>
        <h2 className="text-[#003F5C] font-bold text-5xl mt-[50px] mb-[122px]" data-aos="fade-up">
          KlearNow gives you visibility
        </h2>
      </Container>
      <div className="h-[850px] bg-gradient-to-r from-[#003F5C] via-[#428BA6] to-[#59B7C3] relative after:contents-[''] after:absolute after:right-0 after:top-0 after:w-[850] after:h-[850px] after:border-y-[425px] after:border-x-[425px] after:border-t-transparent after:border-l-transparent after:border-b-white after:border-r-white">
        <Container>
          <div className="absolute z-10 top-[254px] right-0">
            <Image src={visibilityImage} alt="visibility" />
          </div>
          <div className="absolute z-10 top-[225px] right-[30px]">
            <Image src={manAndGirlImage} alt="people" />
          </div>
          <div className="absolute z-[9] top-[748px] right-0">
            <Image src={manAndGirlShadowImage} alt="shadow" />
          </div>

          <div className="flex pt-[148px]">
            <Card
              svgElement={<Image src={visibilityWhereImage} alt="where" />}
              title="Where"
              subTitle="your goods are"
            />
            <Card
              svgElement={<Image src={visibilityWhenImage} alt="where" />}
              title="When"
              subTitle="they will arrive"
              delay="200"
            />
            <Card
              svgElement={<Image src={visibilityWhyImage} alt="where" />}
              title="Why"
              subTitle={`they are held up at \n customs`}
              selected
              delay="400"
            />
            <Card
              svgElement={<Image src={visibilityToolsImage} alt="where" />}
              title={`... and the tools to \n take effective \n action`}
              subTitle=""
              last
              delay="700"
            />
          </div>
        </Container>
      </div>
    </section>
  );
};
