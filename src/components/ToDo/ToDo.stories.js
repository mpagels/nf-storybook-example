import React from 'react'

import ToDo from './ToDo'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ToDo',
  component: ToDo,
}

const Template = (args) => <ToDo {...args} />
export const ToDoExample = Template.bind({})
export const ToDoCompleted = Template.bind({})

ToDoExample.args = {
  text: 'Write a Story',
  completed: false,
}
ToDoCompleted.args = {
  text: 'Write a Story',
  completed: true,
}
