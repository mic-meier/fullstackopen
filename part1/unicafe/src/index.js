import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = ({ good, bad, all }) => {
  const average = (good - bad) / 9;
  const positive = (good / all) * 100;
  return (
    <div>
      <div>average {average}</div>
      <div>positive {positive} %</div>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <Statistics good={good} bad={bad} all={all} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
