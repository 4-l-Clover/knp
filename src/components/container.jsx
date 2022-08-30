export const Container = ({ children }) => {
  return (
    <div className="mx-auto xl:max-w-[1048px] 2xl:max-w-[1232px] w-full px-4 relative">
      {children}
    </div>
  );
};
