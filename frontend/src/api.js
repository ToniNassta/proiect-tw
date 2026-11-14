export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";
export async function fetchProduse() {
  const res = await fetch(`${API_URL}/produseArr`);
  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }
  return res.json();
}

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }
  // 204 No Content nu are corp
  return res.status === 204 ? null : res.json();
}
export function fetchProduse2() {
  return request("/produseArr");
}
export function createProdus(task) {
  return request("/produseArr", { method: "POST", body: JSON.stringify(task) });
}
export function updateProdus(id, changes) {
  return request(`/produseArr/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}
export function deleteProdus(id) {
  return request(`/produseArr/${id}`, { method: "DELETE" });
}
