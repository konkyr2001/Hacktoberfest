export default function Label({ children, ...props }) {
  if (props.className) {
    return (
      <label {...props} htmlFor={props.id}>
        {children}
      </label>
    );
  }

  return (
    <label className="block w-fit my-2" htmlFor={props.id}>
      {children}
    </label>
  );
}
