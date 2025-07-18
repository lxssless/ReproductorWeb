// src/pages/auth/register.ts
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ redirect }) => {
  // Aquí podrías guardar los datos en una DB real
  return redirect("/login");
};
