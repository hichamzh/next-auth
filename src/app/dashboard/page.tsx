"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import data from "./data.json";

import Loading from "./loading";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  
  if (status === "loading") {
    return <Loading />;
  }

  return (
    <>
      {session?.user ? (
        <>
          <SidebarProvider
            style={
              {
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
              } as React.CSSProperties
            }
          >
            <AppSidebar variant="inset" session={session}/>
            <SidebarInset>
              <SiteHeader />
              <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                  <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                    <SectionCards />
                    <div className="px-4 lg:px-6">
                      <ChartAreaInteractive />
                    </div>
                    <DataTable data={data} />
                  </div>
                </div>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </>
      ) : (
        <div className="flex flex-col items-center justify-start min-h-screen pt-32 bg-gray-50">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Accès restreint
            </h2>
            <p className="mb-6 text-gray-600 text-center">
              Vous devez être connecté pour accéder au tableau de bord.
            </p>
            <Link
              href="/login"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold shadow"
            >
              Se connecter
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
