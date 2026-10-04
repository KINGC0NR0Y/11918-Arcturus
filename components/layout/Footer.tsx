import { Logomark } from "@/components/layout/Logomark";
import { Footer7 } from "@/components/ui/footer-7";
import { navItems } from "@/lib/data/nav";
import { teamInfo } from "@/lib/data/social";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const parent = (label: string) => {
  const item = navItems.find((i) => i.label === label);
  if (!item?.sections) throw new Error(`Missing nav item: ${label}`);
  return { title: item.label, links: item.sections.map((c) => ({ name: c.label, href: c.href })) };
};

const sections = [
  {
    title: "Explore",
    links: [
      { name: "Home", href: "/" },
      { name: "Team", href: "/team" },
    ],
  },
  parent("Robot"),
  parent("Engineering"),
  parent("Journey"),
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Footer7
      logo={{
        url: "/",
        icon: <Logomark className="h-10 w-10" />,
        title: <>ARCTURUS #{teamInfo.number}</>,
      }}
      description={
        <>
          <p className="font-mono-tech text-xs uppercase tracking-[0.3em] text-orange-400">
            {teamInfo.tagline}
          </p>
          <p className="mt-3">
            {teamInfo.school} &middot; {teamInfo.city}
          </p>
        </>
      }
      socialLinks={[
        { icon: <FaTwitter className="size-5" />, href: teamInfo.x.url, label: "Twitter" },
        { icon: <SiGmail className="size-5" />, href: `mailto:${teamInfo.email}`, label: "Gmail" },
        { icon: <FaInstagram className="size-5" />, href: teamInfo.instagram.url, label: "Instagram" },
      ]}
      sections={sections}
      copyright={`© ${year} ARCTURUS #${teamInfo.number}. All rights reserved.`}
      note="Built by the students of ARCTURUS."
    />
  );
}
