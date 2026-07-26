import prisma from "@/lib/prisma"
import GeneratorClient from "./GeneratorClient"

export default async function Home() {
  const settings = await prisma.settings.findFirst() || {
    eventTitle: 'Farewell 2026',
    department: 'Electronics Department',
    institute: 'Barishal Polytechnic Institute',
    venue: 'Euro Convention Hall\nBand Road\nBarishal',
    eventDate: '30 July 2026',
    registrationDeadline: '27 July 2026\n11:59 PM',
    registrationFee: '1100 BDT',
    paymentAmount: '1115 BDT\n(Including Service Charge)',
    qrLink: 'https://forms.gle/test',
  }

  return <GeneratorClient settings={settings} />
}
