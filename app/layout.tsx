import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Prabhat Kumar - Full Stack Developer",
  description: "Portfolio of Prabhat Kumar - Full Stack Developer specializing in MERN stack, Java, Spring Boot, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />  
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
