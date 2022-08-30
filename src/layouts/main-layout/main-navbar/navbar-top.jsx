import { Container } from "src/components/container";
import CampaignIcon from "@mui/icons-material/Campaign";
import { GlobeIcon } from "src/icons/globe-icon";

export const NavbarTop = () => {
  return (
    <div className="top-gradient-r">
      <Container>
        <div className="flex items-center xl:h-[40px]">
          <div className="absolute text-[#F6EC6A] font-medium w-full text-center">
            <CampaignIcon className="mr-2" />
            KlearNow + project44 Partnership Enhances Shipment Visibility
          </div>
          <div className="flex items-center ml-auto text-white">
            <div className="font-bold xl:mr-[22px] 2xl:mr-6">LOGIN</div>
            <GlobeIcon />
            <div className="font-bold xl:ml-[22px] 2xl:ml-5">EN US</div>
          </div>
        </div>
      </Container>
    </div>
  );
};
