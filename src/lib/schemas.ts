import { z } from "zod";

const linkSchema = z.object({
  name: z.string(),
  href: z.string(),
  icon: z.string(),
});

const positionSchema = z.object({
  title: z.string(),
  start: z.string(),
  end: z.string().optional(),
  description: z.array(z.string()).optional(),
  links: z.array(linkSchema).optional(),
});

const experienceSchema = z.object({
  name: z.string(),
  href: z.string(),
  logo: z.string().optional(),
  positions: z.array(positionSchema),
});

export const careerSchema = z.object({ career: z.array(experienceSchema) });
export const educationSchema = z.object({
  education: z.array(experienceSchema),
});

const projectSchemaItem = z.object({
  name: z.string(),
  description: z.string(),
  href: z.string().optional(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
  links: z.array(linkSchema).optional(),
});

export const projectSchema = z.object({ projects: z.array(projectSchemaItem) });
export const socialSchema = z.object({ socials: z.array(linkSchema) });

export type Experience = z.infer<typeof experienceSchema>;
export type Project = z.infer<typeof projectSchemaItem>;
