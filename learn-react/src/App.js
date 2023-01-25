import "./App.css";
import Hello from "./components/Hello";

function App() {
  return (
    <>
      <Hello title="React" color={"yellow"} />
      <Hello title="정연탁" color={"green"} />
      <Hello>
        {/* props.childeren으로 전달된다. */}
        <p>자식요소입니다.</p>
      </Hello>
    </>
  );
}

export default App;
