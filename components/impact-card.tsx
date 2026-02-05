import { LucideIcon } from 'lucide-react';

interface ImpactCardProps {
  number: string;
  label: string;
  icon: LucideIcon;
  description?: string;
}

export function ImpactCard({ number, label, icon: Icon, description }: ImpactCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-amavi-beige/20 hover:shadow-md transition-shadow group h-full">
      <div className="w-12 h-12 bg-amavi-green/10 rounded-xl flex items-center justify-center mb-5 transition-colors group-hover:bg-amavi-green/20">
        <Icon className="w-6 h-6 text-amavi-green" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-amavi-brown mb-2 font-outfit tracking-tight">{number}</div>
      <div className="font-bold text-amavi-green mb-2 text-sm md:text-base leading-tight">{label}</div>
      {description && (
        <p className="text-xs md:text-sm text-amavi-brown/60 leading-relaxed line-clamp-2">{description}</p>
      )}
    </div>
  );
}
