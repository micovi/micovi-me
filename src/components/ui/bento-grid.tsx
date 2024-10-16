import { cn } from "@/lib/utils";
import { Badge } from "./badge";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  skills,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  skills?: string[];
  link?: string;
}) => {
  return (
    <a
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="h-28">{header}</div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="font-anta mb-2 mt-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-lg font-bold text-neutral-600 dark:text-neutral-200">
          {title}

          <div className="flex flex-wrap gap-2">
            {skills?.map((skill) => (
              <Badge variant={"secondary"} key={skill}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="font-mono text-sm font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </a>
  );
};
