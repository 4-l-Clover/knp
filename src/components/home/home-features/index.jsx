import { Container } from "src/components/container";
import { ClearItIcon } from "src/icons/clear-it-icon";
import { MoveItIcon } from "src/icons/move-it-icon";
import { SeeItIcon } from "src/icons/see-it-icon";
import { FeatureCard } from "./card";

export const HomeFeatures = () => {
  return (
    <section className="pt-20 pb-10">
      <Container>
        <div className="px-10">
          <div
            className="text-primary text-4xl font-bold pb-20"
            data-aos="fade-up"
          >
            See it &#8212; Clear it &#8212; Move it
          </div>
          <FeatureCard
            svgComponent={
              <div className="text-[76px]">
                <SeeItIcon fontSize="inherit" />
              </div>
            }
            title="See it"
            listComponents={[
              <>
                <b>Know</b>&nbsp;current customs clearance status
              </>,
              <>
                <b>Digitally track and trace</b>&nbsp;across any carrier
              </>,
              <>
                <b>Monitor and cut</b>&nbsp;demurrage
              </>,
            ]}
          />
          <div className="pt-16" />
          <FeatureCard
            svgComponent={
              <div className="text-[92px]">
                <ClearItIcon fontSize="inherit" />
              </div>
            }
            title="Clear it"
            listComponents={[
              <>
                <b>Automate data transfer</b>&nbsp;with customs authorities
              </>,
              <>
                <b>Gain time</b>&nbsp;with accurate AI-powered data entries
              </>,
              <>
                <b>Take informed actions</b>&nbsp;to remove roadblocks
              </>,
            ]}
          />
          <div className="pt-16" />
          <FeatureCard
            svgComponent={
              <div className="text-[58px]">
                <MoveItIcon fontSize="inherit" />
              </div>
            }
            title="Move it"
            listComponents={[
              <>
                <b>Procure drayage services</b>&nbsp;on a single platform
              </>,
              <>
                <b>connect truckers to shipments</b>&nbsp;at the right time
              </>,
              <>
                <b>Optimize</b>&nbsp;warehouse planning
              </>,
            ]}
          />
        </div>
      </Container>
    </section>
  );
};
