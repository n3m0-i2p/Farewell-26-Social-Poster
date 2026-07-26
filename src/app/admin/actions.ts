"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function updateSettings(formData: FormData) {
  const eventTitle = formData.get("eventTitle") as string
  const department = formData.get("department") as string
  const institute = formData.get("institute") as string
  const venue = formData.get("venue") as string
  const eventDate = formData.get("eventDate") as string
  const qrLink = formData.get("qrLink") as string

  await prisma.settings.update({
    where: { id: "1" },
    data: {
      eventTitle,
      department,
      institute,
      venue,
      eventDate,
      qrLink,
    }
  })

  revalidatePath("/")
  revalidatePath("/admin")
  redirect("/admin")
}
