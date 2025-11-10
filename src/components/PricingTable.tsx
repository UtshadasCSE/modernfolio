"use client"
import { Card } from "./ui/card"
import { Check } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
}

const pricingData: PricingTier[] = [
  {
    name: "Starter",
    price: "$40",
    description: "Branded One-Product Store or landing page website",
    features: [
      "2 Pages Website",
      "Fully Functional",
      "Responsive Design",
      "Content Management",
      "SEO-Friendly",
      "User-Friendly Layout",
      "Work until your satisfaction",
      "30 days ongoing support",
    ],
  },
  {
    name: "Professional",
    price: "$130",
    description: "Fully Branded Store with 20 Products or 5 pages webiste",
    features: [
      "5 Pages Website",
      "Responsive Design",
      "Content Upload",
      "5 Plugins or Extensions",
      "SEO Optimization",
      "Social Media Integration",
      "Unlimited Revisions",
      "Work until your satisfaction",
      "30 days ongoing support",
   
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "$200",
    description: "Powerful Store with 50 Products or 8 pages website",
    features: [
      "8 Pages Website",
      "Responsive Design",
      "Content Upload",
      "Content Management",
      "6 Plugins or Extensions",
      "SEO Optimization",
      "Custom integrations",
      "Social Media Integration",
      "Unlimited Revisions",
      "Work Until Your Satisfaction",
      "30 days ongoing support",
    ],
  },
]

const PricingTable = () => {
   const fiverLink = "https://www.fiverr.com/utsha_dev"
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {pricingData.map((tier) => (
          <div
            key={tier.name}
            className={`transition-all duration-300 ${tier.isPopular ? "md:scale-105 md:shadow-lg" : ""}`}
          >
            <Card
              className={`h-full flex flex-col p-4 md:p-6 ${tier.isPopular ? "ring-2 ring-primary bg-muted/50" : ""}`}
            >
              <div className="mb-4">
                <h3 className="text-base font-bold">{tier.name}</h3>
                {tier.isPopular && (
                  <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-primary text-primary-foreground mt-2">
                    Most Popular
                  </span>
                )}
              </div>

              <div className="mb-4">
                <div className="text-[14px] text-muted-foreground">{tier.description}</div>
                <div className="text-xl font-bold my-2">{tier.price}</div>
              </div>

                <Link href={fiverLink} target="_blank" rel="noopener noreferrer" className="w-full mb-6">
                <Button className="w-full" variant={tier.isPopular ? "default" : "outline"}>
                  Get Started
                </Button>
              </Link>

              <div className="flex-1">
                <p className="text-sm font-semibold mb-4 text-muted-foreground">Includes:</p>
                <div className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PricingTable
