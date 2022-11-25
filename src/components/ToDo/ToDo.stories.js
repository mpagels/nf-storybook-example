import React from 'react'

import ToDo from './ToDo'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ToDo',
  component: ToDo,
}

export const NotCompleted = () => (
  <ToDo text="Write a Story" completed={false} />
)
export const Completed = () => <ToDo text="Write a Story" completed={true} />
export const Brokoli = () => (
  <ToDo text="Think of better story name" completed={true} hasCheckbox={true} />
)
