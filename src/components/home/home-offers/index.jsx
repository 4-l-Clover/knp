import Image from "next/image";
import offerServiceImage from "public/images/offer-overview.png";

export const HomeOffers = () => {
  return (
    <section className="relative">
      <h2 className="text-[#003F5C] font-bold text-5xl px-[140px] mt-[50px]">
        Only KlearNow offers:
      </h2>

      <div className="absolute top-0 left-0 w-full z-[-1]">
        <div className="h-[850px] bg-gradient-to-l from-[#003F5C] via-[#428BA6] to-[#59B7C3] relative after:contents-[''] after:absolute after:left-0 after:top-0 after:w-[850] after:h-[850px] after:border-y-[425px] after:border-x-[425px] after:border-b-transparent after:border-r-transparent after:border-t-white after:border-l-white"></div>
      </div>

      <div className="grid grid-cols-2 gap-[30px] pl-[140px]">
        <div className="pl-[20px]">
          <h6 className="font-bold text-[28px] text-[#003F5C]">
            Smart Logistics as a Service
          </h6>
          <p>AI-powered platform digitizes emails, PDFs, and</p>
          <p>
            Deep learning and natural language processing
            <br />
            streamline data capture and cut errors
          </p>
        </div>
        <div>
          <Image src={offerServiceImage} alt="overview" />
        </div>
      </div>
    </section>
  );
};
