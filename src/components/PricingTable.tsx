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
    price: "$29",
    description: "Perfect for beginners",
    features: [
      "5 projects",
      "10 GB storage",
      "Basic analytics",
      "Email support",
      "Community access",
      "Monthly updates",
      "API access",
      "1 team member",
    ],
  },
  {
    name: "Professional",
    price: "$99",
    description: "For growing teams",
    features: [
      "50 projects",
      "100 GB storage",
      "Advanced analytics",
      "Priority email support",
      "Community access",
      "Weekly updates",
      "API access",
      "10 team members",
      "Custom integrations",
      "Advanced security",
      "Export options",
      "Dedicated manager",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "$299",
    description: "For large organizations",
    features: [
      "Unlimited projects",
      "Unlimited storage",
      "Real-time analytics",
      "24/7 phone support",
      "Priority community",
      "Daily updates",
      "Full API access",
      "Unlimited team members",
      "Custom integrations",
      "Enterprise security",
      "Advanced export",
      "Dedicated team",
      "SLA guarantee",
    ],
  },
]

const PricingTable = () => {
  return (
    <div className="w-full">
      <h2 className="font-black text-xl pb-3">Pricing Plans</h2>

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

              <Button className="w-full mb-6" variant={tier.isPopular ? "default" : "outline"}>
                Get Started
              </Button>

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
