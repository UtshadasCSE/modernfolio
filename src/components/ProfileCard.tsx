import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/lib/config/site.config";
import { Button } from "./ui/button";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";

const ProfileCard = () => {
  return (
    <div className="lg:sticky lg:top-24">
      <Card className="">
        <CardHeader>
          <CardTitle className="font-semibold text-lg">
            {siteConfig.profile.name}
          </CardTitle>
          <CardDescription>{siteConfig.profile.about}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <Link href={siteConfig.social.githubHref}>
            <Button variant={"ghost"} className="rounded-full cursor-pointer">
              <FaGithub />
            </Button>
          </Link>
          <Link href={siteConfig.social.twitterHref}>
            <Button variant={"ghost"} className="rounded-full cursor-pointer">
              <FaXTwitter />
            </Button>
          </Link>
          <Link href={siteConfig.social.instagramHref}>
            <Button variant={"ghost"} className="rounded-full cursor-pointer">
              <FaInstagram />
            </Button>
          </Link>
          <Link href={siteConfig.social.linkedinHref}>
            <Button variant={"ghost"} className="rounded-full cursor-pointer">
              <FaLinkedin />
            </Button>
          </Link>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="flex justify-between w-full">
            <div>
              <h6 className="font-black">{siteConfig.profile.experience}</h6>
              <span className="text-[14px] text-[#808080]">Experience</span>
            </div>
            <div>
              <h6 className="font-black">{siteConfig.profile.location}</h6>
              <span className="text-[14px] text-[#808080]">Location</span>
            </div>
          </div>
          <Link
            href={"/"}
            className="w-full cursor-pointer"
            suppressHydrationWarning
          >
            <Button className="w-full cursor-pointer font-black">
              <FiCheckCircle className="" />
              Hire Me
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProfileCard;
