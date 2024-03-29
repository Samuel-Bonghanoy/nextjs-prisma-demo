// For initial testing of the prisma db
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const task = await prisma.task.create({
    data: {
      title: "Do this shit",
      content: "Do that shit",
    },
  });
  console.log(task);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
