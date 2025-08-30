// Middleware simplificado para desenvolvimento sem autenticação
export default function middleware() {
  // Permitir acesso a todas as rotas sem verificação
  console.log("🔓 Middleware: Acesso livre habilitado");
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
