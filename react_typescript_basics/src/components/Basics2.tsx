import { FormEvent, useState } from "react";

interface Person {
  name: string,
  age: number
}

const Generics2 = () => {

  const [person, setPerson] = useState<Person>();

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    person?.name === "" || person?.age === 0 ? console.log("Invalid input") : console.log(person);
    setPerson({name: "", age: 0})
  }

  return (
    <form onSubmit={submitHandler}>
      <label>Person</label>
      <input
        type="text"
        value={person?.name || ""}
        onChange={(e) => setPerson((prev) => ({...prev!, name: e.target.value}))}
      />
      <input
        type="number"
        value={person?.age || 0}
        onChange={(e) => setPerson((prev) => ({...prev!, age: Number(e.target.value)}))}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Generics2;
