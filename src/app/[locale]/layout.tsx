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
        <meta property="og:title" content="D. Batorgil's profolio" />
        <meta property="og:site_name" content="D. Batorgil" />
        <meta property="og:url" content="batorgil.dev" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="" />
        <meta
          property="og:image"
          content="https://batorgil.dev/images/projects/profolio.png"
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
