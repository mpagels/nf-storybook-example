import React from 'react'

import ToDoList from './ToDoList'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ToDoList',
  component: ToDoList,
}

export const ToDoListExample = () => (
  <ToDoList
    listOfToDos={[
      { name: 'write story', completed: true },
      { name: 'hello world', completed: false },
    ]}
  />
)
export const ToDoListOnlyCompleted = () => (
  <ToDoList
    listOfToDos={[
      { name: 'write story', completed: true },
      { name: 'hello world', completed: true },
    ]}
  />
)
