import { PrismaClient, Priority, Status } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Remove existing tasks
  await prisma.task.deleteMany();

  // Insert sample tasks
  await prisma.task.createMany({
    data: [
      {
        title: "Complete Full Stack Assignment",
        description: "Build the task management application.",
        status: Status.IN_PROGRESS,
        priority: Priority.HIGH,
        dueDate: new Date("2026-07-15"),
      },
      {
        title: "Learn Prisma ORM",
        description: "Understand Prisma schema, migrations and client.",
        status: Status.TODO,
        priority: Priority.HIGH,
        dueDate: new Date("2026-07-12"),
      },
      {
        title: "Review React Components",
        description: "Prepare reusable UI components.",
        status: Status.TODO,
        priority: Priority.MEDIUM,
        dueDate: new Date("2026-07-18"),
      },
      {
        title: "Prepare for Technical Interview",
        description: "Revise TypeScript, Node.js and React concepts.",
        status: Status.IN_PROGRESS,
        priority: Priority.HIGH,
        dueDate: new Date("2026-07-20"),
      },
      {
        title: "Update README",
        description: "Add setup instructions and screenshots.",
        status: Status.DONE,
        priority: Priority.LOW,
      },
    ],
  });

  console.log("✅ Database seeded successfully.");
}

main()
  .catch((error) => {
    console.error("❌ Error while seeding:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });