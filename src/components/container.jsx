import clsx from "clsx"

export const Container = ({ children }) => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[1640px] relative">{children}</div>
    </div>
  );
};
