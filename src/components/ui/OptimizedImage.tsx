import Image from "next/image";

const DEFAULT_QUALITY = 80;

type OptimizedImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes: string;
  quality?: number;
  /** Shown while loading — subtle warm tone */
  wrapperClassName?: string;
  /** Skip optimizer & ivory placeholder — for transparent PNG/SVG heroes */
  transparent?: boolean;
} & (
  | { fill: true; width?: never; height?: never }
  | { fill?: false; width: number; height: number }
);

/**
 * Next.js Image wrapper — automatic AVIF/WebP, responsive srcset, lazy load.
 * @see next.config.ts `images.formats`
 */
export default function OptimizedImage({
  src,
  alt,
  className = "object-cover",
  priority = false,
  sizes,
  quality = DEFAULT_QUALITY,
  wrapperClassName,
  transparent = false,
  fill,
  width,
  height,
}: OptimizedImageProps) {
  const shared = {
    src,
    alt,
    quality,
    sizes,
    priority,
    className,
    placeholder: "empty" as const,
    unoptimized: transparent,
    ...(priority ? {} : { loading: "lazy" as const }),
  };

  const defaultWrapper = transparent
    ? "relative overflow-visible bg-transparent"
    : fill
      ? "absolute inset-0 overflow-hidden bg-ivory"
      : "relative overflow-hidden bg-ivory";

  if (fill) {
    const wrapperCls = wrapperClassName ?? defaultWrapper;
    return (
      <div className={wrapperCls}>
        <Image {...shared} fill />
      </div>
    );
  }

  const fluid = wrapperClassName?.includes("w-full");

  return (
    <div
      className={wrapperClassName ?? defaultWrapper}
      style={fluid ? undefined : { width, height }}
    >
      <Image
        {...shared}
        width={width}
        height={height}
        style={fluid ? { width: "100%", height: "auto" } : undefined}
      />
    </div>
  );
}
