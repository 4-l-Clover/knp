import clsx from "clsx";

export const Card = ({
  svgElement,
  title,
  subTitle,
  selected = false,
  last = false,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center bg-white pt-[136px] shadow-lg z-10",
        {
          "bg-white w-[285px] h-[431px] pb-[74px]": !selected,
          "bg-gradient-to-b from-[#003F5C] via-[#428BA6] to-[#59B7C3] w-[372px] h-[550px] pb-[98px]":
            selected,
          "mt-16 !pt-[78px] !pb-12": last,
        }
      )}
    >
      {svgElement}
      <p
        className={clsx("font-bold mt-auto whitespace-pre-line text-center", {
          "!text-[21px]": last,
          "text-[#003F5C] text-[28px]": !selected,
          "text-white text-[28px]": selected,
        })}
      >
        {title}
      </p>
      <p
        className={clsx("text-[21px] text-center whitespace-pre-line", {
          "text-[#707070]": !selected,
          "text-white": selected,
        })}
      >
        {subTitle}
      </p>
    </div>
  );
};
