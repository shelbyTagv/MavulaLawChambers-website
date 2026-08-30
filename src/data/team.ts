import type { TeamMember } from "../types";

const modules = import.meta.glob<{ default: TeamMember }>("/content/team/*.json", {
  eager: true,
});

export const teamMembers: TeamMember[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => a.id - b.id);
