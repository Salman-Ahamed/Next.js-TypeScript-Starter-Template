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

export const TeamMember: FC<TProps> = (props) => {
  const { name, img, role, bio, social } = props;

  return (
    <div className="group relative transform transition-all duration-300 hover:-translate-y-1">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-20 group-hover:blur-none" />
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-600/30 to-purple-600/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />

      <div className="relative h-full rounded-xl border border-gray-800/30 bg-gradient-to-b from-gray-900/50 to-gray-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700/50 hover:shadow-lg hover:shadow-indigo-500/10">
        <div className="relative mx-auto mb-6 h-28 w-28">
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 blur-md transition-all duration-500 group-hover:opacity-70 group-hover:blur-sm" />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-gray-700/50 bg-gray-800">
            <Image
              src={img}
              alt={name}
              width={112}
              height={112}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="text-center">
          <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-100">{name}</h3>
          <p className="mb-3 text-sm font-medium text-indigo-400/90">{role}</p>
          <p className="mb-5 text-sm leading-relaxed text-gray-400/80">{bio}</p>
        </div>

        <div className="flex items-center justify-center space-x-3">
          {social.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-gray-400 transition-all hover:bg-gray-800 hover:text-indigo-300"
              aria-label={`${name}'s ${social.name}`}
            >
              {social.name === "Github" ? (
                <GitHubIcon className="h-5 w-5" />
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

        {/* Author Section - Enhanced and Prominent */}
        <div className="mx-auto mb-10 max-w-4xl">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-20 blur-lg transition-all duration-500 group-hover:opacity-30" />
            <div className="relative rounded-2xl border border-gray-800/50 bg-gradient-to-b from-gray-900/80 to-gray-900/50 p-8 backdrop-blur-sm">
              <div className="flex flex-col items-center md:flex-row md:space-x-8">
                <div className="relative mb-6 md:mb-0">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-70 blur-md" />
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-indigo-500/50">
                    <Image
                      src={author.img}
                      alt={author.name}
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="mb-2 text-3xl font-bold text-white">{author.name}</h3>
                  <p className="mb-4 text-xl font-medium text-indigo-400">{author.role}</p>
                  <p className="mb-6 text-gray-300">{author.bio}</p>
                  <div className="flex justify-center space-x-4 md:justify-start">
                    {author.social.map((social) => (
                      <a
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gray-800/50 p-3 text-gray-300 transition-all hover:bg-indigo-600/20 hover:text-indigo-300"
                        aria-label={`${author.name}'s ${social.name}`}
                      >
                        {social.name === "Github" ? (
                          <GitHubIcon className="h-6 w-6" />
                        ) : social.name === "Linkedin" ? (
                          <LinkedInIcon className="h-6 w-6" />
                        ) : (
                          <MailIcon className="h-6 w-6" />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid - More Compact and Centered */}
        <div className="mx-auto max-w-4xl">
          <h3 className="text-center text-xl font-bold">Our Amazing Team</h3>
          <div className="grid grid-cols-1 gap-6 pt-7 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="mx-auto w-full max-w-[280px] transform transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="group relative h-full transform transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-20 group-hover:blur-none" />
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-600/30 to-purple-600/30 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                  <div className="relative h-full rounded-xl border border-gray-800/30 bg-gradient-to-b from-gray-900/50 to-gray-900/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-gray-700/50 hover:shadow-lg hover:shadow-indigo-500/10">
                    <div className="relative mx-auto mb-4 h-20 w-20">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 blur-md transition-all duration-500 group-hover:opacity-70 group-hover:blur-sm" />
                      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-gray-700/50 bg-gray-800">
                        <Image
                          src={member.img}
                          alt={member.name}
                          width={80}
                          height={80}
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="mb-1 text-base font-bold tracking-tight text-gray-100">
                        {member.name}
                      </h3>
                      <p className="mb-2 text-xs font-medium text-indigo-400/90">{member.role}</p>
                      <p className="mb-3 text-xs leading-relaxed text-gray-400/80">{member.bio}</p>
                    </div>

                    <div className="flex items-center justify-center space-x-2">
                      {member.social.map((social) => (
                        <a
                          key={social.id}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full p-1.5 text-gray-400 transition-all hover:bg-gray-800 hover:text-indigo-300"
                          aria-label={`${member.name}'s ${social.name}`}
                        >
                          {social.name === "Github" ? (
                            <GitHubIcon className="h-4 w-4" />
                          ) : social.name === "Linkedin" ? (
                            <LinkedInIcon className="h-4 w-4" />
                          ) : (
                            <MailIcon className="h-4 w-4" />
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
