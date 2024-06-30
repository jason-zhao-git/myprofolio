import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

export async function POST(request) {
  const body = await request.json();
  const { name, email, subject, message, show_on_guestbook } = body;

  try {
    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        subject,
        message,
        show_on_guestbook: show_on_guestbook || false,
      },
    });
    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Unable to create message' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      where: { show_on_guestbook: true },
      orderBy: {
        date: 'desc', // Order by date in descending order
      },
    });
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Unable to fetch messages' }, { status: 500 });
  }
}