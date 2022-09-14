import Image from 'next/image';
import { Button, IconButton } from '@mui/material';
import { Container } from 'src/components/container';
import blogImage from 'public/images/blog.png';
import CloseIcon from '@mui/icons-material/Close';

export const PlatformMenuContent = ({onClose}) => {
  return (
    <Container>
      <div className='flex items-center h-[320px] py-4 relative'>
        <ul className='before-image shrink-0 h-full w-[250px] flex flex-col justify-evenly text-[26px] font-bold text-[#003F5C] leading-loose flex-grow cursor-pointer pr-5'>
          <li className='border-b-[#428BA6] border border-transparent hover:pl-4 transition-all duration-500 ease-out'>
            Blog
          </li>
          <li className='border-b-[#428BA6] border border-transparent hover:pl-4 transition-all duration-500 ease-out'>
            News
          </li>
          <li className='border-b-[#428BA6] border border-transparent hover:pl-4 transition-all duration-500 ease-out'>
            Webinars
          </li>
          <li className='hover:pl-4 transition-all duration-500 ease-out'>Case Studies</li>
        </ul>

        <Image src={blogImage} alt='blog' className="shadow-blog-image" />

        <div className='flex flex-col justify-evenly h-full shrink-0 pl-10 pr-12'>
          <h6 className='text-2xl font-bold'>
            Electronic record <br />
            keeping
          </h6>

          <p className="text-[18px] font-['Roboto'] text-[#707070]">
            Angela Aaron, KlearNow&apos;s
            <br /> Senior Director of Compliance
            <br /> shares how a Smart Logistic as
            <br /> a Service solution drastically
            <br /> simplifies electronic ...
          </p>

          <Button
            color='secondary'
            variant='contained'
            disableElevation
            className='!text-[21px] !font-bold !capitalize !rounded-[32px] !px-8 !w-fit'
          >
            View Now
          </Button>
        </div>

        <IconButton className='!absolute !right-0 !top-[10px]' onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
    </Container>
  );
};
