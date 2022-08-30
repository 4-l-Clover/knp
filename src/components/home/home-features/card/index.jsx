import { ArrowRightIcon } from "src/icons/arrow-right-icon";

export const FeatureCard = ({ svgComponent, title, listComponents }) => {
  return (
    <div className="rounded-lg shadow-feature-card flex items-center w-full pl-[50px] pr-10 2xl:h-[318px] bg-white">
      <div className="flex items-center justify-center rounded-full w-[162px] h-[162px] border-[12px] border-[#003F5C20]">
        {svgComponent}
      </div>
      <h2 className="text-[56px] font-bold text-black pl-6 w-[268px]">{title}</h2>
      <ul className="pl-2 divide-y divide-[#70707020] flex-grow">
        {listComponents.map((component, index) => (
          <li key={`${title}-${index}`} className="flex items-center text-[20px] h-[62px]" data-aos="zoom-in" data-aos-once="true">
            <div className="text-[18px] pr-6"><ArrowRightIcon fontSize="inherit"/></div>
            {component}
          </li>
        ))}
      </ul>
    </div>
  );
};
