import Image from "next/image";
import visibilityImage from "public/images/visibility.svg";
import manAndGirlImage from "public/images/man-girl.png";
import visibilityWhereImage from "public/images/visibility-where.svg";
import visibilityWhenImage from "public/images/visibility-when.svg";
import visibilityWhyImage from "public/images/visibility-why.svg";
import visibilityToolsImage from "public/images/visibility-tools.svg";
import { Card } from "./card";

export const HomeVisibility = () => {
  return (
    <section>
      <h2 className="text-[#003F5C] font-bold text-5xl px-[140px] my-[50px]">
        KlearNow gives you visibility
      </h2>
      <div className="h-[850px] bg-gradient-to-r from-[#003F5C] via-[#428BA6] to-[#59B7C3] relative after:contents-[''] after:absolute after:right-0 after:top-0 after:w-[850] after:h-[850px] after:border-y-[425px] after:border-x-[425px] after:border-t-transparent after:border-l-transparent after:border-b-white after:border-r-white">
        <div className="absolute z-10 bottom-[243px] right-[140px]">
          <Image src={visibilityImage} className="" alt="visibility" />
        </div>
        <div className="absolute z-10 -bottom-[6px] right-[170px]">
          <Image src={manAndGirlImage} alt="people" />
        </div>

        <div className="flex px-[140px] pt-[148px]">
          <Card
            svgElement={<Image src={visibilityWhereImage} alt="where" />}
            title="Where"
            subTitle="your goods are"
          />
          <Card
            svgElement={<Image src={visibilityWhenImage} alt="where" />}
            title="When"
            subTitle="they will arrive"
          />
          <Card
            svgElement={<Image src={visibilityWhyImage} alt="where" />}
            title="Why"
            subTitle="they are held up at customs"
            selected
          />
          <Card
            svgElement={<Image src={visibilityToolsImage} alt="where" />}
            title=""
            subTitle="... and the tools to take effective action"
          />
        </div>
      </div>
    </section>
  );
};
