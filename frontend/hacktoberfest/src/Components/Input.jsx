import Label from "./Label";
import P3 from "./P3";
import Span from "./Span";

export default function Input({ labelText, ...props }) {
  return (
    <Span>
      <Label id={props.id}>
        <P3>{labelText}</P3>
      </Label>
      <input
        className="w-full pl-5 py-1 rounded bg-inherit border-2 text-[16px] lg:text-[20px]"
        {...props}
      />
    </Span>
  );
}
