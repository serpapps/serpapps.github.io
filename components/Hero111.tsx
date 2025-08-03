"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { type ElementType } from "react";

interface Hero111Props {
  badgeIcon?: ElementType;
  badgeText?: string;
  title?: string;
  subtitle?: string;
  button1Text?: string;
  button1Link?: string;
  button1Icon?: ElementType;
  button2Text?: string;
  button2Link?: string;
}

const Hero111 = ({
  badgeIcon: BadgeIcon = Sparkles,
  badgeText = "Introducing Sparkle UI",
  title = "Build Stunning Interfaces with Animated Charm",
  subtitle = "Sparkle UI brings your designs to life with subtle animations and engaging interactions, built on top of shadcn/ui and Tailwind CSS for maximum flexibility.",
  button1Text = "Get Started with Sparkle",
  button1Link = "#",
  button1Icon: Button1Icon = ArrowRight,
  button2Text = "View Components",
  button2Link = "#",
}: Hero111Props) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-24 md:py-32">
      {/* Abstract Background Shapes */}
      <div className="absolute -left-16 -top-16 h-64 w-64 animate-pulse rounded-full bg-primary/10 opacity-30 blur-3xl filter"></div>
      <div className="absolute -bottom-16 -right-16 h-72 w-72 animate-pulse rounded-lg bg-secondary/10 opacity-20 blur-3xl filter [animation-delay:0.5s]"></div>
      <div className="absolute bottom-1/4 left-1/3 h-40 w-40 animate-pulse rounded-full bg-primary/5 opacity-40 blur-2xl filter [animation-delay:1s]"></div>

      <div className="container relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Badge
            variant="outline"
            className="mb-6 flex items-center gap-2 border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
          >
            {BadgeIcon && <BadgeIcon className="size-4 text-yellow-500" />}
            {badgeText}
          </Badge>

          <h1 className="mb-6 text-pretty text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {subtitle}
          </p>

          <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href={button1Link}>
              <Button size="lg" className="group w-full sm:w-auto">
                {button1Text}
                {Button1Icon && (
                  <Button1Icon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                )}
              </Button>
            </Link>
            <Link href={button2Link}>
              <Button
                size="lg"
                variant="ghost"
                className="w-full text-primary hover:bg-primary/10 sm:w-auto"
              >
                {button2Text}
              </Button>
            </Link>
          </div>

          {/* Simple Visual Placeholder */}
          <div className="mt-16 h-1 w-2/3 rounded-full bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20"></div>
          <div className="mt-4 h-1 w-1/2 rounded-full bg-gradient-to-r from-secondary/20 via-secondary/40 to-secondary/20"></div>
        </div>
      </div>
    </section>
  );
};

export { Hero111 };
