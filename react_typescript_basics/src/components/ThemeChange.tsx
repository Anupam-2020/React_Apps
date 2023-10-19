import { useGlobalContext } from "./context/DemoContext";

const ThemeChange = () => {
  const context = useGlobalContext();

  return (
    <div
      style={
        context.theme === "dark"
          ? { color: "white", backgroundColor: "black" }
          : { color: "black", backgroundColor: "white" }
      }
    >
      <h2>{context.theme}</h2>
      <button onClick={() => context.toggleTheme()}>Change Theme</button>
    </div>
  );
};

export default ThemeChange;