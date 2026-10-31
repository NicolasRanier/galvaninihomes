import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/config/site";
import { ImageSlot } from "./ImageSlot";

export function Lightbox({
  photos,
  index,
  onClose,
  onChange,
}: {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index! + 1) % photos.length);
      if (e.key === "ArrowLeft") onChange((index! - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, index, photos.length, onClose, onChange]);

  if (!open) return null;
  const photo = photos[index!];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-overlay p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button aria-label="Fechar" onClick={onClose} className="lightbox-btn absolute right-4 top-4">
        <X className="h-5 w-5" />
      </button>
      <button
        aria-label="Foto anterior"
        onClick={(e) => {
          e.stopPropagation();
          onChange((index! - 1 + photos.length) % photos.length);
        }}
        className="lightbox-btn absolute left-3 top-1/2 -translate-y-1/2 md:left-8"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <figure className="w-full max-w-5xl animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
        <ImageSlot photo={photo} className="aspect-[3/2] w-full rounded-lg" imgClassName="object-contain bg-ink" />
        <figcaption className="mt-3 text-center text-sm text-overlay-foreground">
          {photo.label} · {index! + 1} / {photos.length}
        </figcaption>
      </figure>
      <button
        aria-label="Próxima foto"
        onClick={(e) => {
          e.stopPropagation();
          onChange((index! + 1) % photos.length);
        }}
        className="lightbox-btn absolute right-3 top-1/2 -translate-y-1/2 md:right-8"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
