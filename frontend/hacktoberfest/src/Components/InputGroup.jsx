export default function InputGroup({ children }) {
  return (
    <div className="flex flex-wrap m-auto gap-x-4 gap-y-6 my-6 flex-col max-w-[545.5px] md:max-w-full md:flex-row items-center">
      {children}
    </div>
  );
}
