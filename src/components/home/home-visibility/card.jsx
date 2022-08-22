import clsx from "clsx";

export const Card = ({ svgElement, title, subTitle, selected = false }) => {
  return (
    <div
      className={clsx("flex flex-col items-center bg-white ", {
        "bg-white w-[285px] h-[431px]": !selected,
        "bg-gradient-to-b from-[#003F5C] via-[#428BA6] to-[#59B7C3] w-[372px] h-[550px]":
          selected,
      })}
    >
      {svgElement}
      <p
        className={clsx("text-[28px] font-bold", {
          "text-[#003F5C]": !selected,
          "text-white": selected,
        })}
      >
        {title}
      </p>
      <p
        className={clsx("text-[21px]", {
          "text-[#707070]": !selected,
          "text-white": selected,
        })}
      >
        {subTitle}
      </p>
    </div>
  );
};
