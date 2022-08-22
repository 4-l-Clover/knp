import Image from "next/image";
import offerServiceImage from "public/images/offer-overview.png";
import offerBackground from "public/images/offer-bg.svg";

const Card = ({ title, p1, p2, p3 }) => {
  return (
    <div className="bg-white rounded-lg p-8 w-[414px] min-h-[355px] shadow-lg">
      <h6 className="text-[28px] font-bold text-[#003F5C]">{title}</h6>
      <p className="font-['Roboto'] text-[21px] text-[#707070] pt-[22px]">
        {p1}
      </p>
      <p className="font-['Roboto'] text-[21px] text-[#707070] pt-[22px]">
        {p2}
      </p>
      {p3 && (
        <p className="font-['Roboto'] text-[21px] text-[#707070] pt-[22px]">
          {p3}
        </p>
      )}
    </div>
  );
};

export const HomeOffers = () => {
  return (
    <section className="relative overflow-y-hidden">
      <h2 className="text-[#003F5C] font-bold text-5xl px-[140px] pt-[146px]">
        Only KlearNow offers:
      </h2>

      <div className="absolute top-[428px] left-0 w-full z-[-1]">
        <div className="h-[850px] bg-gradient-to-l from-[#003F5C] via-[#428BA6] to-[#59B7C3] relative after:contents-[''] after:absolute after:left-0 after:top-0 after:w-[850] after:h-[850px] after:border-y-[425px] after:border-x-[425px] after:border-b-transparent after:border-r-transparent after:border-t-white after:border-l-white" />
      </div>
      <div className="absolute -top-[50px] left-0 w-full z-[-1]">
        <Image src={offerBackground} alt="offer-bg" />
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-[45px] pl-[140px] pt-[144px] pb-[150px]">
        <div className="pl-[53px]">
          <h6 className="font-bold text-[28px] text-[#003F5C]">
            Smart Logistics as a Service
          </h6>
          <p className="font-['Roboto'] text-[21px] text-[#707070]">
            AI-powered platform digitizes emails, PDFs, and
            <br />
            spreadsheets into structured data you can use
          </p>
          <p className="font-['Roboto'] text-[21px] text-[#707070] pt-[22px]">
            Deep learning and natural language processing
            <br />
            streamline data capture and cut errors
          </p>

          <div className="grid grid-cols-2 gap-[45px] pt-[52px]">
            <Card
              title="Customs and drayage visibility"
              p1="Complete transparency from origin to destination"
              p2="Detailed schedule information for better planning and cost control"
            />
            <Card
              title="Machine-aided expertise to cut complexity"
              p1="Customs experts and AI complete your customs entries"
              p2="Technology connects suppliers, customs brokers, carriers, and network members"
            />
            <Card
              title="Cloud-based connectivity"
              p1="Access documents and data anywhere, anytime"
              p2="No software needed— sign up and go"
            />
            <Card
              title="Powerful integrations built in"
              p1="Real-time shipment status and port terminal updates on arrival"
              p2="Monitor and address critical customs events"
              p3="Partner integrations consolidate information and add flexibility"
            />
          </div>
        </div>
        <div className="overflow-x-hidden h-[1048px] relative">
          <Image
            src={offerServiceImage}
            alt="overview"
            layout="fill"
            objectFit="cover"
            objectPosition="left"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};
