import React from "react";

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

export default Course;
