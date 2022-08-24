import Image from "next/image";
import rightBackground from "public/images/overview-right-bg.svg";
import leftBackground from "public/images/overview-left-bg.svg";
import itemsImage from "public/images/overview-items.svg";

export const HomeOverview = () => {
  return (
    <section className="text-center relative">
      <div className="absolute -top-[31vw] right-0 z-[5] pointer-events-none">
        <Image src={rightBackground} alt="offer-bg" />
      </div>
      <div className="absolute -top-[190px] left-0 z-[5] pointer-events-none">
        <Image src={leftBackground} alt="offer-bg" />
      </div>

      <div className="text-[#003F5C] text-[52px] font-bold pt-[132px]">
        See it &#8212; Clear it &#8212; Move it
      </div>
      <div className="text-[36px] text-[#707070] pt-3">
        We connect information, processes, and your network so you can:
      </div>

      <div className="relative h-[832px] mt-[196px] mb-[266px] pointer-events-none">
        <div className="absolute right-0">
          <Image src={itemsImage} alt="we do" />
        </div>
        <ul className="hidden">
          <li>Digitally track and trace all shipments regardless of carrier</li>
          <li>Quickly clear customs exceptions</li>
          <li>Connect and schedule drayage services</li>
          <li>Break down supply-chain information silos</li>
          <li>
            Get the trade information you need instantly at your desk or on your
            phone
          </li>
          <li>Give customers shipment updates they can trust</li>
        </ul>
      </div>
    </section>
  );
};
