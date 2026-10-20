import ThemeToggle from "@/components/ThemeToggle";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4 p-8">
      <ThemeToggle />
      <h1 className="title">hi, I&apos;m Santiago.</h1>
      <p className="text-muted-foreground">muted text</p>
      <div className="flex gap-2">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>CoogMusic</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Badge>React</Badge>
          <Badge variant="secondary">PostgreSQL</Badge>
          <Badge variant="outline">TypeScript</Badge>
        </CardContent>
      </Card>
    </div>
  );
}
