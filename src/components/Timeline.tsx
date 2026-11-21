import { Experience } from "@/lib/schemas";
import TimelineItem from "./TimelineItem";

interface Props {
  experience: Experience[];
}

export default function Timeline({ experience }: Props) {
  return (
    <ul className="flex flex-col divide-y border-y">
      {experience.map((exp) => (
        <TimelineItem key={exp.name} experience={exp} />
      ))}
    </ul>
  );
}
