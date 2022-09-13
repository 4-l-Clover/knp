import Image from 'next/image';
import { Container } from 'src/components/container';
import CurveTriBallSvg from 'public/images/curve-tri-ball.svg';
import ShipImage from 'public/images/bg-ship.svg';
import AirplaneImage from 'public/images/bg-airplane.svg';
import TruckImage from 'public/images/bg-truck.svg';

export const HomeService = () => {
  return (
    <section className="relative xl:h-[768px] service-section-bg before:contents-[''] before:absolute before:bottom-0 before:w-[100vw] before:xl:h-[128px] before:xl:border-y-[64px] before:border-x-[50vw] before:border-t-transparent before:border-r-transparent before:border-b-white before:border-l-white after:contents-[''] after:absolute after:top-0 after:w-[100vw] after:xl:h-[128px] after:xl:border-y-[64px] after:border-x-[50vw] after:border-b-transparent after:border-l-transparent after:border-t-white after:border-r-white">
      <div className='py-[128px] h-full'>
        <Container>
          <div className='relative w-full'>
            <div className='absolute w-[235px] h-[111px] top-[36px] right-0' data-aos="fade-left">
              <Image src={ShipImage} layout='fill' alt='ship' />
            </div>
            <div className='absolute w-[138px] h-[114px] -top-[75px] left-0' data-aos="fade-right" data-aos-duration="700">
              <Image src={AirplaneImage} layout='fill' alt='airplane' />
            </div>
            <div className='absolute w-[171px] h-[86px] top-[82px] left-[139px]' data-aos="fade-right" data-aos-duration="700">
              <Image src={TruckImage} layout='fill' alt='truck' />
            </div>
          </div>

          <div className='text-white'>
            <h3 className='pt-9 text-4xl font-bold text-center' data-aos='fade-up'>
              Why KlearNow?
            </h3>
            <h5 className='pt-8 mt-0.5 text-[32px] font-medium text-center' data-aos='fade-up'>
              All-in-one-platform
            </h5>
          </div>
        </Container>

        <div className='relative mt-10'>
          <Image src={CurveTriBallSvg} layout='responsive' alt='curve' />
        </div>

        <Container>
          <div className='px-[70px] flex'>
            <div className='text-[28px] font-bold text-[#05BAC5] pt-14'>
              Follow shipments
              <br /> from origin to port
              <br /> AND port to final
              <br /> destination.
            </div>
          </div>
        </Container>

        <ul className="relative text-white font-['Roboto'] text-[20px] font-bold">
          <li className='absolute left-[42.7vw] -top-[192px]'>
            Navigate and
            <br />
            address
            <br />
            disruptions
            <br />
            with true
            <br />
            customs and
            <br />
            drayage
            <br />
            visibility
          </li>
          <li className='absolute left-[56.5vw] -top-[200px]'>
            Rely on
            <br />
            detailedon
            <br />
            scheduleon
            <br />
            information
            <br />
            for planningon
            <br />
            and coston
            <br />
            control
          </li>
          <li className='absolute left-[70.6vw] -top-[220px]'>
            Reduce
            <br />
            downtime and
            <br />
            penalties with
            <br />
            customs
            <br />
            notifications,
            <br />
            accurate pick
            <br />
            up times, and
            <br />
            demurrage
          </li>
        </ul>
      </div>
    </section>
  );
};
