import P2 from "./P2";

export default function Button({ extraClass, children, ...props }) {
  return (
    <button
      className={`block my-5 mx-auto h-[50px] w-[230px] bg-pink-button rounded-[40px] active:bg-pink-button-active xl:h-[64px] ${extraClass}`}
      {...props}
    >
      <P2>{children}</P2>
    </button>
  );
}
