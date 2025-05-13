"use client";

import Image from "next/image";
import { FC } from "react";

import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

import { author, teamMembers } from "@/lib/db";

type TSocial = { id: string; name: string; link: string };
type TProps = {
  name: string;
  img: string;
  role: string;
  bio: string;
  social: TSocial[];
};

const renderSocialIcon = (socialName: string, size: "sm" | "md" = "md") => {
  const iconSize = size === "sm" ? "h-5 w-5" : "h-6 w-6";
  switch (socialName.toLowerCase()) {
    case "github":
      return (
        <GitHubIcon
          className={`${iconSize} transition-transform duration-300 group-hover/social:scale-110`}
        />
      );
    case "linkedin":
      return (
        <LinkedInIcon
          className={`${iconSize} transition-transform duration-300 group-hover/social:scale-110`}
        />
      );
    case "email":
    case "mail":
      return (
        <MailIcon
          className={`${iconSize} transition-transform duration-300 group-hover/social:scale-110`}
        />
      );
    default:
      return null;
  }
};

const TeamMember: FC<TProps> = (props) => {
  const { name, img, role, bio, social } = props;

  return (
    <div className="group relative h-full transform transition-all duration-300 hover:-translate-y-1">
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-20 group-hover:blur-none" />
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-600/30 to-purple-600/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />

      <div className="relative h-full rounded-xl border border-gray-800/30 bg-gradient-to-b from-gray-900/50 to-gray-900/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-gray-700/50 hover:shadow-lg hover:shadow-indigo-500/10">
        <div className="flex flex-col items-center">
          <div className="relative mb-3 h-20 w-20">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 blur-md transition-all duration-500 group-hover:opacity-70 group-hover:blur-sm" />
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-gray-700/50 bg-gray-800 transition-all duration-500 group-hover:border-indigo-400/70">
              <Image
                src={img}
                alt={name}
                width={80}
                height={80}
                className="transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="w-full text-center">
            <div className="mb-1.5 inline-block rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-300/90 backdrop-blur-sm transition-all duration-300 group-hover:bg-indigo-500/20 group-hover:text-indigo-200">
              {role}
            </div>
            <h3 className="mb-1.5 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-base font-bold tracking-tight text-transparent transition-all duration-300 group-hover:from-white group-hover:via-indigo-100 group-hover:to-purple-100">
              {name}
            </h3>
            <p className="mb-3 line-clamp-3 text-xs leading-relaxed text-gray-400/80 transition-colors duration-300 group-hover:text-gray-300">
              {bio}
            </p>
            <div className="flex items-center justify-center space-x-2">
              {social.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social relative rounded-full bg-gray-800/50 p-2 text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-indigo-600/20 hover:text-indigo-300 hover:shadow-lg hover:shadow-indigo-500/20"
                  aria-label={`${name}'s ${social.name}`}
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-600/0 to-purple-600/0 opacity-0 transition-all duration-300 group-hover/social:opacity-100" />
                  {renderSocialIcon(social.name, "sm")}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TeamMembers = () => {
  return (
    <section className="relative z-10 border-y border-gray-800/50 bg-gradient-to-b from-gray-900/50 via-gray-900/70 to-gray-900/50 py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <h2 className="mb-6 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg leading-relaxed text-gray-400">
            Our team of experienced developers and engineers are dedicated to creating exceptional
            developer experiences and building scalable applications that drive innovation.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="group relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-20 blur-lg transition-all duration-500 group-hover:opacity-30" />
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 opacity-0 blur transition-all duration-500 group-hover:opacity-100" />
            <div className="relative rounded-xl border border-gray-800/50 bg-gradient-to-b from-gray-900/80 to-gray-900/50 p-6 backdrop-blur-sm">
              <div className="flex flex-col items-center md:flex-row md:space-x-6">
                <div className="relative mb-6 md:mb-0">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-70 blur-md transition-all duration-500 group-hover:opacity-90 group-hover:blur-lg" />
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-indigo-500/50 transition-all duration-500 group-hover:border-indigo-400/70">
                    <Image
                      src={author.img}
                      alt={author.name}
                      width={128}
                      height={128}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-2 inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300/90 backdrop-blur-sm transition-all duration-300 group-hover:bg-indigo-500/20 group-hover:text-indigo-200">
                    Lead Developer
                  </div>
                  <h3 className="mb-2 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-3xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:from-white group-hover:via-indigo-100 group-hover:to-purple-100">
                    {author.name}
                  </h3>
                  <p className="mb-3 text-lg font-medium text-indigo-400/90 transition-colors duration-300 group-hover:text-indigo-300">
                    {author.role}
                  </p>
                  <p className="mb-5 text-base leading-relaxed text-gray-300/90 transition-colors duration-300 group-hover:text-gray-200">
                    {author.bio}
                  </p>
                  <div className="flex justify-center space-x-4 md:justify-start">
                    {author.social.map((social) => (
                      <a
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social relative rounded-full bg-gray-800/50 p-2.5 text-gray-300 transition-all duration-300 hover:scale-110 hover:bg-indigo-600/20 hover:text-indigo-300 hover:shadow-lg hover:shadow-indigo-500/20"
                        aria-label={`${author.name}'s ${social.name}`}
                      >
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-600/0 to-purple-600/0 opacity-0 transition-all duration-300 group-hover/social:opacity-100" />
                        {renderSocialIcon(social.name, "md")}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <div key={i} className="w-full">
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
