"use client";

import React from "react";
import { Card, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 5 projects",
      "Basic analytics dashboard",
      "Email support",
      "1 GB storage",
      "Community access",
      "Monthly updates",
      "Standard API rate limits",
      "Basic integrations",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "Ideal for growing teams and businesses",
    features: [
      "Unlimited projects",
      "Advanced analytics & reporting",
      "Priority email & chat support",
      "100 GB storage",
      "Team collaboration tools",
      "Weekly updates",
      "Enhanced API rate limits",
      "Premium integrations",
      "Custom workflows",
      "Advanced security features",
      "Version control integration",
      "Staging environment",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations and enterprises",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "24/7 phone & priority support",
      "Unlimited storage",
      "Advanced team management",
      "Daily updates & patches",
      "Unlimited API rate limits",
      "Custom integrations",
      "Advanced automation workflows",
      "Enterprise-grade security",
      "SSO & SAML authentication",
      "On-premise deployment options",
      "Custom SLA agreements",
    ],
    cta: "Contact Sales",
  },
];

export default function PricingTable() {
  return (
    <div className="w-full py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your needs. Scale as you grow.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col p-6 rounded-lg transition-all duration-300 ${
                tier.highlight
                  ? "border-primary shadow-lg scale-105"
                  : "hover:shadow-md"
              }`}
            >
              {/* Recommended Badge */}
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Recommended
                  </span>
                </div>
              )}

              {/* Tier Header */}
              <div className="mb-6">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {tier.name}
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  {tier.description}
                </CardDescription>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-muted-foreground">{tier.period}</span>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full mb-6 ${
                  tier.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                }`}
              >
                {tier.cta}
              </Button>

              {/* Features List */}
              <div className="space-y-3 flex-1">
                {tier.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}