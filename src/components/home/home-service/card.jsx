import { FirstPage } from "@mui/icons-material";
import clsx from "clsx";

export const ServiceCard = ({
  svgElement,
  title,
  subTitle,
  delay,
  selected = false,
  last = false,
  first = false,
}) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-once="false"
      {...(delay && { "data-aos-delay": delay })}
      className={clsx(
        "flex flex-col items-center shadow-service-card w-[184px] h-[351px]",
        {
          "bg-white": !selected,
          "bg-primary": selected,
          "rounded-tl-lg rounded-bl-lg": first,
          "rounded-tr-lg rounded-br-lg": last,
        }
      )}
    >
      <div className="h-[160px] flex items-end">{svgElement}</div>
      <p
        className={clsx(
          "font-bold whitespace-pre-line text-center text-[28px] mt-7",
          {
            "text-primary ": !selected,
            "text-white ": selected,
          }
        )}
      >
        {title}
      </p>
      <p
        className={clsx(
          "text-[20px] text-center whitespace-pre-line leading-tight mt-4",
          {
            "text-[#707070]": !selected,
            "text-white": selected,
          }
        )}
      >
        {subTitle}
      </p>
    </div>
  );
};
