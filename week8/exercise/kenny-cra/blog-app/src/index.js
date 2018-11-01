import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import * as serviceWorker from './serviceWorker';

let post1 = {
  title: "Why React is SOOOO Much Better than Everything Else",
  author: "Everyone who's Anyone",
  content: "If you don't know this you're a poser.",
  comments: ["You're wrong React sucks!", "Angular 4 lyfe"]
}


ReactDOM.render(
  <div>
    <Post title={post1.title} author={post1.author} content={post1.content} comments={post1.comments}/>
  </div>
  ,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
