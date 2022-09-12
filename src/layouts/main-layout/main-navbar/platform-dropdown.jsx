import { useRef, useState } from 'react';
import NextLink from 'next/link';
import { Button, List, ListItem, Popover } from '@mui/material';
import { ArrowDownIcon } from 'src/icons/arrow-down-icon';
import clsx from 'clsx';

export const PlatformDropdown = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        color='primary'
        className='!font-bold !text-base xl:!ml-[40px] 2xl:!ml-[90px] !capitalize !px-4'
        ref={ref}
        onClick={() => setIsOpen(true)}
      >
        Platform
        <ArrowDownIcon
          fontSize='inherit'
          className={clsx('ml-2 text-[#428ba6]', {
            'rotate-180': isOpen
          })}
        />
      </Button>

      <Popover
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        open={isOpen}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <List component='nav' className='p-4'>
          <ListItem onClick={() => setIsOpen(false)} button className='!text-primary'>
            <NextLink href='/customs'>
              <a>KlearNow Customs</a>
            </NextLink>
          </ListItem>
          <ListItem onClick={() => setIsOpen(false)} button className='!text-primary'>
            <NextLink href='/drayage'>
              <a>KlearNow Drayage</a>
            </NextLink>
          </ListItem>
          <ListItem onClick={() => setIsOpen(false)} button className='!text-primary'>
            <NextLink href='tech-overview'>
              <a>Smart Laas Technology Overview</a>
            </NextLink>
          </ListItem>
          <ListItem onClick={() => setIsOpen(false)} button className='!text-primary'>
            <NextLink href='partner-ecosystem'>
              <a>Partner Ecosystem</a>
            </NextLink>
          </ListItem>
        </List>
      </Popover>
    </>
  );
};
