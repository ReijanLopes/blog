import { generateContent, generatedPosts } from "@/utils/getPost";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  const posts = await generatedPosts();

  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const { id } = await req.json();

  const content = await generateContent(id);
  return NextResponse.json(content);
}
