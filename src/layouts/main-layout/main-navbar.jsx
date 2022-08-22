import { AppBar } from "@mui/material";
import Image from "next/image";
import CampaignIcon from "@mui/icons-material/Campaign";
import logoSvg from "public/images/logo-top.svg";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";

export const MainNavbar = () => {
  return (
    <>
      <AppBar className="!bg-white !text-[#003f5c]">
        <div className="h-[70px] top-gradient-r px-[140px] flex items-center">
          <div className="absolute left-1/2 -translate-x-1/2 text-[#F6EC6A] font-medium">
            <CampaignIcon className="mr-2" />
            KlearNow + project44 Partnership Enhances Shipment Visibility
          </div>
          <div className="flex items-center ml-auto text-white">
            <div className="font-bold mr-6">LOGIN</div>
            <LanguageIcon />
            <div className="font-bold ml-5">EN US</div>
          </div>
        </div>

        <div className="h-[106px] px-[140px] flex items-center">
          <Image src={logoSvg} alt="logo" />
          <div className="font-bold ml-[90px]">Platform</div>
          <div className="font-bold ml-16">Resources</div>
          <div className="font-bold ml-16">Company</div>
          <div className="ml-auto flex items-center">
            <div className="font-medium">SHIPMENT TRACKER</div>
            <div className="font-medium ml-5 mr-[18px]">SEARCH</div>
            <SearchIcon />
          </div>
        </div>

        <div className="text-white top-gradient-l h-[70px] flex items-center">
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <div className="font-semibold mr-8 whitespace-nowrap">SOLUTIONS FOR</div>
            <div className="flex items-center">
              <LanguageIcon />
              <div className="text-[14px] font-bold ml-8">IMPORTER</div>
            </div>
            <div className="flex items-center ml-10">
              <ReplyAllIcon />
              <div className="text-[14px] font-bold ml-8 whitespace-nowrap">FREIGHT FORWARDER</div>
            </div>
            <div className="flex items-center ml-10">
              <ShieldOutlinedIcon />
              <div className="text-[14px] font-bold ml-8 whitespace-nowrap">CUSTOMS BROKER</div>
            </div>
            <div className="flex items-center ml-10">
              <LocalShippingOutlinedIcon />
              <div className="text-[14px] font-bold ml-8 whitespace-nowrap">DRAYAGE PROVIDER</div>
            </div>
          </div>
        </div>
      </AppBar>
    </>
  );
};
