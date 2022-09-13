import Image from 'next/image';
import { Container } from 'src/components/container';
import { ContentCard } from './card';
import CurveTriSvg from 'public/images/curve-tri.svg';
import { PCUserBarChartIcon } from 'src/icons/pc-user-bar-chart-icon';

export const HomeContent = () => {
  return (
    <section className='pt-[68px]'>
      <Container>
        <h3 className='text-primary text-4xl font-bold text-center' data-aos='fade-up'>
          More than just Tech
        </h3>
        <h5 className='text-center text-[32px] py-10' data-aos='fade-up'>
          <b>“Technology+People”</b> model keeps the
          <br /> focus on your success
        </h5>

        <div className='flex justify-between'>
          <ContentCard title={`Customs experts\nreview AI-\npowered data\ningestion`} />
          <ContentCard title={`Our broker and\ncarrier networks\nkeep your\nshipments\nmoving`} />
          <ContentCard title={`Software\nupdates\nautomatically,\ninstantly, and\neffortlessly`} />
        </div>
      </Container>

      <div className='relative mt-16'>
        <Image src={CurveTriSvg} layout='responsive' alt='curve' />
      </div>

      <h3 className='text-primary text-4xl font-bold text-center pt-8' data-aos='fade-up'>
        Making the connections for you
      </h3>
      <h5 className='text-center text-[32px] pt-10' data-aos='fade-up'>
        We’ve created a built-in digital ecosystem <br />
        to do ALL the integration heavy lifting so you
        <br />
        don’t have to.
      </h5>

      <Container>
        <div className='px-10'>
          <div className='px-7 grid grid-cols-3 pt-2 pb-6'>
            <div className='text-[92px]'>
              <PCUserBarChartIcon fontSize='inherit' />
            </div>
            <div className='text-[92px]'>
              <PCUserBarChartIcon fontSize='inherit' />
            </div>
            <div className='text-[92px]'>
              <PCUserBarChartIcon fontSize='inherit' />
            </div>
          </div>

          <hr />

          <div className='px-7 pt-10 pb-14 grid grid-cols-3'>
            <p className="font-['Roboto'] text-[20px]">
              Links customs,
              <br /> suppliers, customs
              <br /> brokers, carriers, and
              <br /> visibility partners —<br />
              <b>
                bringing together the
                <br /> information silos
              </b>
            </p>
            <p className="font-['Roboto'] text-[20px]">
              Provides your supply
              <br /> chain with{` `}
              <b>
                solid intel at
                <br /> the opportune time.
              </b>
            </p>
            <p className="font-['Roboto'] text-[20px]">
              Consolidates workflows
              <br /> and shipment
              <br /> information{` `}
              <b>
                across
                <br /> providers
              </b>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
