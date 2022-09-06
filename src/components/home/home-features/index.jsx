import Image from "next/image";
import { Container } from "src/components/container";
import { ClearItIcon } from "src/icons/clear-it-icon";
import { MoveItIcon } from "src/icons/move-it-icon";
import { SeeItIcon } from "src/icons/see-it-icon";
import { FeatureCard } from "./card";
import kMarkImage from "public/images/k-mark.png";

export const HomeFeatures = () => {
  return (
    <section className="pt-[87px] pb-[127px]">
      <Container>
        <div className="flex items-center">
          <div className="text-primary text-[48px] font-medium rotate-180 writing-vertical-lr mr-auto whitespace-nowrap">
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
                <b>Monitor</b>&nbsp;and cut demurrage
              </>,
            ]}
          />
          <FeatureCard
            svgComponent={
              <div className="text-[92px]">
                <ClearItIcon fontSize="inherit" />
              </div>
            }
            title="Clear it"
            listComponents={[
              <>
                <b>Automate</b>&nbsp;data transfer with customs authorities
              </>,
              <>
                <b>Gain</b>&nbsp;time with accurate AI-powered data entries
              </>,
              <>
                <b>Take</b>&nbsp;informed actions to remove roadblocks
              </>,
            ]}
            delay="200"
          />
          <FeatureCard
            svgComponent={
              <div className="text-[58px]">
                <MoveItIcon fontSize="inherit" />
              </div>
            }
            title="Move it"
            listComponents={[
              <>
                <b>Procure</b>&nbsp;drayage services on a single platform
              </>,
              <>
                <b>connect</b>&nbsp;truckers to shipments at the right time
              </>,
              <>
                <b>Optimize</b>&nbsp;warehouse planning
              </>,
            ]}
            delay="400"
          />
          <FeatureCard
            centerImage={<Image src={kMarkImage} alt="k-mark" />}
            delay="700"
          />
        </div>
      </Container>
    </section>
  );
};
