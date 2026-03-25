import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XStream Premium | Sua plataforma de Streaming",
  description: "Assista aos melhores filmes e séries com qualidade premium e interface moderna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-background text-foreground`}>
        <AuthProvider>
          <Sidebar />
          <div className="lg:ml-64 min-h-screen flex flex-col pt-20">
            <Header />
            <main className="flex-1 p-6 lg:p-10">
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
