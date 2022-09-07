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
        "px-6 py-8 w-[275px] h-[596px] bg-white shrink-0 flex flex-col",
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
          <p className="text-[28px] font-medium text-primary">{title}</p>
          <ul className="pt-9">
            {listComponents.map((component, index) => (
              <li
                key={`${title}-${index}`}
                className="flex pb-8 h-[114px]"
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
