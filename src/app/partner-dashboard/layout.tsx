"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Scale,
  LayoutDashboard,
  BarChart3,
  Kanban,
  Shield,
  Newspaper,
  LogOut,
  Bell,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const sidebarLinks = [
  {
    href: "/partner-dashboard",
    label: "Overview",
    icon: LayoutDashboard,
  },
  {
    href: "/partner-dashboard/legal-updates",
    label: "Legal Update Scout",
    icon: Newspaper,
  },
  {
    href: "/partner-dashboard/analytics",
    label: "Live Analytics",
    icon: BarChart3,
  },
  {
    href: "/partner-dashboard/pipeline",
    label: "Instruction Pipeline",
    icon: Kanban,
  },
  {
    href: "/partner-dashboard/compliance",
    label: "Compliance",
    icon: Shield,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <div className="flex h-screen bg-background">
        {/* Sidebar */}
        <aside className="hidden w-64 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
          {/* Logo */}
          <div className="flex h-16 items-center gap-2.5 border-b border-sidebar-border px-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-charcoal-light">
              <Scale className="h-4 w-4 text-gold" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white">
                LARCOMES
              </span>
              <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/40">
                Partner Dashboard
              </span>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 space-y-1 p-3">
            {sidebarLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/partner-dashboard" &&
                  pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-sidebar-accent text-white"
                      : "text-sidebar-foreground/60 hover:bg-sidebar-accent/50 hover:text-white"
                  }`}
                >
                  <link.icon
                    className={`h-4 w-4 ${isActive ? "text-gold" : ""}`}
                  />
                  {link.label}
                  {isActive && (
                    <ChevronRight className="ml-auto h-3 w-3 text-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* User */}
          <div className="border-t border-sidebar-border p-3">
            <div className="flex items-center gap-3 rounded-lg px-3 py-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-gold/20 text-xs font-semibold text-gold">
                  JH
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  J. Hartley
                </p>
                <p className="truncate text-xs text-white/40">
                  Senior Partner
                </p>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-white/40 hover:bg-sidebar-accent hover:text-white"
                    >
                      <LogOut className="h-4 w-4" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Exit dashboard</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Top bar */}
          <header className="flex h-16 items-center justify-between border-b border-border bg-white px-6">
            {/* Mobile nav */}
            <div className="flex items-center gap-3 lg:hidden">
              <Scale className="h-5 w-5 text-gold" />
              <span className="text-sm font-bold text-charcoal">LARCOMES</span>
            </div>

            {/* Breadcrumb */}
            <div className="hidden items-center gap-2 text-sm lg:flex">
              <span className="text-muted-foreground">Dashboard</span>
              <ChevronRight className="h-3 w-3 text-muted-foreground" />
              <span className="font-medium text-charcoal">
                {sidebarLinks.find(
                  (l) =>
                    l.href === pathname ||
                    (l.href !== "/partner-dashboard" &&
                      pathname.startsWith(l.href))
                )?.label || "Overview"}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="hidden border-gold/20 text-[10px] text-gold sm:inline-flex"
              >
                <Shield className="mr-1 h-3 w-3" />
                ISO 27001
              </Badge>
              <Button
                variant="ghost"
                size="icon"
                className="relative h-9 w-9"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-gold" />
              </Button>
              <Avatar className="h-8 w-8 lg:hidden">
                <AvatarFallback className="bg-gold/20 text-xs font-semibold text-gold">
                  JH
                </AvatarFallback>
              </Avatar>
            </div>
          </header>

          {/* Mobile nav tabs */}
          <div className="flex overflow-x-auto border-b border-border bg-white px-4 lg:hidden">
            {sidebarLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/partner-dashboard" &&
                  pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-3 text-xs font-medium transition-colors ${
                    isActive
                      ? "border-gold text-gold"
                      : "border-transparent text-muted-foreground hover:text-charcoal"
                  }`}
                >
                  <link.icon className="h-3.5 w-3.5" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Page content */}
          <main className="flex-1 overflow-y-auto bg-background p-6">
            {children}
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
