import { InfiniteMovingSkills } from "./ui/infinite-moving-skills";

export default function Skills() {
  return (
    <div>
      <div className="dark:bg-grid-white/[0.05] relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-black">
        <InfiniteMovingSkills
          items={[
            "CSS",
            "Solidity",
            "JavaScript",
            "Docker",
            "TypeScript",
            "SQL",
            "GoLang",
            "Tailwind",
          ]}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingSkills
          items={[
            "React",
            "wagmi",
            "Framer Motion",
            "NextJS",
            "NodeJS",
            "Ethers.js",
            "NestJS",
            "viem",
            "Vue",
            "PostgreSQL",
          ]}
          direction="left"
          speed="normal"
        />
      </div>
    </div>
  );
}
