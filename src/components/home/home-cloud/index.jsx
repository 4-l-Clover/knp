import { Container } from 'src/components/container';
import { CloudWireIcon } from 'src/icons/cloud-wire-icon';
import { PCUserBarChartIcon } from 'src/icons/pc-user-bar-chart-icon';

export const HomeCloud = () => {
  return (
    <>
      <section className="relative before:bg-[radial-gradient(closest-side_at_50%_50%,_#ffffff_0%,_#ffffff_15%,_#05bac5_100%)] before:contents-[''] before:absolute before:opacity-10 before:inset-0 after:contents-[''] after:absolute after:top-0 after:w-[100vw] after:xl:h-[128px] after:xl:border-y-[64px] after:border-x-[50vw] after:border-b-transparent after:border-l-transparent after:border-t-white after:border-r-white">
        <div className="relative xl:h-[768px] after:contents-[''] after:absolute after:bottom-0 after:w-[100vw] after:xl:h-[128px] after:xl:border-y-[64px] after:border-x-[50vw] after:border-t-transparent after:border-r-transparent after:border-b-primary after:border-l-primary">
          <Container>
            <div className='px-[70px] pt-[184px]'>
              <div className='flex justify-between'>
                <div className='text-[220px] leading-none'>
                  <CloudWireIcon fontSize='inherit' />
                </div>
                <div>
                  <h3 className='text-4xl font-bold text-primary' data-aos='fade-up'>
                    Cloud-based
                  </h3>
                  <h5 className='text-[32px] pt-16' data-aos='fade-up'>
                    Only an Internet connection is needed
                    <br /> for access to your information you
                    <br /> can act on from anywhere, anytime.
                  </h5>
                </div>
              </div>

              <div className='px-7 pt-[82px] flex justify-between'>
                <div className='flex items-center'>
                  <div className='text-[92px] leading-none'>
                    <PCUserBarChartIcon fontSize='inherit' />
                  </div>
                  <p className='pl-8 font-["Roboto"] text-[20px] font-bold text-primary'>
                    Rapid and simple document search
                  </p>
                </div>

                <div className='flex items-center'>
                  <div className='text-[92px] leading-none'>
                    <PCUserBarChartIcon fontSize='inherit' />
                  </div>
                  <p className='pl-8 font-["Roboto"] text-[20px] font-bold text-primary'>
                    Work remotely
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};
