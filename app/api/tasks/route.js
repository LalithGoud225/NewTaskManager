import { NextResponse } from 'next/server';

let tasks = [];

export async function GET() {
  return NextResponse.json(tasks);
}

export async function POST(request) {
  const { title } = await request.json();
  const newTask = {
    id: Date.now(),
    title,
    createdAt: new Date().toISOString()
  };
  tasks.push(newTask);
  return NextResponse.json(newTask);
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get('id'));
  tasks = tasks.filter(task => task.id !== id);
  return NextResponse.json({ message: 'Task deleted' });
}