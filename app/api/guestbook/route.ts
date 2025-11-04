import { auth } from "@/auth"
import { NextResponse } from "next/server"
import { prisma } from "@/prisma-client"

export async function GET() {
  try {
    const entries = await prisma.guestbookEntry.findMany({
      select: {
        id: true,
        message: true,
        createdAt: true,
        user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 100,
    })

    return NextResponse.json(entries)
  } catch (error) {
    console.error("Error fetching entries:", error)
    return NextResponse.json(
      { error: "Error fetching entries", details: String(error) },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { message } = await request.json()

    if (!message || message.trim().length === 0) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    if (message.length > 500) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 })
    }

    const entry = await prisma.guestbookEntry.create({
      data: {
        userId: session.user.id,
        message: message.trim(),
      },
      include: {
        user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    })

    return NextResponse.json(entry)
  } catch (error) {
    console.error("Error creating entry:", error)
    return NextResponse.json(
      { error: "Error creating entry", details: String(error) },
      { status: 500 }
    )
  }
}
