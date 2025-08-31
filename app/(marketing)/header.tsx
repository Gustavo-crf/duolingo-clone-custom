"use client";

import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
        <Link href="/" className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src="/mascot.svg" alt="Mascot" height={40} width={40} />

          <h1 className="text-2xl font-extrabold tracking-wide text-blue-600">
            Professor IA
          </h1>
        </Link>

        <div className="flex gap-x-3">
          {/* Botão para acessar a aplicação diretamente */}
          <Link href="/learn" className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
            🚀 Testar App
          </Link>
        </div>
      </div>
    </header>
  );
};
