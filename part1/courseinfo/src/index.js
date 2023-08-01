import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h1> {props.course} </h1>
}

const Content = (props) => {
    return <p> {props.part} {props.exercises} </p>
}

const Total = (props) => {
    return <p> Number of exercises {props.exercises} </p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <p>
        <Content part={course.parts[0].name} exercises={course.parts[0].exercises} />
      </p>
      <p>
        <Content part={course.parts[1].name} exercises={course.parts[1].exercises} />
      </p>
      <p>
        <Content part={course.parts[2].name} exercises={course.parts[2].exercises} />
      </p>
      <p>
        <Total exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
      </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))