"use server";

// 단순한 서버 액션일 경우,

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (formData: any) => {
  // const title = formData.get("title");
  // const desc = formData.get("body");
  // const body = formData.get("slug");
  // const userId = formData.get("userId");
  const { title, body, slug, userId } = Object.fromEntries(formData);

  console.log(title, body, slug, userId);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      body,
      slug,
      userId,
    });

    await newPost.save();
    console.log("save to DB");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something Error" };
  }
};

export const deletePost = async (formData: any) => {
  const { id } = Object.fromEntries(formData);
  console.log(id);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("delete from DB");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something Error" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (formData: any) => {
  const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return "패스워드가 일치 하지 않아요";
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (user) {
      return "동일한 유저가 존재합니다.";
    }
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("save to DB");
  } catch (error) {
    console.log(error);
    return { error: "Something Error" };
  }
};
