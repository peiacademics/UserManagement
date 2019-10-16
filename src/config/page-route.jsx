import React from 'react';
import Home from './../pages/Home.js';
import User from './../pages/User.js';

const userData = [
  {
      id:1,
      username:"user1",
      email:"email@email.com"
  },
  {
      id:2,
      username:"user2",
      email:"email@email.com"
  },
  {
      id:3,
      username:"user3",
      email:"email@email.com"
  },
  {
      id:4,
      username:"user4",
      email:"email@email.com"
  },
  {
      id:5,
      username:"user5",
      email:"email@email.com"
  },
  {
      id:6,
      username:"user6",
      email:"email@email.com"
  },
]
const routes = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    component: () => <Home userData = {userData}/>
  },
  {
    path: '/user/:id',
    exact: true,
    title: 'User',
    component: () => <User userData = {userData}/>
  }
];


export default routes;