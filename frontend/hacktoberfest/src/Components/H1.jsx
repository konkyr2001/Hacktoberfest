export default function H1({ children }) {
  return (
    <h1 className="text-[20px] text-center text-yellow-text md:text-[50px] uppercase md:capitalize xl:text-[90px]">
      <span className="md:text-header-green">{">"}</span>
      {children}
    </h1>
  );
}
