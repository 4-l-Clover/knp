import Image from "next/image";
import { Container } from "src/components/container";
import { ClearItIcon } from "src/icons/clear-it-icon";
import { MoveItIcon } from "src/icons/move-it-icon";
import { SeeItIcon } from "src/icons/see-it-icon";
import { FeatureCard } from "./card";
import kMarkImage from "public/images/k-bg.svg";

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
              <b>Know current customs clearance status</b>,
              <b>Digitally track and trace across any carrier</b>,
              <b>Monitor and cut demurrage</b>,
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
              <b>Automate data transfer with customs authorities</b>,
              <b>Gain time with accurate AI-powered data entries</b>,
              <b>Take informed actions to remove roadblocks</b>,
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
              <b>Procure drayage services on a single platform</b>,
              <b>connect truckers to shipments at the right time</b>,
              <b>Optimize warehouse planning</b>,
            ]}
            delay="400"
          />
          <FeatureCard
            centerImage={<Image src={kMarkImage} alt="k-mark" layout="fill"/>}
            delay="700"
            last
          />
        </div>
      </Container>
    </section>
  );
};
