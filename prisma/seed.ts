import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.admin.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: 'password123',
    },
  })

  await prisma.settings.upsert({
    where: { id: '1' },
    update: {
      qrLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe7tyZhXqD2aznxvcc8se5VnayFvE0p4oW4LsmcQxmjgrVfpg/viewform?usp=header',
      eventDate: '30 July, 2026',
      venue: 'Euro Conventional Hall\nBand Road, Barishal',
    },
    create: {
      id: '1',
      eventTitle: 'Farewell 2026',
      department: 'Electronics Department',
      institute: 'Barishal Polytechnic Institute',
      venue: 'Euro Conventional Hall\nBand Road, Barishal',
      eventDate: '30 July, 2026',
      registrationDeadline: '27 July 2026\n11:59 PM',
      registrationFee: '1100 BDT',
      paymentAmount: '1115 BDT\n(Including Service Charge)',
      qrLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe7tyZhXqD2aznxvcc8se5VnayFvE0p4oW4LsmcQxmjgrVfpg/viewform?usp=header',
      campusActivities: JSON.stringify(["Color Festival", "T-Shirt Signature", "Photography", "Videography", "Drone Shoot"]),
      campusTime: '09:00 AM – 01:00 PM',
      mainEventActivities: JSON.stringify(["Cake Cutting", "Entertainment", "Raffle Draw", "Photo Booth", "Memorial Book", "Dinner"]),
      mainEventTime: '07:00 PM – 11:00 PM',
      dinnerMenu: JSON.stringify(["Chicken Biryani", "Soft Drinks", "Water"]),
    },
  })

  console.log("Database seeded.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
