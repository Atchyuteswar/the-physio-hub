/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/lib/prisma";
import { Inbox, Mail, Search, Filter } from "lucide-react";
import Link from "next/link";
import { AutoSubmitSelect } from "@/components/AutoSubmitSelect";
import DeleteLeadButton from "./DeleteLeadButton";
import StatusSelect from "./StatusSelect";

interface Props {
  searchParams: Promise<{ q?: string; status?: string; page?: string }>;
}

export default async function LeadsPage({ searchParams }: Props) {
  const { q, status, page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1"));
  const take = 10;
  const skip = (currentPage - 1) * take;

  // Build the where clause

  const where: any = {};

  if (q) {
    where.OR = [
      { name: { contains: q, mode: "insensitive" } },
      { email: { contains: q, mode: "insensitive" } },
      { phone: { contains: q, mode: "insensitive" } },
    ];
  }

  if (status && status !== "ALL") {
    where.status = status;
  }

  // Fetch data
  const [leads, total, totalAllTime, newCount] = await Promise.all([
    prisma.contactLead.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take,
      skip,
    }),
    prisma.contactLead.count({ where }),
    prisma.contactLead.count(),
    prisma.contactLead.count({ where: { status: "NEW" } }),
  ]);

  const totalPages = Math.ceil(total / take);

  // Helper to maintain URL params when paginating
  const buildPageUrl = (newPage: number) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (status) params.set("status", status);
    params.set("page", newPage.toString());
    return `/admin/leads?${params.toString()}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Contact Leads</h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage general inquiries and messages from the public contact form
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card-static p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
            <Inbox className="w-6 h-6 text-slate-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Total Leads</p>
            <p className="text-2xl font-bold text-slate-900">{totalAllTime}</p>
          </div>
        </div>
        <div className="card-static p-5 flex items-center gap-4 border-l-4 border-l-blue-400">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">New Unread Messages</p>
            <p className="text-2xl font-bold text-slate-900">{newCount}</p>
          </div>
        </div>
      </div>

      {/* Filters and Search Row */}
      <div className="card-static p-2">
        <form method="GET" action="/admin/leads" className="flex flex-col sm:flex-row gap-2">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Search by name, email, or phone..."
              className="w-full bg-transparent border-0 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-0"
            />
          </div>

          {/* Vertical divider */}
          <div className="hidden sm:block w-px bg-slate-200 my-2" />

          {/* Status Filter */}
          <div className="relative flex-1 sm:max-w-[200px]">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <AutoSubmitSelect
              name="status"
              defaultValue={status || "ALL"}
              className="w-full bg-transparent border-0 py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:ring-0 cursor-pointer appearance-none"
            >
              <option value="ALL">All Statuses</option>
              <option value="NEW">New</option>
              <option value="REPLIED">Replied</option>
              <option value="ARCHIVED">Archived</option>
            </AutoSubmitSelect>
          </div>
          
          <button type="submit" className="hidden">Submit</button>
        </form>
      </div>

      {/* Table */}
      <div className="card-static overflow-hidden">
        {leads.length === 0 ? (
          <div className="p-16 text-center text-slate-400">
            {q || status ? "No leads match your filters." : "No contact leads yet."}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Sender</th>
                  <th>Contact Info</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead: any) => (
                  <tr key={lead.id}>
                    <td className="font-semibold text-slate-900">{lead.name}</td>
                    <td>
                      <div className="space-y-1">
                        <a href={`mailto:${lead.email}`} className="text-sm font-medium text-blue-600 hover:underline block">
                          {lead.email}
                        </a>
                        {lead.phone && (
                          <p className="text-xs text-slate-500">{lead.phone}</p>
                        )}
                      </div>
                    </td>
                    <td className="max-w-xs">
                      <p className="text-sm text-slate-600 line-clamp-2" title={lead.message}>
                        {lead.message}
                      </p>
                    </td>
                    <td className="text-slate-500 text-sm">
                      {new Date(lead.createdAt).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                      <span className="block text-xs mt-0.5">
                        {new Date(lead.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </span>
                    </td>
                    <td>
                      <StatusSelect id={lead.id} currentStatus={lead.status} />
                    </td>
                    <td className="text-right">
                      <DeleteLeadButton id={lead.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-2">
          <p className="text-sm text-slate-500">
            Showing {skip + 1} to {Math.min(skip + take, total)} of {total} results
          </p>
          <div className="flex items-center gap-2">
            {currentPage > 1 && (
              <Link
                href={buildPageUrl(currentPage - 1)}
                className="btn-outline text-sm! py-1.5! px-3!"
              >
                Previous
              </Link>
            )}
            {currentPage < totalPages && (
              <Link
                href={buildPageUrl(currentPage + 1)}
                className="btn-outline text-sm! py-1.5! px-3!"
              >
                Next
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
