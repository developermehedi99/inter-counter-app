import "./App.css";
import Count from "./component/Count";
import Items from "./component/newTask/items";
import PriceDropdown from "./component/PricedopDown";
import MainTask from "./component/tasks/MainTask";

function App() {
  return (
    <>
      <Count></Count>
      <MainTask></MainTask>
      <hr />
      <Items />
      <hr />
      <PriceDropdown></PriceDropdown>
    </>
  );
}

export default App;
