import Image from "next/image";
import offerServiceImage from "public/images/offer-overview.png";
import offerBackground from "public/images/offer-bg.svg";
import { Container } from "src/components/container";

const Card = ({ title, p1, p2, p3, delay }) => {
  return (
    <div
      className="bg-white rounded-lg p-8 w-[414px] min-h-[355px] shadow-common"
      data-aos="flip-up"
      {...(delay && { "data-aos-delay": delay })}
    >
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
      <Container>
        <h2
          className="text-[#003F5C] font-bold text-5xl pt-[146px]"
          data-aos="fade-up"
        >
          Only KlearNow offers:
        </h2>
      </Container>

      <div className="absolute top-[428px] left-0 w-full z-[-1]">
        <div className="h-[850px] bg-gradient-to-l from-[#003F5C] via-[#428BA6] to-[#59B7C3] relative after:contents-[''] after:absolute after:left-0 after:top-0 after:w-[850] after:h-[850px] after:border-y-[425px] after:border-x-[425px] after:border-b-transparent after:border-r-transparent after:border-t-white after:border-l-white" />
      </div>
      <div className="absolute -top-[50px] left-0 w-full z-[-1]">
        <Image src={offerBackground} alt="offer-bg" />
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-[45px] pl-[140px] pt-[144px] pb-[150px]">
        <div className="pl-[53px]">
          <div data-aos="zoom-out-left">
            <h6 className="font-bold text-[28px] text-[#003F5C]">
              Smart Logistics as a Service
            </h6>
            <p className="font-['Roboto'] text-[21px] text-[#707070] pt-10">
              AI-powered platform digitizes emails, PDFs, and
              <br />
              spreadsheets into structured data you can use
            </p>
            <p className="font-['Roboto'] text-[21px] text-[#707070] pt-[22px]">
              Deep learning and natural language processing
              <br />
              streamline data capture and cut errors
            </p>
          </div>

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
              delay="300"
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
              delay="300"
            />
          </div>
        </div>
        <div className="overflow-x-hidden h-[1048px] relative shadow-heavy">
          <Image
            src={offerServiceImage}
            alt="overview"
            layout="fill"
            objectFit="cover"
            objectPosition="left top"
          />
        </div>
      </div>
    </section>
  );
};
