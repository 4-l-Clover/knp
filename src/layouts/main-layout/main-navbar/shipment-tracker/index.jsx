import { Fragment, forwardRef, useState } from 'react';
import {
  Box,
  Divider,
  CircularProgress,
  InputBase,
  Typography,
  Card,
  Dialog,
  Slide,
  styled,
  useTheme
} from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';

const wait = (time) => new Promise((res) => setTimeout(res, time));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

const DialogWrapper = styled(Dialog)(
  () => `
      .MuiDialog-container {
          height: auto;
      }
      
      .MuiDialog-paperScrollPaper {
          max-height: calc(100vh - 64px)
      }
  `
);

const SearchInputWrapper = styled(InputBase)(
  ({ theme }) => `
      font-size: ${theme.typography.pxToRem(18)};
      padding: ${theme.spacing(2)};
      width: 100%;
  `
);

export const ShipmentTracker = ({ open, onClose }) => {
  const [searchValue, setSearchValue] = useState('');

  const submitSearch = async (event) => {
    event.preventDefault();
    await wait(1500);
  };

  const handleSearchChange = async (event) => {
    event.preventDefault();

    if (event.target.value) {
      setSearchValue(event.target.value);
      await wait(1500);
    } else {
      setSearchValue('');
    }
  };

  return (
    <>
      <DialogWrapper
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth='sm'
        fullWidth
        scroll='paper'
        onClose={onClose}
      >
        <Box>
          <form onSubmit={submitSearch}>
            <Box display='flex' alignItems='center'>
              <Box flexGrow={1} display='flex' alignItems='center'>
                <SearchTwoToneIcon
                  sx={{
                    ml: 2
                  }}
                />
                <SearchInputWrapper
                  value={searchValue}
                  onChange={handleSearchChange}
                  autoFocus
                  placeholder={'Search terms here...'}
                  fullWidth
                />
              </Box>
              <Card
                sx={{
                  ml: 'auto',
                  mr: 2,
                  py: 0.5,
                  px: 1
                }}
              >
                <p>esc</p>
              </Card>
            </Box>
          </form>
        </Box>
        <Divider />
        <div className='h-[300px] flex items-center justify-center text-primary text-[30px]'>
          Coming Soon!
        </div>
      </DialogWrapper>
    </>
  );
};
