import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash(
    "admin123",
    10
  );

  await prisma.admin.upsert({
    where: {
      email: "admin@physiohub.com",
    },
    update: {},
    create: {
      email: "admin@physiohub.com",
      password: hashedPassword,
    },
  });

  console.log("Admin created");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });