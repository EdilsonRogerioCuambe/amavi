"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Copy, Facebook, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ShareButtonsProps {
  title: string;
  url: string;
  className?: string;
  variant?: "floating" | "inline";
}

export function ShareButtons({ title, url, className, variant = "floating" }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: "hover:bg-[#1877F2] hover:text-white",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: "hover:bg-[#1DA1F2] hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: "hover:bg-[#0A66C2] hover:text-white",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`,
      color: "hover:bg-[#25D366] hover:text-white",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copiado!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Erro ao copiar link");
    }
  };

  const handleShare = (href: string) => {
    window.open(href, "_blank", "width=600,height=400");
  };

  if (variant === "floating") {
    return (
      <aside className={cn("flex flex-col gap-4 sticky h-fit", className)}>
        {shareLinks.map((link) => (
          <Button
            key={link.name}
            variant="outline"
            size="icon"
            onClick={() => handleShare(link.href)}
            className={cn(
              "group rounded-full w-12 h-12 border-amavi-beige/20 bg-white transition-all shadow-sm",
              link.color
            )}
            title={`Partilhar no ${link.name}`}
          >
            <link.icon className="w-5 h-5" />
          </Button>
        ))}
        <div className="w-px h-12 bg-amavi-beige/20 mx-auto my-2" />
        <Button
          variant="outline"
          size="icon"
          onClick={copyToClipboard}
          className={cn(
            "group rounded-full w-12 h-12 border-amavi-beige/20 bg-white transition-all shadow-sm",
            copied ? "text-amavi-green border-amavi-green" : "hover:text-amavi-green"
          )}
          title="Copiar Link"
        >
          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
        </Button>
      </aside>
    );
  }

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {shareLinks.map((link) => (
        <Button
          key={link.name}
          variant="outline"
          size="icon"
          onClick={() => handleShare(link.href)}
          className={cn(
            "rounded-xl bg-white border-amavi-beige/20 transition-all",
            link.color
          )}
        >
          <link.icon className="w-4 h-4" />
        </Button>
      ))}
      <Button
        variant="outline"
        size="icon"
        onClick={copyToClipboard}
        className={cn(
          "rounded-xl bg-white border-amavi-beige/20 transition-all",
          copied ? "text-amavi-green border-amavi-green" : "hover:text-amavi-green"
        )}
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </Button>
    </div>
  );
}
