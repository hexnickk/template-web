import { cn } from "app/lib/utils";
import type { ComponentProps } from "react";

export type H1Props = ComponentProps<"h1">;

export function H1({ className, ...props }: H1Props) {
  return (
    <h1
      className={cn(
        "mb-6 text-4xl font-bold text-gray-900 lg:text-6xl",
        className,
      )}
      {...props}
    >
      {props.children}
    </h1>
  );
}

export type H2Props = ComponentProps<"h2">;

export function H2({ className, children, ...props }: H2Props) {
  return (
    <h2
      className={cn(
        "mb-4 text-3xl font-bold text-gray-900 lg:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export type H3Props = ComponentProps<"h3">;

export function H3({ className, children, ...props }: H3Props) {
  return (
    <h3 className={cn("mb-4 text-2xl font-semibold", className)} {...props}>
      {children}
    </h3>
  );
}

export type H4Props = ComponentProps<"h4">;

export function H4({ className, children, ...props }: H4Props) {
  return (
    <h4
      className={cn("scroll-m-20 text-base font-medium text-black", className)}
      {...props}
    >
      {children}
    </h4>
  );
}

export type PProps = ComponentProps<"p">;

export function P({ className, children, ...props }: PProps) {
  return (
    <p className={cn("text-gray-600", className)} {...props}>
      {children}
    </p>
  );
}

export type BlockquoteProps = ComponentProps<"blockquote">;

export function Blockquote({ className, children, ...props }: BlockquoteProps) {
  return (
    <blockquote
      className={cn(
        "border-border text-muted-foreground mt-6 border-l-2 pl-6 italic",
        className,
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}

export type MutedProps = ComponentProps<"p">;

export function Muted({ className, children, ...props }: MutedProps) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)} {...props}>
      {children}
    </p>
  );
}

export type LeadProps = ComponentProps<"p">;

export function Lead({ className, children, ...props }: LeadProps) {
  return (
    <p
      className={cn(
        "mx-auto mb-8 max-w-3xl text-xl text-gray-600 lg:text-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export type SubtitleProps = ComponentProps<"p">;

export function Subtitle({ className, children, ...props }: SubtitleProps) {
  return (
    <p
      className={cn("mx-auto max-w-2xl text-xl text-gray-600", className)}
      {...props}
    >
      {children}
    </p>
  );
}
