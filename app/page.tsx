import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function Home() {
  const data = await prisma.test.create({
    data: {
      test: "Hi"
    }
  });
  return (
    <div>{JSON.stringify(data)}</div>
  );
}
