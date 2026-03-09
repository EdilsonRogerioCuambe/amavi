"use client";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ImageIcon, Maximize2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  className?: string; // Optional custom class for masonry-like spans (e.g., md:col-span-2 md:row-span-2)
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function ImageGallery({ images, title, description, className, titleClassName, descriptionClassName }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  // Example masonry layout classes to distribute images nicely if no className is provided per-image
  const getGridClasses = (index: number) => {
    // Creates a nice alternating pattern for varied sizing
    if (index % 5 === 0) return "md:col-span-2 md:row-span-2";
    if (index % 7 === 0) return "md:col-span-2";
    return "col-span-1";
  };

  return (
    <section className={cn(className)}>
      <div className="container px-4 md:px-6 mx-auto">
        {(title || description) && (
          <div className="mb-10 text-center space-y-3">
            {title && <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl text-foreground", titleClassName)}>{title}</h2>}
            {description && <p className={cn("text-muted-foreground text-lg max-w-2xl mx-auto", descriptionClassName)}>{description}</p>}
          </div>
        )}

        {images.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed rounded-xl border-muted bg-muted/20">
            <ImageIcon className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold text-foreground">A Galeria está Vazia</h3>
            <p className="text-muted-foreground mt-2">Nenhuma imagem disponível para exibir no momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={cn(
                  "group relative overflow-hidden rounded-xl cursor-pointer bg-muted transition-all duration-500 hover:shadow-2xl ring-1 ring-border/50",
                  image.className || getGridClasses(index)
                )}
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex justify-between items-end gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 will-change-transform">
                    <div className="flex-1 overflow-hidden">
                      {image.title && (
                        <h3 className="text-white font-semibold text-xl md:text-2xl truncate mb-1">
                          {image.title}
                        </h3>
                      )}
                      {image.description && (
                        <p className="text-white/80 text-sm md:text-base line-clamp-2">
                          {image.description}
                        </p>
                      )}
                    </div>
                    <div className="flex-shrink-0 bg-white/20 backdrop-blur-md p-3 rounded-full text-white shadow-lg border border-white/20 hover:bg-white/30 transition-colors">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Fullscreen Lightbox View */}
        <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
          <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none shadow-2xl h-[95vh] flex flex-col justify-center items-center [&>button]:text-white [&>button]:bg-white/10 [&>button]:hover:bg-white/20 [&>button]:p-2 [&>button]:rounded-full">
            <DialogTitle className="sr-only">
              {selectedImage?.title || "Visualização da Imagem"}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {selectedImage?.description || selectedImage?.alt || "Imagem em tela cheia da galeria"}
            </DialogDescription>

            {/* Navigation Controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all border border-white/10 group"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all border border-white/10 group"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                </button>
              </>
            )}

            <div className="relative w-full h-full flex flex-col justify-center p-4 md:p-12">
              {selectedImage && (
                <>
                  <div className="relative w-full h-full flex-1 mb-4">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                  </div>

                  {(selectedImage.title || selectedImage.description) && (
                    <div className="absolute bottom-6 md:bottom-12 left-0 right-0 max-w-3xl mx-auto text-center bg-black/70 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl mx-4">
                      {selectedImage.title && (
                        <h3 className="text-white font-bold text-2xl md:text-3xl mb-2">
                          {selectedImage.title}
                        </h3>
                      )}
                      {selectedImage.description && (
                        <p className="text-white/80 text-base md:text-lg">
                          {selectedImage.description}
                        </p>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

export default ImageGallery;
