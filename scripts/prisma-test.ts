import { PrismaClient } from "../src/generated/prisma/client"
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./prisma/dev.db",
})

const prisma = new PrismaClient({ adapter })

async function main() {
  const user = await prisma.user.upsert({
    where: {
      email: "utsu@cinexpace.test",
    },
    update: {
      name: "Utsu",
    },
    create: {
      name: "Utsu",
      email: "utsu@cinexpace.test",
    },
  })

  const channel = await prisma.channel.upsert({
    where: {
      name: "Cine Ação",
    },
    update: {
      description: "Canal de filmes de ação para testar o Prisma.",
    },
    create: {
      name: "Cine Ação",
      category: "Filmes",
      description: "Canal de filmes de ação para testar o Prisma.",
      year: 2026,
      duration: "2h 04min",
    },
  })

  await prisma.favorite.upsert({
    where: {
      userId_channelId: {
        userId: user.id,
        channelId: channel.id,
      },
    },
    update: {},
    create: {
      userId: user.id,
      channelId: channel.id,
    },
  })

  await prisma.watchLater.upsert({
    where: {
      userId_channelId: {
        userId: user.id,
        channelId: channel.id,
      },
    },
    update: {},
    create: {
      userId: user.id,
      channelId: channel.id,
    },
  })

  await prisma.rating.upsert({
    where: {
      userId_channelId: {
        userId: user.id,
        channelId: channel.id,
      },
    },
    update: {
      value: 5,
    },
    create: {
      userId: user.id,
      channelId: channel.id,
      value: 5,
    },
  })

  const result = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    include: {
      favorites: {
        include: {
          channel: true,
        },
      },
      watchLater: {
        include: {
          channel: true,
        },
      },
      ratings: {
        include: {
          channel: true,
        },
      },
    },
  })

  console.dir(result, { depth: null })
}

main()
  .catch((error) => {
    console.error("Erro no teste do Prisma:")
    console.error(error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
