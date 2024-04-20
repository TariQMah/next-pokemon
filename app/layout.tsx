import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/providers";
import StyledComponentsRegistry from "./registery";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getCategories } from "@/server/api/actions";
import { Suspense } from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Suspense fallback={"Loading...."}>{children}</Suspense>
        </Provider>
      </body>
    </html>
  );
}
