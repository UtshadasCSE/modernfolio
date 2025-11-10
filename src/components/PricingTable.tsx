"use client"
import { Card } from "./ui/card"
import { Check } from "lucide-react"
import { Button } from "./ui/button"

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
    description: "Branded One-Product Store + Premium Theme + Winning Product Research + Custom Logo for Shopify, WordPress, HubSpot & Wix",
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
    description: "Get a fully branded store on Shopify, WordPress, HubSpot, or Wix with 20 winning products, premium design, and a high-converting layout.",
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
    description: "Get a powerful store on Shopify, WordPress, HubSpot, or Wix with 50 researched products, custom branding, SEO, and app/plugin integrations.",
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
                <h3 className="text-lg font-bold">{tier.name}</h3>
                {tier.isPopular && (
                  <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-primary text-primary-foreground mt-2">
                    Most Popular
                  </span>
                )}
              </div>

              <div className="mb-4">
                <div className="text-base text-muted-foreground">{tier.description}</div>
                <div className="text-4xl font-bold my-2">{tier.price}</div>
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
