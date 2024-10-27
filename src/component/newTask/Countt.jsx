import { useState } from "react";

const Countt = () => {
  const [count, setCount] = useState(0);
  const handleIncre = () => {
    if(count <15){
        setCount(count + 1);
    }
  };
  const handleDecre = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={handleIncre} disabled={count == 15}>increment</button>
      <button onClick={handleDecre} disabled={count == 0}>decrement</button>
      {count >= 11 && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eum autem, repellendus veniam similique hic sapiente dolor suscipit. Neque harum quisquam veritatis.</p>}
    </div>
  );
};

export default Countt;
