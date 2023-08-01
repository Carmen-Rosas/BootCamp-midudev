import React from 'react'
import ReactDOM from 'react-dom'

const Title = ({ course }) => <h1> {course} </h1>
const Parragraph = ({ part, exercises }) => <p> {part} {exercises} </p>
const Exercise = ({ exercises }) => <p> Number of exercises {exercises} </p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course} />
      <p>
        <Parragraph part={part1} exercises={exercises1} />
      </p>
      <p>
        <Parragraph part={part2} exercises={exercises2} />
      </p>
      <p>
        <Parragraph part={part3} exercises={exercises3} />
      </p>
      <p>
        <Exercise exercises={exercises1 + exercises2 + exercises3} />
      </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))