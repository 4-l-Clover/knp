import { Container } from 'src/components/container';
import { FeatureCard } from './card';

export const HomeFeatures = () => {
  return (
    <section className='xl:pt-9'>
      <Container>
        <h3 className='xl:text-4xl font-bold text-center text-primary'>
          Streamline your import chain and minimize risk
          <br /> with AI-powered Logistics as a Service
        </h3>
        <h5 className='xl:text-[32px] text-center xl:pt-[34px] xl:pb-12'>
          Clear More. Move More. Do More.
        </h5>
        <div className='flex justify-center'>
          <p className='text-[#008DA9] text-[28px] font-bold pr-7 flex items-center' data-aos='fade-right'>
            Smart
            <br />
            Logistics as
            <br /> a Service
            <br /> (LaaS) eases
            <br /> your
            <br /> workload
          </p>
          <FeatureCard title='Automates workflows and shows you all relevant information in once place' />
          <FeatureCard
            title='Uses AI to digitize emails, spreadsheets, and PDFs into knowledge you can act on'
            delay='200'
          />
          <FeatureCard
            title='Applies deep learning and natural-language processing to capture data quickly and reduce errors'
            delay='400'
          />
        </div>
      </Container>
    </section>
  );
};
