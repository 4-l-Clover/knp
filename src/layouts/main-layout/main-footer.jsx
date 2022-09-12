import Image from 'next/image';
import NextLink from 'next/link';
import mapSvg from 'public/images/map.svg';
import logoWhite from 'public/images/logo-white.svg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Container } from 'src/components/container';

export const MainFooter = () => {
  return (
    <footer className='2xl:h-[602px] xl:h-[431px] bg-[#003F5C] overflow-hidden relative 2xl:text-[18px] xl:text-base'>
      <div className='absolute w-full h-full pointer-events-none'>
        <Image src={mapSvg} className='opacity-10' alt='map' layout='responsive' />
      </div>
      <Container>
        <div className='2xl:pt-[107px] xl:pt-[61px] pb-[46px] text-white flex 2xl:h-[602px] xl:h-[431px]'>
          <div className='flex flex-col items-start h-full 2xl:-mt-4 xl:-mt-3'>
            <div className='2xl:w-[274px] xl:w-[172px] xl:h-[50px] 2xl:h-[79px] relative'>
              <Image src={logoWhite} alt='footer logo' layout='fill' />
            </div>
            <p className='pt-3 2xl:leading-loose'>
              3945 Freedom Circle,
              <br />
              Suite 400 Santa Clara,
              <br />
              CA 95054, USA
            </p>
            <p className='pt-7 2xl:leading-loose'>
              India Development Centre
              <br />
              Level 10, Unitech Cyber Park, Tower B,
              <br />
              Sector - 39, Gurgaon - 122003,
              <br />
              Haryana, India
            </p>
            <p className='mt-auto'>Copyright © 2022 KlearNow. All Rights Reserved.</p>
          </div>
          <div className='ml-auto flex relative'>
            <div>
              <p className='2xl:text-2xl xl:text-xl font-bold'>SOLUTIONS</p>
              <ul className='pt-6 2xl:leading-[3.3] xl:leading-[2.5]'>
                <li>
                  <NextLink href='/importer'>
                    <a className='underline-from-left relative hover:before:right-0'>Importer</a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href='/customs-broker'>
                    <a className='underline-from-left relative hover:before:right-0'>
                      Customs Broker
                    </a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href='/freight-forwarder'>
                    <a className='underline-from-left relative hover:before:right-0'>
                      Freight Forwarder
                    </a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href='/carrier'>
                    <a className='underline-from-left relative hover:before:right-0'>Carrier</a>
                  </NextLink>
                </li>
              </ul>
            </div>
            <div className='2xl:ml-[120px] xl:ml-12'>
              <p className='2xl:text-2xl xl:text-xl font-bold'>COMPANY</p>
              <ul className='pt-6 2xl:leading-[3.3] xl:leading-[2.5]'>
                <li>
                  <NextLink href='/about-us'>
                    <a className='underline-from-left relative hover:before:right-0'>About Us</a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href='/carriers'>
                    <a className='underline-from-left relative hover:before:right-0'>Carriers</a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href='/contact'>
                    <a className='underline-from-left relative hover:before:right-0'>Contact Us</a>
                  </NextLink>
                </li>
              </ul>
            </div>
            <div className='mr-9 xl:ml-20 2xl:ml-[152px]'>
              <p className='2xl:text-2xl xl:text-xl font-bold'>RESOURCES</p>
              <ul className='pt-6 2xl:leading-[3.3] xl:leading-[2.5]'>
                <li>
                  <NextLink href='/blog'>
                    <a className='underline-from-left relative hover:before:right-0'>Blog</a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href='/news'>
                    <a className='underline-from-left relative hover:before:right-0'>News</a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href='/webinars'>
                    <a className='underline-from-left relative hover:before:right-0'>Webinars</a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href='/case-studies'>
                    <a className='underline-from-left relative hover:before:right-0'>
                      Case Studies
                    </a>
                  </NextLink>
                </li>
              </ul>
            </div>
            <div className='absolute bottom-1 right-[64px] flex items-center text-4xl'>
              <LinkedInIcon fontSize='inherit' />
              <div className='text-5xl'>
                <YouTubeIcon fontSize='inherit' />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
