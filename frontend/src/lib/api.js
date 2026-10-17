const API_BASE = (import.meta.env.VITE_API_URL || "/api").replace(/\/+$/, "");

export async function apiRequest(path, options = {}) {
  const token = localStorage.getItem("coursehubToken");
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const payload = response.status === 204 ? null : await response.json();
  if (!response.ok) {
    const error = new Error(payload?.error || "The request could not be completed.");
    error.status = response.status;
    throw error;
  }
  return payload;
}
