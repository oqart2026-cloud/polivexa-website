
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Clock3,
  CheckCircle2,
  Search,
  Download,
  RefreshCw,
  LogOut,
  Mail,
  Phone,
} from "lucide-react";

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:5000"
).replace(/\/+$/, "");

const TOKEN_KEY = "polivexa_admin_token";

function csvCell(value) {
  let text = String(value ?? "");

  // Prevent CSV formula injection when opened in spreadsheet apps.
  if (/^\s*[=+\-@]/.test(text)) {
    text = "'" + text;
  }

  return `"${text.replace(/"/g, '""')}"`;
}

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  const logout = useCallback(() => {
    sessionStorage.removeItem(TOKEN_KEY);
    navigate("/admin/login", { replace: true });
  }, [navigate]);

  const loadContacts = useCallback(async () => {
    const token = sessionStorage.getItem(TOKEN_KEY);

    if (!token) {
      logout();
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/admin/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401 || response.status === 403) {
        logout();
        return;
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to load enquiries.");
      }

      setContacts(Array.isArray(result.contacts) ? result.contacts : []);
    } catch (err) {
      setError(err.message || "Unable to connect to backend.");
    } finally {
      setLoading(false);
    }
  }, [logout]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  async function updateStatus(id, newStatus) {
    const token = sessionStorage.getItem(TOKEN_KEY);

    if (!token) {
      logout();
      return;
    }

    setUpdatingId(id);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}/api/admin/contacts/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      if (response.status === 401 || response.status === 403) {
        logout();
        return;
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to update enquiry.");
      }

      setContacts((previous) =>
        previous.map((contact) =>
          contact._id === id ? result.contact : contact
        )
      );
    } catch (err) {
      setError(err.message || "Status update failed.");
    } finally {
      setUpdatingId(null);
    }
  }

  const filteredContacts = contacts.filter((contact) => {
    const searchableText = [
      contact.name,
      contact.email,
      contact.phone,
      contact.service,
      contact.message,
      contact.status,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(
      search.trim().toLowerCase()
    );

    const matchesStatus =
      statusFilter === "All" ||
      (contact.status || "New") === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalCount = contacts.length;

  const newCount = contacts.filter(
    (contact) => !contact.status || contact.status === "New"
  ).length;

  const contactedCount = contacts.filter(
    (contact) => contact.status === "Contacted"
  ).length;

  const closedCount = contacts.filter(
    (contact) => contact.status === "Closed"
  ).length;

  function exportCSV() {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Service",
      "Message",
      "Status",
      "Submitted At",
    ];

    const rows = filteredContacts.map((contact) => [
      contact.name,
      contact.email,
      contact.phone || "",
      contact.service || "General Enquiry",
      contact.message,
      contact.status || "New",
      contact.createdAt
        ? new Date(contact.createdAt).toLocaleString("en-IN")
        : "",
    ]);

    const csv =
      "\uFEFF" +
      [headers, ...rows]
        .map((row) => row.map(csvCell).join(","))
        .join("\r\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "polivexa-enquiries.csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  const stats = [
    {
      label: "Total Enquiries",
      value: totalCount,
      icon: Users,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "New Leads",
      value: newCount,
      icon: Clock3,
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "Contacted",
      value: contactedCount,
      icon: Mail,
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      label: "Closed",
      value: closedCount,
      icon: CheckCircle2,
      color: "bg-green-50 text-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-2 text-cyan-700">
              <LayoutDashboard size={20} />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Admin Management
              </span>
            </div>

            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Enquiry Dashboard
            </h1>

            <p className="mt-2 text-slate-500">
              Polivexa Solution Private Limited
            </p>
          </div>

          <button
            type="button"
            onClick={logout}
            className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>

                  <div className={`rounded-xl p-3 ${stat.color}`}>
                    <Icon size={21} />
                  </div>
                </div>

                <p className="mt-4 text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Enquiry Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 p-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Contact Enquiries
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Showing {filteredContacts.length} enquiries
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={loadContacts}
                disabled={loading}
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
              >
                <RefreshCw size={17} />
                Refresh
              </button>

              <button
                type="button"
                onClick={exportCSV}
                disabled={loading || filteredContacts.length === 0}
                className="flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700 disabled:opacity-50"
              >
                <Download size={17} />
                Export CSV
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 border-b border-slate-100 p-5">
            <div className="relative min-w-[220px] flex-1">
              <Search
                size={18}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search name, email, phone..."
                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-cyan-500"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-500"
            >
              <option value="All">All Status</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          {error && (
            <div
              role="alert"
              className="m-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          {loading ? (
            <div className="py-16 text-center text-slate-500">
              Loading enquiries...
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px] text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    {[
                      "Date",
                      "Name",
                      "Email",
                      "Phone",
                      "Service",
                      "Message",
                      "Status",
                    ].map((heading) => (
                      <th
                        key={heading}
                        className="whitespace-nowrap px-5 py-4 font-semibold"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {filteredContacts.map((contact) => (
                    <tr
                      key={contact._id}
                      className="border-t border-slate-100 align-top hover:bg-slate-50"
                    >
                      <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                        {contact.createdAt
                          ? new Date(contact.createdAt).toLocaleString("en-IN")
                          : "—"}
                      </td>

                      <td className="px-5 py-4 font-semibold text-slate-900">
                        {contact.name}
                      </td>

                      <td className="px-5 py-4">
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-cyan-700 hover:underline"
                        >
                          {contact.email}
                        </a>
                      </td>

                      <td className="px-5 py-4">
                        {contact.phone ? (
                          <a
                            href={`tel:${contact.phone}`}
                            className="inline-flex items-center gap-1 text-slate-700 hover:text-cyan-700"
                          >
                            <Phone size={14} />
                            {contact.phone}
                          </a>
                        ) : (
                          "—"
                        )}
                      </td>

                      <td className="px-5 py-4 text-slate-700">
                        {contact.service || "General Enquiry"}
                      </td>

                      <td className="max-w-xs whitespace-pre-wrap break-words px-5 py-4 text-slate-600">
                        {contact.message}
                      </td>

                      <td className="px-5 py-4">
                        <select
                          value={contact.status || "New"}
                          disabled={updatingId === contact._id}
                          onChange={(event) =>
                            updateStatus(contact._id, event.target.value)
                          }
                          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-cyan-500 disabled:opacity-50"
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredContacts.length === 0 && (
                <div className="py-16 text-center text-slate-500">
                  No enquiries found.
                </div>
              )}
            </div>
          )}
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Dashboard shows up to 1,000 latest enquiries from MongoDB.
        </p>
      </div>
    </div>
  );
}
