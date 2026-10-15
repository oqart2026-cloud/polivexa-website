
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, ShieldCheck, ArrowRight } from "lucide-react";

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:5000"
).replace(/\/+$/, "");

export default function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.token) {
        throw new Error(result.message || "Login failed.");
      }

      sessionStorage.setItem("polivexa_admin_token", result.token);

      navigate("/admin/dashboard", { replace: true });
    } catch (err) {
      setError(err.message || "Unable to login. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-[85vh] items-center justify-center bg-slate-950 px-5 py-16">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl md:p-10">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
            <ShieldCheck size={34} />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-white">
            Polivexa Admin
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Sign in to manage website enquiries
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="admin-username"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Username
            </label>

            <input
              id="admin-username"
              type="text"
              autoComplete="username"
              required
              maxLength={100}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter admin username"
              className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3.5 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
            />
          </div>

          <div>
            <label
              htmlFor="admin-password"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Password
            </label>

            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter admin password"
              className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3.5 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
            />
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <LockKeyhole size={18} />

            {loading ? "Signing in..." : "Secure Login"}

            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-slate-500">
          Authorized Polivexa personnel only
        </p>
      </div>
    </div>
  );
}
