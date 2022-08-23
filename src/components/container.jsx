export const Container = ({ children }) => {
  return (
    // <div className="w-full h-full">
    //   <div className="mx-auto max-w-[1640px] relative h-full">{children}</div>
    // </div>
    <div className="mx-auto max-w-[1672px] w-full px-4 relative">
      {children}
    </div>
  );
};
