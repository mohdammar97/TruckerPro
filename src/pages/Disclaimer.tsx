import { SchemaMarkup } from "@/components/SchemaMarkup";

export default function Disclaimer() {
  return (
    <>
      <SchemaMarkup type="policy" policyUrl="/disclaimer" policyTitle="Trucker Pro – Disclaimer" />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground fade-in">
          Disclaimer
        </h1>
        <div className="prose prose-lg max-w-none fade-in space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span>ℹ️</span> I. NO WARRANTY AND LIMITATION OF LIABILITY
            </h2>
            <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 my-4">
              <p className="text-muted-foreground">
                <strong>The Trucker Pro Pvt. Ltd. (Trucker Pro)</strong> provides the Services on an <strong>"AS-IS"</strong> and <strong>"AS-AVAILABLE"</strong> basis. While we strive for accuracy, the route and fuel pump information is generated based on public information, algorithms, and data provided by the Client. We verify the location data provided by the Client, but we make no representation or warranty of any kind, express or implied, regarding the accuracy, validity, reliability, or completeness of the data.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span>⚠️</span> II. HIGH-RISK USE AND USER RESPONSIBILITY
            </h2>
            <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 p-6 my-4">
              <p className="text-muted-foreground">
                The Application is a routing and fuel suggestion tool only. <strong>The User is solely responsible for verifying all routes, fuel stops, traffic conditions, road closures, and any other relevant factors</strong> before proceeding with the route or fuel stop recommendation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">III. LIABILITY FOR MISHAPS AND ACCIDENTS</h2>
            <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 my-4">
              <p className="text-muted-foreground">
                <strong>The Trucker Pro Pvt. Ltd. (Trucker Pro) is NOT liable</strong> for any inconvenience caused, or if the driver runs into an accident while following our route, or any other mishaps. The use of this Application is entirely at Your own risk. You assume all responsibility and risk for any resulting damages, injuries, or losses.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span>⛽</span> IV. FUEL PARTNER DISCLOSURE
            </h2>
            <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-6 my-4">
              <p className="text-muted-foreground">
                The fuel pumps suggested are strictly those provided by the Client for their exclusive use and are not based on a direct partnership between <strong>The Trucker Pro Pvt. Ltd. (Trucker Pro)</strong> and any fuel provider (such as Pilot or Love's). We are not responsible for the price, availability, or quality of fuel at the recommended locations.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
