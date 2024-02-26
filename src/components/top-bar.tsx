import Image from "next/image";
import Link from "next/link";

type NavigationLink = {
  link: string;
  title: string;
  external?: boolean;
};

const navigation: NavigationLink[] = [
  {
    link: "https://github.com/micovi",
    title: "/GitHub",
    external: true,
  },
  {
    link: "https://www.linkedin.com/in/micovi/",
    title: "/LinkedIn",
    external: true,
  },
  {
    link: "mailto:micleaovidiul@gmail.com",
    title: "/Contact",
    external: false,
  },
];

export default function TopBar() {
  return (
    <div className="z-10 w-full  items-center justify-between font-mono text-sm lg:flex">
      <div className="font-anta flex items-center gap-4 text-xl font-medium">
        <Image
          src="/profile-photo.jpeg"
          alt="Profile Photo"
          width={42}
          height={42}
          className="rounded-full"
        />
        micovi
      </div>
      {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200  lg:p-4 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30">
         Get started by editing&nbsp;
         <code className="font-mono font-bold">src/app/page.tsx</code>
       </p> */}
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center gap-8 bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none dark:from-black dark:via-black">
        {navigation.map((item) => (
          <Link
            href={item.link}
            key={item.title}
            target={item.external ? "_blank" : "_self"}
            className="text-md hover:text-primary font-mono"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
