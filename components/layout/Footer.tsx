import { Logomark } from "@/components/layout/Logomark";
import { Footer7 } from "@/components/ui/footer-7";
import { navItems } from "@/lib/data/nav";
import { teamInfo } from "@/lib/data/social";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// Every existing page stays linked, just grouped into three columns.
const link = (label: string) => {
  const item = navItems.find((i) => i.label === label);
  if (!item) throw new Error(`Missing nav item: ${label}`);
  return { name: item.label, href: item.href };
};

const sections = [
  { title: "Explore", links: ["Home", "About", "Team", "Robot"].map(link) },
  {
    title: "Compete",
    links: ["Engineering", "Competitions", "Outreach", "Sponsors"].map(link),
  },
  { title: "More", links: ["Join Us", "News", "Gallery", "Contact"].map(link) },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Footer7
      logo={{
        url: "/",
        icon: <Logomark className="h-8 w-8 text-orange-500" />,
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
