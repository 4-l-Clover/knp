import { BoxIcon } from "src/icons/box-icon";
import { GlobeIcon } from "src/icons/globe-icon";
import { ShieldIcon } from "src/icons/shield-icon";
import { TruckIcon } from "src/icons/truck-icon";

export const NavbarMainMenu = () => {
  return (
    <div className="top-gradient-l xl:h-[48px] flex items-center">
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
        <div className="font-semibold mr-10 whitespace-nowrap text-white">
          SOLUTIONS FOR
        </div>
        <div className="text-white hover:cursor-pointer flex items-center group">
          <GlobeIcon
            color="inheritence"
            // className="group-hover:text-[#05BAC5]"
          />
          <div className="text-[14px] font-bold ml-4 relative overline-from-center group-hover:before:left-0 group-hover:before:right-0">
            IMPORTER
          </div>
        </div>
        <div className="text-white hover:cursor-pointer flex items-center ml-14 group">
          <BoxIcon
            color="inheritence"
            // className="group-hover:text-[#05BAC5]"
          />
          <div className="text-[14px] font-bold ml-4 whitespace-nowrap  relative overline-from-center group-hover:before:left-0 group-hover:before:right-0">
            FREIGHT FORWARDER
          </div>
        </div>
        <div className="text-white hover:cursor-pointer flex items-center ml-14 group">
          <ShieldIcon
            color="inheritence"
            // className="group-hover:text-[#05BAC5]"
          />
          <div className="text-[14px] font-bold ml-4 whitespace-nowrap  relative overline-from-center group-hover:before:left-0 group-hover:before:right-0">
            CUSTOMS BROKER
          </div>
        </div>
        <div className="text-white hover:cursor-pointer flex items-center ml-14 group">
          <TruckIcon
            color="inheritence"
            // className="group-hover:text-[#05BAC5]"
          />
          <div className="text-[14px] font-bold ml-4 whitespace-nowrap  relative overline-from-center group-hover:before:left-0 group-hover:before:right-0">
            DRAYAGE PROVIDER
          </div>
        </div>
      </div>
    </div>
  );
};
