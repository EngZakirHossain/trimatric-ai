// lib/api.ts
export async function fetchFromAPI(
  endpoint: string,
  options: RequestInit = {}
) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_API_URL in .env.local");
  }

  const isFormData = options.body instanceof FormData;

  const headers: HeadersInit = {
    Authorization: `Bearer ${token}`,
    ...(options.headers || {}),
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
  };

  const res = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers,
    cache: "no-store", 
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    console.error("API error:", res.status, await res.text());
    throw new Error(`API request failed with status ${res.status}`);
  }

  return res.json();
}
