import { useState } from "react";

export default function Counter() {
  const [modifier, setModifier] = useState(1);
  const [count, setCount] = useState(0);

  function calculateDate() {
    const today = new Date();
    const newDate = new Date(today.getTime() + count * 24 * 60 * 60 * 1000);
    const days = Math.abs(count);
    const dayText = days === 1 ? "day" : "days";
    const day = newDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return count === 0
      ? `Today is ${day}`
      : count > 0
      ? `${count} ${dayText} from now is ${day}`
      : `${days} ${dayText} ago was ${day}`;
  }

  function resetAll() {
    setCount(0);
    setModifier(1);
  }

  return (
    <div className="counters-container">
      <div className="counter">
        <button onClick={() => setModifier((prev) => prev - 1)} className="btn">
          -
        </button>

        <span>
          <input
            type="range"
            min={0}
            max={10}
            value={modifier}
            onChange={(e) => setModifier(Number(e.target.value))}
          />
          <h2>Modifier: {modifier}</h2>
        </span>

        <button onClick={() => setModifier((prev) => prev + 1)} className="btn">
          +
        </button>
      </div>

      {/* second counter */}
      <div className="counter">
        <button
          onClick={() => setCount((prev) => prev - modifier)}
          className="btn"
        >
          -
        </button>

        <span>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <h2>Count: {count}</h2>
        </span>

        <button
          onClick={() => setCount((prev) => prev + modifier)}
          className="btn"
        >
          +
        </button>
      </div>

      <p className="date">{calculateDate()}</p>

      {(modifier !== 1 || count !== 0) && (
        <button onClick={resetAll} className="btn-reset">
          Reset all
        </button>
      )}
    </div>
  );
}
