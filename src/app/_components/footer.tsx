"use client";

import Link from "next/link";

import { footerLinks } from "@/lib/db";

export const Footer = () => {
  const { quickLinks, resources, contact, privacy } = footerLinks;

  return (
    <footer className="-mt-1 border-t border-dotted border-gray-800 px-5 backdrop-blur-xs md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 py-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-100">Next TS App</h3>
            <p className="text-gray-400">
              The ultimate template for building modern web applications with Next.js and
              TypeScript.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-100">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors hover:text-indigo-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-100">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors hover:text-indigo-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-100">Contact</h3>
            <ul className="space-y-2">
              {contact.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors hover:text-indigo-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-dotted border-gray-800 py-3.5">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Next.js TypeScript Starter. All rights reserved.
            </p>
            <div className="mt-4 flex flex-wrap justify-center space-x-6 gap-y-2 md:mt-0">
              {privacy.map((link) => (
                <Link
                  key={link.id}
                  href={link.path}
                  className="text-sm text-gray-400 transition-colors hover:text-indigo-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
