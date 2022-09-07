import { Container } from "src/components/container";
import CampaignIcon from "@mui/icons-material/Campaign";
import { GlobeIcon } from "src/icons/globe-icon";
import { Button } from "@mui/material";
import { LoginButton } from "./login-button";
import { LanguageChanger } from "./language-changer";

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
            <LoginButton />
            <GlobeIcon />
            <LanguageChanger />
          </div>
        </div>
      </Container>
    </div>
  );
};
