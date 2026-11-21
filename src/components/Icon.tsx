import {
  ExternalLink,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  type LucideProps,
} from "lucide-react";

// Static imports keep the bundle small and avoid compiling lucide's
// full dynamic icon index, which made dev builds slow.
const icons = {
  github: Github,
  linkedin: Linkedin,
  "file-text": FileText,
  mail: Mail,
  globe: Globe,
  "external-link": ExternalLink,
};

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof icons;
}

export default function Icon({ name, ...props }: IconProps) {
  const LucideIcon = icons[name] ?? ExternalLink;
  return <LucideIcon {...props} />;
}
