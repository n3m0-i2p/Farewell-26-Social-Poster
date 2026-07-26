import prisma from "@/lib/prisma"
import { updateSettings } from "./actions"

export default async function AdminDashboard() {
  const settings = await prisma.settings.findFirst()

  if (!settings) {
    return <div>No settings found. Please run seed.</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900">Admin Dashboard</h1>
        <p className="text-neutral-500 mt-2">Manage the underlying data for the Poster Studio.</p>
      </div>

      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-neutral-100 bg-neutral-50/50">
          <h2 className="font-semibold text-lg">Event Settings</h2>
        </div>
        
        <form action={updateSettings} className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-700">Event Title</label>
              <input name="eventTitle" defaultValue={settings.eventTitle} className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-blue-500 outline-none transition" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-700">Institute</label>
              <input name="institute" defaultValue={settings.institute} className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-blue-500 outline-none transition" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-700">Department</label>
              <input name="department" defaultValue={settings.department} className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-blue-500 outline-none transition" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-700">Venue</label>
              <input name="venue" defaultValue={settings.venue} className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-blue-500 outline-none transition" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-700">Event Date</label>
              <input name="eventDate" defaultValue={settings.eventDate} className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-blue-500 outline-none transition" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-700">QR Code URL</label>
              <input name="qrLink" defaultValue={settings.qrLink} className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-blue-500 outline-none transition" />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button type="submit" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
