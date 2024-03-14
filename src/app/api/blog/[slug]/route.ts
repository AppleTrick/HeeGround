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

export const DELETE = async (request: NextApiRequest, { params }: Props) => {
  const { slug } = params;
  try {
    connectToDb();
    await Post.deleteOne({ slug });
    return NextResponse.json("포스트가 삭제됨");
  } catch (error) {
    console.log(error);
    throw new Error("포스트를 삭제하는 것을 실패함");
  }
};
