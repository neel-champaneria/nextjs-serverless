import connectMongoDB from "@/libs/mongodb";
import Thought from "@/models/thoughts";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { text } = await request.json();
  await connectMongoDB();
  await Thought.create({ text });
  return NextResponse.json({ message: "Thought Created" }, { status: 201 });
}

export async function GET(request: NextRequest) {
  await connectMongoDB();
  const thoughts = await Thought.find();
  return NextResponse.json(thoughts);
}
