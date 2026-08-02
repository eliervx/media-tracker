import * as React from "react"

import { cn } from "@/lib/utils"


function CardGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "grid md:grid-cols-5 gap-4 sm:grid-cols-1",
        className
      )}
      {...props}
    />
  )
}

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

interface CardDescriptionProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
  lines?: number; // Permet de personnaliser le nombre de lignes (par défaut 3)
}

function CardDescription({
  className,
  children,
  lines = 3,
  ...props
}: CardDescriptionProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Détermine la classe Tailwind de limitation selon le nombre de lignes souhaité
  const clampClass = {
    1: "line-clamp-1",
    2: "line-clamp-2",
    3: "line-clamp-3",
    4: "line-clamp-4",
    5: "line-clamp-5",
  }[lines] || "line-clamp-3";

  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      <p className={cn("transition-all", !isExpanded && clampClass)}>
        {children}
      </p>

      {children ? <button
        type="button"
        onClick={(e) => {
          e.stopPropagation(); // Évite de déclencher un clic parent (ex: ouverture de la carte)
          setIsExpanded(!isExpanded);
        }}
        className="mt-1 text-xs font-semibold text-primary hover:underline focus:outline-none cursor-pointer"
      >
        {isExpanded ? "Voir moins" : "Voir plus"}
      </button> : ""}
    </div>
  );
}



function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing)", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center justify-between rounded-b-xl border-t pt-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardGroup,
}
