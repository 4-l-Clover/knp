import { useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { AppBar, Button, Collapse, useTheme } from '@mui/material';
import logoSvg from 'public/images/logo-top.svg';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from 'src/components/container';
import { ArrowDownIcon } from 'src/icons/arrow-down-icon';
import clsx from 'clsx';
import { NavbarTop } from './navbar-top';
import { NavbarMainMenu } from './navbar-main-menu';
import { PlatformMenuContent } from './pull-down-menu/platform-menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { ShipmentTracker } from './shipment-tracker';
import { PlatformDropdown } from './platform-dropdown';
import { CompanyDropdown } from './company-dropdown';

const MenuItems = {
  platform: 'platform',
  resources: 'resources'
};
Object.freeze(MenuItems);

function HideOnScroll(props) {
  const { children, window } = props;
  const theme = useTheme();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  });

  return (
    <Slide
      appear={false}
      direction='down'
      in={!trigger}
      easing={{
        enter: theme.transitions.easing.easeOut,
        exit: theme.transitions.easing.sharp
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
  const [expandedMenuItem, setExpandedMenuItem] = useState(false);
  const [openShipmentTracker, setOpenShipmentTracker] = useState(false);

  return (
    <HideOnScroll>
      <AppBar className='!bg-white !text-[#003f5c] !shadow-topbar'>
        <NavbarTop />

        <Container>
          <div className='xl:h-[60px] flex items-center'>
            <NextLink href='/' passHref>
              <a>
                <div className='flex xl:w-[190px]'>
                  <Image src={logoSvg} alt='logo' />
                </div>
              </a>
            </NextLink>

            <PlatformDropdown />
            <Button
              color='primary'
              className='!font-bold !text-base xl:!ml-4 2xl:!ml-16 !capitalize !px-4'
              onClick={() => {
                setExpandedMenuItem((prev) => !prev);
              }}
            >
              Resources
              <ArrowDownIcon
                fontSize='inherit'
                className={clsx('ml-2 text-[#428ba6]', {
                  'rotate-180': expandedMenuItem
                })}
              />
            </Button>
            <CompanyDropdown />

            <div className='ml-auto flex items-center'>
              <Button
                color='primary'
                className='!font-medium !text-base !px-2'
                onClick={() => setOpenShipmentTracker(true)}
              >
                shipment tracker
              </Button>
              <div className='pl-3' />

              <Button
                color='primary'
                className='!font-medium !text-base !px-2'
                onClick={() => setOpenShipmentTracker(true)}
              >
                search
                <SearchIcon className='ml-[18px]' />
              </Button>
            </div>
            <ShipmentTracker
              open={openShipmentTracker}
              onClose={() => {
                setOpenShipmentTracker(false);
              }}
            />
          </div>
        </Container>

        <Collapse
          in={expandedMenuItem}
          classes={{
            wrapperInner: 'h-[320px] shadow-inner-thin'
          }}
        >
          <PlatformMenuContent onClose={() => setExpandedMenuItem(false)} />
        </Collapse>

        <NavbarMainMenu />
      </AppBar>
    </HideOnScroll>
  );
};
