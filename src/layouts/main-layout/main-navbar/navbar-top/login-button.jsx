import { useRef, useState } from 'react';
import { Button, List, ListItem, Popover } from '@mui/material';

export const LoginButton = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className='!font-bold !text-base !mr-6 !px-2 !text-white'
        ref={ref}
        onClick={() => setIsOpen(true)}
      >
        login
      </Button>

      <Popover
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        open={isOpen}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <List component='nav' className='p-2'>
          <ListItem onClick={() => setIsOpen(false)} button className='!text-primary'>
            Importer
          </ListItem>
          <ListItem onClick={() => setIsOpen(false)} button className='!text-primary'>
            Customs Broker
          </ListItem>
          <ListItem onClick={() => setIsOpen(false)} button className='!text-primary'>
            Freight Forwarder
          </ListItem>
        </List>
      </Popover>
    </>
  );
};
