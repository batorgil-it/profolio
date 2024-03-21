import "./global.css";

import { Header } from "@/components/layout";
import { AppContainer } from "@/components/ui";
import classNames from "classnames";
import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

export const metadata: Metadata = {
  title: "D.Batorgil",
  description: "Full stack developer",
  openGraph: {
    type: "article",
    description: "Full-stack senior engineer with four years of experience.",
    title: "D.Batorgil's Portfolio",
    images: "https://batorgil.dev/images/projects/profolio.png",
    authors: "Batorgil Davaajantsan",
    url: "https://batorgil.dev",
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html
      lang={locale}
      className={classNames("dark:bg-secondary scroll-smooth")}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1.0; maximum-scale=1.0;"
        />
      </Head>

      <NextIntlClientProvider messages={messages}>
        <AppContainer>
          <Toaster />
          <Header locale={locale} />
          <div className="relative dark:text-white">{children}</div>
        </AppContainer>
      </NextIntlClientProvider>
    </html>
  );
}
