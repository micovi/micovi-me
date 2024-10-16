import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

function StakingSkeleton({
  image,
  fit = "cover",
}: {
  image: string;
  fit?: "cover" | "contain";
}) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={`/${image}.png`}
        alt="project screenshot"
        fill={true}
        className="rounded-xl"
        style={{ objectFit: fit }}
      />
    </div>
  );
}

export function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="relative w-auto bg-gradient-to-br from-zinc-300 to-zinc-500 bg-clip-text py-4 text-6xl font-bold tracking-tight text-transparent">
        Projects I worked on
      </h1>
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={item.title}
            title={item.title}
            description={item.description}
            header={item.header}
            skills={item.skills}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            link={item.link}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "CoinMaker",
    description:
      "Create and list a coin on AO Network in minutes. Deploy Liquidity Pools and Lock Liquidity with ease.",
    link: "https://coin.arweave.net/",
    header: <StakingSkeleton image="coinmaker" fit="cover" />,
    skills: ["React", "Lua", "Arweave"],
  },
  {
    title: "TockenLocker",

    description:
      "TokenLocker is a process that can take up any Token and hold it for an amount of time defined by the user that sends them.",
    header: <StakingSkeleton image="tokenlocker" fit="cover" />,
    skills: ["Lua", "Arweave", "AO"],
  },
  {
    title: "create-ao-dapp",
    description:
      "Effortlessly launch your fullstack permadApp with one command and unlock limitless potential of AO and Arweave",
      link: "https://create-ao-dapp.arweave.net/",
    header: <StakingSkeleton image="create-ao-dapp" fit="cover" />,
    skills: ["CLI", "AO"],
  },
  {
    title: "Faucetino",
    description:
      "Welcome to the ultimate faucet service, your one-stop destination for testnet tokens across multiple blockchains. Dive into testing without the wait.",
    link: "https://faucetino.01node.com/",
    header: <StakingSkeleton image="faucetinos" fit="cover" />,
    slug: "faucetino",
    skills: ["Design", "NextJS", "TypeScript", "NestJS", "Solidity"],
  },
  {
    title: "e-Staking",
    description:
      "Powered by Obol, our DVT clusters enhance security, setting new standards in blockchain reliability.",
    header: <StakingSkeleton image="enterprise-staking" fit="cover" />,
    skills: ["NextJS", "Solidity"],
  },
  {
    title: "Vanity Forge",
    description:
      "VanityForge is a powerful CLI tool designed for generating Tendermint Chains vanity addresses with efficiency and ease.",
    header: <StakingSkeleton image="vanity-forge" fit="cover" />,
    link: "https://github.com/01node/vanity-forge",
    slug: "vanity-forge",
    skills: ["Go", "Tendermint", "CLI"],
  },
  {
    title: "Staking.01node.com",
    description:
      "Stake Ethereum, Secure the future, Earn Rewards - All in one platform. Staking pool uses the innovative SSV technology to ensure that your Ethereum is always safe and that you earn maximum rewards.",
    link: "https://staking.01node.com/",
    header: <StakingSkeleton image="staking" fit="cover" />,
    skills: ["Design", "NextJS", "Go", "Solidity", "TypeScript"],
  },
  {
    title: "dYdX Bridge",
    description:
      "dApp for easy bridging dYdX tokens from Ethereum to mainnet. Interacts with dYdX smart contracts.",
    header: <StakingSkeleton image="dydx-bridge" fit="contain" />,
    skills: ["NextJS", "Solidity"],
  },
  {
    title: "Ceres",
    description:
      "Ceres is a one-stop local development application for developers looking to build on top of Zilliqa.",
    header: <StakingSkeleton image="ceres" fit="cover" />,
    skills: ["Vue", "TypeScript", "Docker"],
  },
  {
    title: "iykyk",
    description: "Tendermint React Hooks for easy blockchain integration.",
    header: <StakingSkeleton image="iykyk" fit="cover" />,
    skills: ["TypeScript", "React"],
  },
  {
    title: "ZILCLI",
    description: "Command Line Interface for Zilliqa Network blockchain.",
    header: <StakingSkeleton image="zilcli" fit="contain" />,
    skills: ["TypeScript", "Zilliqa", "CLI"],
  },
  {
    title: "Savant IDE",
    description:
      "Neo Savant IDE is a web-based development environment that allows you to interact with the simulated testnet environment.",
    header: <StakingSkeleton image="savant-ide" fit="cover" />,
    skills: ["TypeScript", "Vue"],
  },
  {
    title: "Zilliqa Multisig",
    description:
      "Zilliqa Multisig Wallet is a web interface to interact with Zilliqa's multisig smart contract.",
    header: <StakingSkeleton image="multisig" fit="cover" />,
    skills: ["Vue", "Ledger"],
  },
];
