import { ImageIcon } from "lucide-react";
import type { Photo } from "@/config/site";
import { cn } from "@/lib/utils";

/** Mostra a foto (object-fit: cover) ou um espaço reservado elegante. */
export function ImageSlot({
  photo,
  className,
  imgClassName,
  placeholderClassName,
  eager,
}: {
  photo: Photo;
  className?: string;
  imgClassName?: string;
  placeholderClassName?: string;
  eager?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-sand", className)}>
      {photo.src ? (
        <img
          src={photo.src}
          alt={photo.alt}
          loading={eager ? "eager" : "lazy"}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      ) : (
        <div
          role="img"
          aria-label={photo.alt}
          className={cn("placeholder-slot flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center", placeholderClassName)}
        >
          <ImageIcon className="h-7 w-7 text-taupe" strokeWidth={1.25} />
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-taupe">
            {photo.label}
          </span>
        </div>
      )}
    </div>
  );
}
