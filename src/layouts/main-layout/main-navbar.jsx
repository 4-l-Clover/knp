import { AppBar } from "@mui/material";
import Image from "next/image";
import CampaignIcon from "@mui/icons-material/Campaign";
import logoSvg from "public/images/logo-top.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "src/components/container";
import { BoxIcon } from "src/icons/box-icon";
import { GlobeIcon } from "src/icons/globe-icon";
import { ShieldIcon } from "src/icons/shield-icon";
import { TruckIcon } from "src/icons/truck-icon";

export const MainNavbar = () => {
  return (
    <>
      <AppBar className="!bg-white !text-[#003f5c] !shadow-heavier">
        <div className="top-gradient-r">
          <Container>
            <div className="flex items-center h-[70px]">
              <div className="absolute left-1/2 -translate-x-1/2 text-[#F6EC6A] font-medium">
                <CampaignIcon className="mr-2" />
                KlearNow + project44 Partnership Enhances Shipment Visibility
              </div>
              <div className="flex items-center ml-auto text-white">
                <div className="font-bold mr-6">LOGIN</div>
                <GlobeIcon />
                <div className="font-bold ml-5">EN US</div>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <div className="h-[106px] flex items-center">
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
        </Container>

        <div className="top-gradient-l h-[70px] flex items-center">
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <div className="font-semibold mr-10 whitespace-nowrap text-white">
              SOLUTIONS FOR
            </div>
            <div className="text-white hover:cursor-pointer flex items-center group">
              <GlobeIcon color="inheritence" className="group-hover:text-[#05BAC5]"/>
              <div className="text-[14px] font-bold ml-4">IMPORTER</div>
            </div>
            <div className="text-white hover:cursor-pointer flex items-center ml-14 group">
              <BoxIcon color="inheritence" className="group-hover:text-[#05BAC5]"/>
              <div className="text-[14px] font-bold ml-4 whitespace-nowrap">
                FREIGHT FORWARDER
              </div>
            </div>
            <div className="text-white hover:cursor-pointer flex items-center ml-14 group">
              <ShieldIcon color="inheritence" className="group-hover:text-[#05BAC5]"/>
              <div className="text-[14px] font-bold ml-4 whitespace-nowrap">
                CUSTOMS BROKER
              </div>
            </div>
            <div className="text-white hover:cursor-pointer flex items-center ml-14 group">
              <TruckIcon color="inheritence" className="group-hover:text-[#05BAC5]"/>
              <div className="text-[14px] font-bold ml-4 whitespace-nowrap">
                DRAYAGE PROVIDER
              </div>
            </div>
          </div>
        </div>
      </AppBar>
    </>
  );
};
