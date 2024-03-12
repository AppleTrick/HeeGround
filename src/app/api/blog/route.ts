import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (request: NextApiRequest) => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("포스트목록들을 가지고오는 것을 실패함");
  }
};
