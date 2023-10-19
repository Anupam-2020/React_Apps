import { FormEvent, ReactNode } from "react";

// type PropsType = {
//   label: ReactNode,
//   value: string,
//   onChange: (event: string) => void
// }

type InputValType = string | number;

const Generics = <T, U extends InputValType>({
  label,
  value,
  onChange,
}: {
  label: ReactNode;
  value: U;
  onChange: (e: T) => void;
}) => {
  return (
    <form onSubmit={(e: FormEvent) => e.preventDefault()}>
      <label htmlFor="">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Generics;
