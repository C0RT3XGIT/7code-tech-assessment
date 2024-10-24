import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "@/app/globals.css";
import Link from "next/link";
import { ROUTES } from "@/utils/constants/routes";
import { i18n, Locale } from "@/i18n-config";

const onest = Onest({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Multi-Language App",
  description: "7code Multi-Language Next.js App",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale.locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {

  return (
    <html lang={params.lang}>
      <body
        className={`${onest.className} antialiased`}
      >
        <header className="p-4 bg-gray-800">
          <nav className="flex justify-between items-center">
            <div className="flex gap-4">
              <Link href={`/${params.lang}${ROUTES.HOME}`} className="font-bold">Home</Link>
              <Link href={`/${params.lang}${ROUTES.ABOUT}`} className="font-bold">About</Link>
            </div>
          </nav>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
