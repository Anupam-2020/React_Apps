import { ReactNode, useMemo, useState } from "react";
import "./App.css";
import Box from "./components/Basic";
import Generics from "./components/Generics";
import Generics2 from "./components/Basics2";
import { ThemeProvider } from "./components/context/DemoContext";
import ThemeChange from "./components/ThemeChange";

function App() {
  const [val, setVal] = useState<string | number>("");

  function func1(getValue: number): void {
    console.log(getValue);
  }

  function setVlaue(val: string | number): void {
    setVal(val);
    console.log(val);
  }

  const func: ReactNode = useMemo(() => {
    return (
      <Box heading={"Heading World"} count={13} funct1={func1}>
        {"Hello World from box."}
      </Box>
    );
  }, []);

  return (
    <ThemeProvider>
      {func}
      <Generics label={"Search"} value={val} onChange={setVlaue} />
      <Generics2 />
      <ThemeChange />
    </ThemeProvider>
  );
}

export default App;
