import { Request, Response } from 'express';
import Post from '../models/post';

import * as jsonData from './test.json';



// In-memory array to store posts
let posts: Post[] = [
  {
    "id": 1,
    "title": "Welcome to my blog",
    "content": "Starting off something new here, hope everyone enjoys",
    "author": "Xavier"
  }, {
    "id": 2,
    "title": "Untitled",
    "content": "hello",
    "author": "Eddie"
  }, {
    "id": 3,
    "title": "K-Pop Concert Review",
    "content": "7/10, music was good but there was too many people",
    "author": "Bryan"
  }, {
    "id": 4,
    "title": "On the importance of Yerba Mate for Software Developers",
    "content": "Yerba Mate is a traditional South American hot beverage which is a tea that gives the drinker a burst of energy. I highly recommend people try it out",
    "author": "Ivan Huerta"
  }];
let currentId = posts.length + 1;

export const getAllPosts = (req: Request, res: Response) => {
  res.status(200).json(posts);
};

export const createPost = (req: Request, res: Response) => {
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    return res.status(400).send("Bad Request, missing fields");
  }
  const newPost: Post = { id: currentId++, title, content, author };
  posts.push(newPost);
  return res.status(201).json(newPost);
};

export const updatePost = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(post => post.id === id);
  if (index === -1) {
    res.status(404).send('Post not found');
  } else {
    const { title, content, author } = req.body;
    posts[index] = { id, title, content, author };
    res.status(200).json(posts[index]);
  }
};

export const deletePost = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  let index = posts.findIndex(post => post.id === id);
  if (index === -1) {
    res.status(404).send('Post not found');
  } else {
    posts = posts.filter(post => post.id !== id);
    res.status(204).send(); // No content to send back
  }
};

export const getJson = async (req: Request, res: Response) => {
  console.log(jsonData.name);
  res.status(200).send(jsonData);
}
