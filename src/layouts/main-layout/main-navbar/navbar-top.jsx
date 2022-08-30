import { Container } from "src/components/container";
import CampaignIcon from "@mui/icons-material/Campaign";
import { GlobeIcon } from "src/icons/globe-icon";

export const NavbarTop = () => {
  return (
    <div className="top-gradient-r">
      <Container>
        <div className="flex items-center 2xl:h-[40px]">
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
  );
};
