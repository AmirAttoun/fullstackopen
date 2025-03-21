import { useState } from "react";
import History from "./components/History";
import Button from "./components/Button";

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    const newLeftClicks = clicks.left + 1;
    setClicks({ ...clicks, left: newLeftClicks });
    setAll(allClicks.concat("Ls"));
    setTotal(newLeftClicks + clicks.right);
  };

  const handleRightClick = () => {
    const newRightClicks = clicks.right + 1;
    setClicks({ ...clicks, right: newRightClicks });
    setAll(allClicks.concat("Rs"));
    setTotal(clicks.left + newRightClicks);
  };

  return (
    <div>
      {clicks.left}
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      {clicks.right}
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
