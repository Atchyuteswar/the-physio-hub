/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import {
  CalendarCheck,
  Inbox,
  Video,
  Image as ImageIcon,
  MessageSquare,
  Activity,
  ArrowRight,
} from "lucide-react";

export default async function AdminDashboard() {
  // Fetch metrics in parallel
  const [
    totalAppointments,
    pendingAppointments,
    totalLeads,
    newLeads,
    totalVideos,
    totalGallery,
    totalTestimonials,
    recentAppointments,
    recentLeads,
  ] = await Promise.all([
    prisma.appointment.count(),
    prisma.appointment.count({ where: { status: "PENDING" } }),
    prisma.contactLead.count(),
    prisma.contactLead.count({ where: { status: "NEW" } }),
    prisma.video.count(),
    prisma.gallery.count(),
    prisma.testimonial.count(),
    prisma.appointment.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
    }),
    prisma.contactLead.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
    }),
  ]);

  // Merge and sort activity
  const combinedActivity = [
    ...recentAppointments.map((a: any) => ({
      ...a,
      type: "APPOINTMENT" as const,
      link: "/admin/appointments",
    })),
    ...recentLeads.map((l: any) => ({
      ...l,
      type: "LEAD" as const,
      link: "/admin/leads",
    })),
  ]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 8); // Display top 8 recent items

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-sm text-slate-500 mt-1">
          Welcome back! Here&apos;s what&apos;s happening at The Physio Hub today.
        </p>
      </div>

      {/* Primary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/admin/appointments"
          className="card-static block p-6 hover:border-green-300 transition group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
              <CalendarCheck className="w-6 h-6 text-green-600" />
            </div>
            {pendingAppointments > 0 && (
              <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                {pendingAppointments} Pending
              </span>
            )}
          </div>
          <p className="text-sm font-medium text-slate-500">Total Appointments</p>
          <div className="flex items-center justify-between mt-1">
            <p className="text-3xl font-bold text-slate-900">{totalAppointments}</p>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-green-600 transition -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
          </div>
        </Link>

        <Link
          href="/admin/leads"
          className="card-static block p-6 hover:border-blue-300 transition group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
              <Inbox className="w-6 h-6 text-blue-600" />
            </div>
            {newLeads > 0 && (
              <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                {newLeads} New
              </span>
            )}
          </div>
          <p className="text-sm font-medium text-slate-500">Total Contact Leads</p>
          <div className="flex items-center justify-between mt-1">
            <p className="text-3xl font-bold text-slate-900">{totalLeads}</p>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
          </div>
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Content Metrics */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Content Library
          </h2>
          <div className="card-static divide-y divide-slate-100">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-slate-400" />
                <span className="font-medium text-slate-700">Videos</span>
              </div>
              <span className="font-bold text-slate-900">{totalVideos}</span>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ImageIcon className="w-5 h-5 text-slate-400" />
                <span className="font-medium text-slate-700">Gallery Images</span>
              </div>
              <span className="font-bold text-slate-900">{totalGallery}</span>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-slate-400" />
                <span className="font-medium text-slate-700">Testimonials</span>
              </div>
              <span className="font-bold text-slate-900">{totalTestimonials}</span>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Activity className="w-4 h-4 text-green-600" />
            Recent Activity
          </h2>
          <div className="card-static overflow-hidden">
            {combinedActivity.length === 0 ? (
              <div className="p-12 text-center text-slate-500">
                No recent activity to display.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {combinedActivity.map((activity) => (
                  <Link
                    key={`${activity.type}-${activity.id}`}
                    href={activity.link}
                    className="p-4 flex items-start gap-4 hover:bg-slate-50 transition"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        activity.type === "APPOINTMENT"
                          ? "bg-green-100"
                          : "bg-blue-100"
                      }`}
                    >
                      {activity.type === "APPOINTMENT" ? (
                        <CalendarCheck className="w-5 h-5 text-green-600" />
                      ) : (
                        <Inbox className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900 truncate">
                        {activity.name}
                      </p>
                      <p className="text-sm text-slate-500 truncate mt-0.5">
                        {activity.type === "APPOINTMENT"
                          ? `Requested an appointment${
                              activity.service ? ` for ${activity.service}` : ""
                            }`
                          : `Sent a contact message`}
                      </p>
                    </div>
                    <div className="text-xs text-slate-400 whitespace-nowrap shrink-0">
                      {new Date(activity.createdAt).toLocaleDateString()}
                    </div>
                  </Link>
                ))}
              </div>
            )}
            <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
              <span className="text-xs text-slate-500 font-medium">
                Activity from the last 30 days
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}