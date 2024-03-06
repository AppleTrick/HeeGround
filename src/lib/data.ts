import { Post, User } from "./models";
import { connectToDb } from "./utils";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "park1" },
//   { id: 2, name: "park2" },
//   { id: 3, name: "park3" },
//   { id: 4, name: "park4" },
// ];

// const posts = [
//   { id: 1, title: "Post 1 ", body: "1234", userId: 1 },
//   { id: 2, title: "Post 2 ", body: "1234", userId: 1 },
//   { id: 3, title: "Post 3 ", body: "1234", userId: 2 },
//   { id: 4, title: "Post 4 ", body: "1234", userId: 2 },
// ];

export const getposts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug: string) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id: string) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("유저를 못찾음");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};
