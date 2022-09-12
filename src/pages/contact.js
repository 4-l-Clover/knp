import { MainLayout } from '../layouts/main-layout';

const Contact = () => {
  return (
    <main className='text-center pt-[148px] mb-auto'>
      <h1 className='text-5xl py-10'>Contact</h1>
      <h4 className='text-3xl'>Coming soon!</h4>
    </main>
  );
};

Contact.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Contact;
