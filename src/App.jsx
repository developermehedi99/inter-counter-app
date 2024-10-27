import "./App.css";
import Count from "./component/Count";
import Countt from "./component/newTask/Countt";
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
      <Countt/>
      <hr />
      <PriceDropdown></PriceDropdown>
    </>
  );
}

export default App;
