import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ label, title, description, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl mb-16", centered ? "mx-auto text-center" : "", className)}>
      <Reveal width="100%">
        <span className="inline-block py-1 px-3 rounded-full bg-green-50 text-green-600 font-semibold text-sm tracking-wider uppercase mb-4 border border-green-200">
          {label}
        </span>
      </Reveal>
      
      <Reveal width="100%" delay={0.1}>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 tracking-tight">
          {title}
        </h2>
      </Reveal>
      
      {description && (
        <Reveal width="100%" delay={0.2}>
          <p className="text-lg text-slate-600 leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
