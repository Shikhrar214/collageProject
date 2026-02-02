const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
};

export const fetchAPI = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const token = getToken();

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "API Error");
  }

  return res.json();
};
