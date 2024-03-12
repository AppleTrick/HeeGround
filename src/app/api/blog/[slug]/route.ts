import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

interface Props {
  params: {
    [key: string]: string;
  };
}

export const GET = async (request: NextApiRequest, { params }: Props) => {
  const { slug } = params;
  try {
    connectToDb();
    const posts = await Post.findOne({ slug });
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("포스트를 가지고 오는것을 실패함");
  }
};
