import React from "react";
import ReactDOM from "react-dom";

const Course = ({ course }) => {
  const parts = course.parts;

  const lectures = () =>
    parts.map(part => (
      <p key={part.id}>
        {part.name} {part.exercises}
      </p>
    ));

  const sumOfExercises = parts
    .map(part => part.exercises)
    .reduce((sum, exercise) => sum + exercise);

  return (
    <div>
      <h1>{course.name}</h1>
      {lectures()}
      <h4>total of {sumOfExercises} exercises</h4>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      }
    ]
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
