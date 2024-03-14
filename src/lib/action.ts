"use server";

// 단순한 서버 액션일 경우,

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";

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
