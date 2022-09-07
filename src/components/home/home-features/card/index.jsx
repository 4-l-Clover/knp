import clsx from "clsx";
import { ArrowRightIcon } from "src/icons/arrow-right-icon";

export const FeatureCard = ({
  svgComponent,
  title,
  listComponents,
  centerImage,
  delay,
  last = false,
}) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-once="false"
      {...(delay && { "data-aos-delay": delay })}
      className={clsx(
        "px-6 py-8 2xl:w-[275px] xl:w-[237px] 2xl:h-[596px] xl:h-[514px] bg-white shrink-0 flex flex-col relative",
        {
          "flex justify-center items-center": Boolean(centerImage),
          "border border-[#003F5C20]": !last,
        }
      )}
    >
      {Boolean(centerImage) ? (
        centerImage
      ) : (
        <>
          <p className="text-[28px] font-bold text-primary">{title}</p>
          <ul className="pt-9">
            {listComponents.map((component, index) => (
              <li
                key={`${title}-${index}`}
                className="flex pb-8 2xl:h-[114px] xl:h-[95px]"
                data-aos="zoom-in"
                data-aos-once="true"
              >
                <p>{component}</p>
              </li>
            ))}
          </ul>

          <div className="grow shrink min-h-0 flex items-center justify-center">
            {svgComponent}
          </div>
        </>
      )}
    </div>
  );
};
