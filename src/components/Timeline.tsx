import { Experience } from "@/lib/schemas";
import TimelineItem from "./TimelineItem";
import { Card, CardContent } from "./ui/Card";

interface Props {
  experience: Experience[];
}

export default function Timeline({ experience }: Props) {
  return (
    <Card>
      <CardContent className="p-0">
        <ul className="ml-10 border-l">
          {experience.map((exp) => (
            <TimelineItem key={exp.name} experience={exp} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
