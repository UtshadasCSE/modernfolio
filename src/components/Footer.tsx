import React from "react";
import { Card, CardTitle } from "./ui/card";
import { siteConfig } from "@/lib/config/site.config";
import Link from "next/link";

const Footer = () => {
  return (
    <div id="contact">
      <Card className="p-3">
        <CardTitle className="text-muted-foreground text-sm font-light text-center">
          Best way to reach me is through:
          <Link
            href={siteConfig.contact.emailHref}
            className="cursor-pointer hover:underline"
          >
            {siteConfig.contact.email}
          </Link>
        </CardTitle>
      </Card>
    </div>
  );
};

export default Footer;
