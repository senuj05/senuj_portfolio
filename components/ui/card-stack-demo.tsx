"use client";

import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} offset={12} scaleFactor={0.05} />
    </div>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-[#53232A]/10 text-[#53232A] px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Cards with Hearts",
    designation: "Product Design · Dev",
    content: (
      <p>
        A playful design blending digital and tactile experiences.{" "}
        <Highlight>Cards with Hearts</Highlight> reimagines connection through
        thoughtful product design.
      </p>
    ),
  },
  {
    id: 1,
    name: "Smart Resume Matcher",
    designation: "Dev · WebApp",
    content: (
      <p>
        Matching candidates to opportunities with{" "}
        <Highlight>intelligent algorithms</Highlight>. Built for efficiency and
        better hiring decisions.
      </p>
    ),
  },
  {
    id: 2,
    name: "Master Chef",
    designation: "Dev · WebApp",
    content: (
      <p>
        A culinary companion app. <Highlight>Recipe discovery</Highlight> and
        meal planning made simple and delightful.
      </p>
    ),
  },
  {
    id: 3,
    name: "Illini Safe",
    designation: "Data Analysis · Visualization",
    content: (
      <p>
        Campus safety through data. <Highlight>Visual analytics</Highlight> that
        help keep communities informed and secure.
      </p>
    ),
  },
  {
    id: 4,
    name: "Re-Fabric",
    designation: "UI/UX · Product",
    content: (
      <p>
        Reimagining sustainable fashion. <Highlight>Re-Fabric</Highlight> brings
        circular design to the forefront of product experience.
      </p>
    ),
  },
];
