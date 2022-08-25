import { useState } from "react";
import Image from "next/image";
import { AppBar, Button, Collapse, useTheme } from "@mui/material";
import logoSvg from "public/images/logo-top.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "src/components/container";
import { ArrowDownIcon } from "src/icons/arrow-down-icon";
import clsx from "clsx";
import { NavbarTop } from "./navbar-top";
import { NavbarMainMenu } from "./navbar-main-menu";
import { PlatformMenuContent } from "./pull-down-menu/platform-menu";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

const MenuItems = {
  platform: "platform",
  resources: "resources",
};
Object.freeze(MenuItems);

function HideOnScroll(props) {
  const { children, window } = props;
  const theme = useTheme();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
      easing={{
        enter: theme.transitions.easing.easeOut,
        exit: theme.transitions.easing.sharp,
      }}
      timeout={{
        enter: 500,
        exit: theme.transitions.duration.standard
      }}
    >
      {children}
    </Slide>
  );
}

export const MainNavbar = () => {
  const [expandedMenuItem, setExpandedMenuItem] = useState("");

  return (
    <HideOnScroll>
      <AppBar className="!bg-white !text-[#003f5c] !shadow-heavier">
        <NavbarTop />

        <Container>
          <div className="h-[106px] flex items-center">
            <Image src={logoSvg} alt="logo" />
            <Button
              color="primary"
              className="!font-bold !text-base !ml-[90px] !capitalize !px-4"
              onClick={() => {
                setExpandedMenuItem((prev) =>
                  prev === MenuItems.platform ? "" : MenuItems.platform
                );
              }}
            >
              Platform
              <ArrowDownIcon
                fontSize="inherit"
                className={clsx("ml-2 text-[#428ba6]", {
                  "rotate-180": expandedMenuItem === MenuItems.platform,
                })}
              />
            </Button>
            <Button
              color="primary"
              className="!font-bold !text-base !ml-16 !capitalize !px-4"
              onClick={() => {
                setExpandedMenuItem((prev) =>
                  prev === MenuItems.resources ? "" : MenuItems.resources
                );
              }}
            >
              Resources
              <ArrowDownIcon
                fontSize="inherit"
                className={clsx("ml-2 text-[#428ba6]", {
                  "rotate-180": expandedMenuItem === MenuItems.resources,
                })}
              />
            </Button>
            <Button
              color="primary"
              className="!font-bold !text-base !ml-16 !capitalize !px-4"
            >
              Company
            </Button>

            <div className="ml-auto flex items-center">
              <div className="font-medium">SHIPMENT TRACKER</div>
              <div className="font-medium ml-5 mr-[18px]">SEARCH</div>
              <SearchIcon />
            </div>
          </div>
        </Container>
        <Collapse
          in={expandedMenuItem === MenuItems.platform}
          classes={{
            wrapperInner: "h-[443px] shadow-inner-thin",
          }}
        >
          <PlatformMenuContent />
        </Collapse>
        <Collapse
          in={expandedMenuItem === MenuItems.resources}
          classes={{
            wrapperInner: "h-[443px] shadow-inner-thin",
          }}
        >
          <PlatformMenuContent />
        </Collapse>

        <NavbarMainMenu />
      </AppBar>
    </HideOnScroll>
  );
};
