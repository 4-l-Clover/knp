import { MainLayout } from '../layouts/main-layout';
import { HomeIntro } from 'src/components/home/home-intro';
import { HomeFeatures } from 'src/components/home/home-features';
import { HomeService } from 'src/components/home/home-service';
import { HomeContent } from 'src/components/home/home-content';
import { HomeCloud } from 'src/components/home/home-cloud';

const Home = () => {
  return (
    <main>
      <HomeIntro />
      <HomeFeatures />
      <HomeService />
      <HomeContent />
      <HomeCloud />
    </main>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
