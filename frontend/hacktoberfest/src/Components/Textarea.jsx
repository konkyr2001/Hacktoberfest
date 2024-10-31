import Label from "./Label";
import P3 from "./P3";
import Span from "./Span";

export default function Textarea({ labelText, ...props }) {
  return (
    <Span className="mx-auto mt-8 mb-8 md:max-w-full">
      <Label id={props.id}>
        <P3>{labelText}</P3>
      </Label>
      <textarea
        className="w-full pl-5 py-1 rounded bg-inherit border-2 text-[16px] lg:text-[20px]"
        {...props}
      />
    </Span>
  );
}
