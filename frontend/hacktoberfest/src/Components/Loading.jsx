import { TailSpin } from "react-loader-spinner";

export default function Loading({ loading }) {
  return (
    <div
      className={`${
        loading ? "flex" : "hidden"
      } justify-center items-center fixed left-1/2 -translate-x-1/2 z-50 top-1/2 -translate-y-1/2 `}
    >
      <TailSpin
        width={130}
        height={130}
        color={"rgb(72, 204, 105)"}
        ariaLabel="tail-spin-loading"
        wrapperStyle={{}}
      />
    </div>
  );
}
