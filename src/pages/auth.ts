// src/pages/auth.ts
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const usuario = form.get("usuario");
  const clave = form.get("clave");

  // Simulación de autenticación simple
  if (usuario === "admin" && clave === "1234") {
    cookies.set("session", "true", {
      path: "/",
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 // 1 día
    });
    return redirect("/");
  }

  return redirect("/login");
};
