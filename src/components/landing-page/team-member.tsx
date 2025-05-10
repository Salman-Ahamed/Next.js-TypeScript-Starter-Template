import Image from "next/image";

import { GitHubIcon, LinkedInIcon, MailIcon } from "@/icons";
import { teamMembers } from "@/lib";

type TProps = {
  member: {
    name: string;
    img: string;
    role: string;
    bio: string;
    social: {
      id: string;
      name: string;
      link: string;
    }[];
  };
};

export const TeamMember = ({ member }: TProps) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-20 group-hover:blur-none" />
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-600/30 to-purple-600/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />

      <div className="relative h-full rounded-xl border border-gray-800/30 bg-gradient-to-b from-gray-900/50 to-gray-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700/50 hover:shadow-lg hover:shadow-indigo-500/10">
        <div className="relative mx-auto mb-4 h-24 w-24">
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 blur-md transition-all duration-500 group-hover:opacity-70 group-hover:blur-sm" />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-gray-700/50 bg-gray-800">
            <Image
              src={member.img}
              alt={member.name}
              width={96}
              height={96}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="text-center">
          <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-100">{member.name}</h3>
          <p className="mb-3 text-sm font-medium text-indigo-400/90">{member.role}</p>
          <p className="mb-5 text-sm leading-relaxed text-gray-400/80">{member.bio}</p>
        </div>

        <div className="flex items-center justify-center space-x-2">
          {member.social.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-gray-400 transition-all hover:bg-gray-800 hover:text-indigo-300"
              aria-label={`${member.name}'s ${social.name}`}
            >
              {social.name === "Github" ? (
                <GitHubIcon className="h-6 w-6" />
              ) : social.name === "Linkedin" ? (
                <LinkedInIcon className="h-5 w-5" />
              ) : (
                <MailIcon className="h-5 w-5" />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export const TeamMembers = () => {
  return (
    <section className="relative z-10 border-y border-gray-800/50 bg-gray-900/50 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Meet The Team</h2>
          <p className="text-gray-400">The talented developers behind this project</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
