export default function Span({ children, className }) {
  return (
    <span className={`block relative w-full max-w-[545.5px] flex-1 ${className}`}>{children}</span>
  );
}
