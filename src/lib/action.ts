"use server";

// 단순한 서버 액션일 경우,

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (previousState: any, formData: any) => {
  const { title, body, slug, userId, img } = Object.fromEntries(formData);

  console.log(title, body, slug, userId ,img);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      body,
      slug,
      userId,
      img
    });

    await newPost.save();
    console.log("디비에 저장 완료!");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "포스트를 추가할 수 없습니다." };
  }
};

export const deletePost = async (formData: any) => {
  const { id } = Object.fromEntries(formData);
  console.log(id);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("포스트를 삭제합니다.");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "에러가 발생했습니다." };
  }
};

export const addUser = async (previousState: any, formData: any) => {
  const { username, email, password, img, isAdmin } = Object.fromEntries(formData);

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      isAdmin,
    });

    await newUser.save();
    console.log("디비에 저장 완료!");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "에러가 발생했습니다." };
  }
};

export const deleteUser = async (formData: any) => {
  const { id } = Object.fromEntries(formData);
  console.log(id);

  try {
    connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("유저를 삭제합니다.");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "에러가 발생했습니다." };
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

export const register = async (previousState: any, formData: any) => {
  const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    // return "패스워드가 일치 하지 않아요";
    // throw new Error("패스워드가 일치하지 않습니다.");
    return { error: "패스워드가 일치하지 않습니다." };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });
    const sameEmail = await User.findOne({ email });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (user) {
      // return "동일한 유저가 존재합니다.";
      return { error: "동일한 유저가 존재합니다." };
    }

    if (sameEmail) {
      // return "동일한 유저가 존재합니다.";
      return { error: "동일한 이메일이 존재합니다." };
    }
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("디비에 저장 완료!");

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "에러가 발생했습니다." };
  }
};

export const login = async (previousState: any, formData: any) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error: any) {
    if (error.message.includes("CredentialsSignin")) {
      return { error: "올바르지 않은 이름 이거나 패스워드 입니다." };
    }
    // return { error: "에러가 발생했습니다." };
    throw error;
  }
};
