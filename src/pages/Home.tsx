import { DollarSign, Map, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import heroImage from "@/assets/hero-bg.webp";

export default function Home() {
  return (
    <>
      <SchemaMarkup type="home" />
      
      {/* Hero Section */}
      <section
        className="relative h-[500px] md:h-[600px] bg-cover bg-center flex items-center justify-center fade-in"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Saving Fuel, Every Mile.
          </h1>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose The Trucker Pro?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="fade-in border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Up to 9% Fuel Savings Monthly
                </h3>
                <p className="text-muted-foreground">
                  Verified results with AI-powered optimization reducing your fleet's fuel expenses significantly.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in border-2 hover:shadow-lg transition-shadow" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Map className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Optimized Routes Powered by AI
                </h3>
                <p className="text-muted-foreground">
                  Intelligent routing using real-time traffic, weather, and topography data for maximum efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in border-2 hover:shadow-lg transition-shadow" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Predictive Maintenance & Smart Insights
                </h3>
                <p className="text-muted-foreground">
                  Real-time fleet analytics and driver insights through our easy-to-use mobile app.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            About Trucker Pro: Fueling the Future of Fleet Operations
          </h2>

          <div className="space-y-8 text-foreground">
            {/* Mission */}
            <div className="fade-in">
              <h3 className="text-2xl font-bold mb-3 text-primary">
                1. Our Mission: Transforming Efficiency and Profitability
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Transform truck-fleet efficiency and profitability through intelligent technology. 
                Every mile optimized, every drop of fuel saved.
              </p>
            </div>

            {/* Who We Are */}
            <div className="fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                2. Who We Are: Specialized in Fleet Profitability
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 font-semibold bg-muted">Company Name</td>
                      <td className="p-4">Trucker Pro Pvt. Ltd.</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-semibold bg-muted">Location</td>
                      <td className="p-4">Fresno, California</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-semibold bg-muted">Focus</td>
                      <td className="p-4">Fleets of 20+ trucks</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-semibold bg-muted">Solution</td>
                      <td className="p-4">AI-powered route optimization + fuel-stop recommendations</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold bg-muted">Goal</td>
                      <td className="p-4">Verified 4–9% monthly fuel cost reduction</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Technology */}
            <div className="fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                3. Our Technology: Intelligent, Real-Time Optimization
              </h3>
              <ul className="space-y-3 list-none">
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">AI-Powered Routes:</strong> Using road topography, traffic patterns, and weather data
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Custom Fuel Network:</strong> Limited to partner providers for best pricing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Driver & Fleet Focus:</strong> Subscription-based access for seamless integration
                  </span>
                </li>
              </ul>
            </div>

            {/* Why Choose */}
            <div className="fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                4. Why Choose Trucker Pro?
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-4 text-left font-bold">Feature</th>
                      <th className="p-4 text-left font-bold">Benefit to Your Fleet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 font-semibold">Guaranteed Savings</td>
                      <td className="p-4 text-muted-foreground">4–9% monthly fuel expense reduction</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-semibold">Accuracy & Trust</td>
                      <td className="p-4 text-muted-foreground">Google-verified routes and fuel locations</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-semibold">Driver Empowerment</td>
                      <td className="p-4 text-muted-foreground">Mobile app with real-time insights</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Flexible Pricing</td>
                      <td className="p-4 text-muted-foreground">$20/truck/month subscription, scalable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 fade-in" style={{ animationDelay: "0.4s" }}>
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
