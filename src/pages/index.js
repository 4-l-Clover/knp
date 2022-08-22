import { MainLayout } from "../layouts/main-layout";
import { HomeHero } from "src/components/home/home-hero";
import { HomeVisibility } from "src/components/home/home-visibility";
import { HomeOffers } from "src/components/home/home-offers";
import { HomeOverview } from "src/components/home/home-overview";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <HomeOverview />
      <HomeVisibility />
      <HomeOffers />
    </main>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
