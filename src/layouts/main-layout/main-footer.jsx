import Image from "next/image";
import mapSvg from "public/images/map.svg";
import logoWhite from "public/images/logo-white.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const MainFooter = () => {
  return (
    <footer className="h-[602px] bg-[#003F5C] overflow-hidden relative text-[18px]">
      <div className="absolute w-full h-full pointer-events-none">
        <Image
          src={mapSvg}
          className="opacity-10"
          alt="map"
          layout="responsive"
        />
      </div>
      <div className="px-[140px] pt-[107px] pb-[46px] text-white flex h-full">
        <div className="flex flex-col items-start h-full -mt-4">
          <Image src={logoWhite} alt="footer logo" />
          <p className="pt-3 leading-loose">
            3945 Freedom Circle,
            <br />
            Suite 400 Santa Clara,
            <br />
            CA 95054, USA
          </p>
          <p className="pt-7 leading-loose">
            India Development Centre
            <br />
            Level 10, Unitech Cyber Park, Tower B,
            <br />
            Sector - 39, Gurgaon - 122003,
            <br />
            Haryana, India
          </p>
          <p className="mt-auto">
            Copyright © 2022 KlearNow. All Rights Reserved.
          </p>
        </div>
        <div className="ml-auto flex relative">
          <div>
            <p className="text-2xl font-bold">SOLUTIONS</p>
            <ul className="pt-6 leading-[3.3]">
              <li>Importer</li>
              <li>Customs Broker</li>
              <li>Freight Forwarder</li>
              <li>Carrier</li>
            </ul>
          </div>
          <div className="ml-[120px]">
            <p className="text-2xl font-bold">COMPANY</p>
            <ul className="pt-6 leading-[3.3]">
              <li>About Us</li>
              <li>Carriers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="mr-9 ml-[152px]">
            <p className="text-2xl font-bold">RESOURCES</p>
            <ul className="pt-6 leading-[3.3]">
              <li>Blog</li>
              <li>News</li>
              <li>Webinars</li>
              <li>Case Studies</li>
            </ul>
          </div>
          <div className="absolute bottom-1 right-[64px] flex items-center text-4xl">
            <LinkedInIcon fontSize="inherit" />
            <div className="text-5xl">
              <YouTubeIcon fontSize="inherit" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
