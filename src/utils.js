import React from 'react'

const todos = [
  { id: "1", title: "Learn ReactJS", isDone: false, isArchived: false },
  { id: "2", title: "Attend ReactJS workshops", isDone: true, isArchived: false },
  { id: "3",title: "Learn Ruby on Rails", isDone: true, isArchived: false },
  { id: "4", title: "Attend Ruby on Rails workshops", isDone: true, isArchived: false },
  {
    id: "5",
    title: "This one shouldn't be visible - archived",
    isDone: true,
    isArchived: true,
  },
];

export default todos