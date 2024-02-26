import { Badge } from "@/components/ui/badge";

type WorkObject = {
  title: string;
  period: string;
  company: string;
  location: string;
  description: string;
  skills: string[];
};

const work: WorkObject[] = [
  {
    title: "Full Stack Developer",
    period: "Mar 2023 - Present",
    company: "01Node",
    location: "remote",
    description: "",
    skills: [
      "TypeScript",
      "Node.js",
      "React",
      "NextJS",
      "PostgreSQL",
      "Solidity",
      "Ethers.js",
      "Tailwind",
      "NestJS",
      "GoLang",
    ],
  },
  {
    title: "Full Stack Developer",
    period: "Jun 2022 - Mar 2023",
    company: "AltLayer",
    location: "remote",
    description: "",
    skills: [
      "TypeScript",
      "Node.js",
      "React",
      "NextJS",
      "MongoDB",
      "Solidity",
      "Ethers.js",
      "Tailwind",
    ],
  },
  {
    title: "Javascript Engineer",
    period: "Sep 2020 - Jun 2022",
    company: "Zilliqa",
    location: "remote",
    description: "",
    skills: [
      "CSS",
      "JavaScript",
      "VueJS",
      "React",
      "Node.js",
      "Ethers.js",
      "Solidity",
      "Scilla",
    ],
  },
  {
    title: "Full Stack Developer",
    period: "Jan 2019 - Sep 2020",
    company: "01Node",
    location: "Bucharest, Romania",
    description:
      "Developed internal tools to interact with different Tendermint based blockchains.",
    skills: ["CSS", "JavaScript", "Node.js", "React", "MongoDB", "Tendermint"],
  },
  {
    title: "Web Developer",
    period: "Feb 2015 - Sep 2020",
    company: "Fixmypc Romania",
    location: "Bucharest, Romania",
    description:
      "I was responsible for the development of the company's website and the development of the company's internal tools.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

const hotSkills = ["TypeScript", "NextJS", "Solidity", "Ethers.js", "GoLang"];

export default function Work() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="relative w-auto bg-gradient-to-br from-zinc-300 to-zinc-500 bg-clip-text py-4 text-6xl font-bold tracking-tight text-transparent">
        Work Experience
      </h1>

      <div className="flex max-w-4xl flex-col gap-8">
        {work.map((w) => (
          <div>
            <h2 className="text-2xl font-bold">{w.title}</h2>
            <div className="flex gap-2 text-xl">
              <span className="text-white">{w.company}</span>
              <span className="text-lg text-white/50">{w.location}</span>
            </div>
            <div className="text-white/50">{w.period}</div>
            <p className="mt-4 font-mono">{w.description}</p>

            <div className="mt-4 flex gap-2">
              {w.skills.map((s) => (
                <Badge
                  variant={hotSkills.includes(s) ? "default" : "secondary"}
                >
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
