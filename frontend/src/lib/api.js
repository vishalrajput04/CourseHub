// Set VITE_API_URL when building the frontend for a different backend.
const API_BASE = (import.meta.env.VITE_API_URL || "https://coursehub-c006.onrender.com").replace(/\/+$/, "");

export async function apiRequest(path, options = {}) {
  const token = localStorage.getItem("coursehubToken");
  let response;
  try {
    response = await fetch(`${API_BASE}/api${path}`, {
      ...options,
      headers: {
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
    });
  } catch {
    throw new Error("CourseHub server could not be reached. Please try again later.");
  }

  const payload = response.status === 204 ? null : await response.json().catch(() => null);
  if (!response.ok) {
    const error = new Error(payload?.error || "The request could not be completed.");
    error.status = response.status;
    throw error;
  }
  return payload;
}
