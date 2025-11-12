import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "How can I reduce fuel consumption in my trucking fleet without affecting delivery schedules?",
    answer: "Fleet managers face a daily balancing act — reduce expenses without delaying deliveries. Trucker Pro's AI is designed exactly for this challenge. By analyzing traffic, gradients, stop density, and rest timings, our system builds routes that keep wheels moving while minimizing idle time and unnecessary detours.",
    details: [
      "AI Route Optimization: Reduces idle hours by mapping the most fuel-efficient sequence of deliveries.",
      "Zone Grouping: Automatically clusters nearby deliveries to shorten mileage.",
      "Predictive Traffic Modeling: Uses live data to forecast high-congestion zones and recommend departure windows.",
      "Driver Pattern Analysis: Tracks acceleration, braking, and rest patterns to improve on-road efficiency."
    ],
    result: "Fleets using Trucker Pro report 4–9% monthly fuel savings while maintaining on-time performance."
  },
  {
    id: "item-2",
    question: "What are the best AI or GPS tools for optimizing truck routes and saving fuel?",
    answer: "Route optimization is the most immediate and measurable way to save fuel. Traditional GPS apps can't account for real-time diesel prices, road topography, or your preferred fuel networks — but Trucker Pro can.",
    details: [
      "Real-Time Route Analytics: Evaluates thousands of potential routes every few seconds using live data on traffic, tolls, weather, and slope.",
      "Integrated Fuel Network: Works only with your company's partnered stations (e.g., Pilot, Love's, TA) to ensure compliance and discounts.",
      "Smart Refueling Insights: Suggests when and where to refuel along a route for the lowest effective cost per mile."
    ],
    result: "Our AI merges Google route accuracy with custom telematics intelligence, ensuring every recommendation is realistic, compliant, and cost-driven."
  },
  {
    id: "item-3",
    question: "Which driving habits have the biggest impact on truck fuel economy?",
    answer: "Up to 25% of fuel waste comes from poor driving behavior — harsh acceleration, excess idling, or inconsistent speed control. Trucker Pro integrates driver performance analytics directly into its dashboard to make every driver more fuel-smart.",
    details: [
      "Telematics-Based Tracking: Detects harsh braking, idling duration, and aggressive acceleration.",
      "Eco-Driving Insights: AI converts raw data into personalized recommendations for each driver.",
      "Gamified Feedback: Helps drivers monitor weekly improvement and earn incentives for efficient performance."
    ],
    result: "Future Upgrade: Advanced driver coaching using LLM-based conversational feedback — turning every truck cab into a smart coach."
  },
  {
    id: "item-4",
    question: "How much can fuel-efficient tires or regular maintenance actually save per truck per month?",
    answer: "Many fleet managers underestimate how small mechanical factors — tire pressure, filter cleanliness, or wheel alignment — affect overall fuel burn. Trucker Pro is developing a Predictive Maintenance Advisory system that quantifies these savings in advance.",
    details: [
      "Tire & Engine Monitoring: Tracks rolling resistance, tire wear, and air filter health.",
      "Automated Service Reminders: Schedules maintenance tasks that deliver the highest fuel ROI.",
      "Upgrade ROI Calculator: Compares long-term cost savings of aerodynamic upgrades or tire replacements using real fleet data."
    ],
    result: "Preventive maintenance directly increases MPG and prolongs truck life — lowering both short-term fuel bills and long-term asset depreciation."
  },
  {
    id: "item-5",
    question: "Can AI predict the cheapest fuel stops on a route for long-haul trucks?",
    answer: "Fuel prices vary up to 15% between truck stops. A smart fueling strategy can transform your operating budget. Trucker Pro's Dynamic Fueling Algorithm solves this by combining route data + live fuel prices + truck tank capacity.",
    details: [
      "Real-Time Fuel Price Mapping: Analyzes live data from your preferred networks (Pilot, Love's, TA, etc.).",
      "Optimal Stop Identification: Chooses the best stops and fill volumes based on distance, fuel rates, and tank size.",
      "Predictive Price Forecasting: Uses historical and live market data to anticipate upcoming fuel price changes."
    ],
    result: "Example: On a 1,500-mile Chicago–Dallas trip, Trucker Pro's system can save up to $120–$150 per truck simply by optimizing stop selection and fill volume."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://thetruckerpro.com/faq#page",
  "url": "https://thetruckerpro.com/faq",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer + " " + faq.details.join(" ") + " " + faq.result
    }
  }))
};

export default function FAQ() {
  return (
    <>
      <SchemaMarkup type="policy" policyUrl="/faq" policyTitle="Trucker Pro – FAQ" />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <meta name="description" content="Frequently Asked Questions about The Trucker Pro - Learn how our AI-powered fuel optimization helps fleets save 4-9% on fuel costs monthly." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground fade-in">
          Frequently Asked Questions
        </h1>
        
        <Accordion type="single" collapsible className="w-full fade-in">
          {faqData.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-b border-border">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <h2 className="text-xl font-bold text-foreground pr-4">
                  {faq.question}
                </h2>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                  
                  {faq.details && faq.details.length > 0 && (
                    <div className="bg-muted p-6 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-3">Trucker Pro's Approach:</h3>
                      <ul className="space-y-2">
                        {faq.details.map((detail, index) => (
                          <li key={index} className="text-muted-foreground">
                            <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {faq.result && (
                    <div className="bg-green-50 dark:bg-green-950 border-l-4 border-green-500 p-4 mt-4">
                      <p className="text-muted-foreground font-semibold">
                        {faq.result.startsWith('✅') || faq.result.startsWith('🚛') || faq.result.startsWith('⚙️') || faq.result.startsWith('🔧') || faq.result.startsWith('📈') ? faq.result : `✅ ${faq.result}`}
                      </p>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
