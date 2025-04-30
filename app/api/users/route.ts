import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
      await prisma.$connect();
      const users = await prisma.user.findMany();
      return NextResponse.json({ ok: true, users });
    } catch (err) {
      console.error("❌ Ошибка подключения к базе:", err);
      return NextResponse.json({ error: "DB connection failed", details: (err as Error).message }, { status: 500 });
    }
  }
  
export async function POST(req: NextRequest) {
    let data;

    try {
        data = await req.json();

        if (!data || typeof data !== 'object') {
            return NextResponse.json(
                { error: "Невалидный JSON: ожидался объект, получено пусто или другое" },
                { status: 400 }
            );
        }

    } catch (err) {
        return NextResponse.json(
            { error: "Невалидный или пустой JSON", details: (err as Error).message },
            { status: 400 }
        );
    }

    try {
        const user = await prisma.user.create({ data });
        return NextResponse.json(user);
    } catch (err) {
        return NextResponse.json(
            { error: "Ошибка при создании пользователя", details: (err as Error).message },
            { status: 500 }
        );
    }
}
