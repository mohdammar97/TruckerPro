import { SchemaMarkup } from "@/components/SchemaMarkup";

export default function AUP() {
  return (
    <>
      <SchemaMarkup type="policy" policyUrl="/aup" policyTitle="Trucker Pro – AUP" />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground fade-in">
          Acceptable Use Policy (AUP)
        </h1>
        <div className="prose prose-lg max-w-none fade-in space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">I. SCOPE</h2>
            <p className="text-muted-foreground">
              This Acceptable Use Policy governs the use of the Trucker Pro application and all related Services, ensuring compliance with our standards and relevant laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">II. PROHIBITED USES</h2>
            <p className="text-muted-foreground mb-4">
              The Services shall be used solely for the intended purpose of optimizing commercial vehicle routing and fueling within a valid Client subscription. You agree not to use the Services:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>To violate any law, statute, ordinance, or regulation.</li>
              <li>To infringe upon the rights of others, including intellectual property rights.</li>
              <li>To transmit or upload any harmful software, viruses, or malicious code.</li>
              <li>To engage in activities that interfere with the performance, reliability, or security of the Services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">III. DATA SUBMISSION AND CONSEQUENCES</h2>
            <p className="text-muted-foreground mb-4">
              You may submit data (e.g., driver logs, truck status, route input) to the Application.
            </p>
            
            <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 p-6 my-6">
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <span>⚠️</span> Consequences of Incorrect Data
              </h3>
              <p className="text-muted-foreground">
                If the submitted data is incorrect, the route and fuel stops suggested will be wrong, which will ultimately lead to incorrect locations and fuel pumps. If such an event occurs, the drivers or the company (Client) will be responsible, and <strong>The Trucker Pro Pvt. Ltd. (Trucker Pro) is NOT responsible</strong>. The Client bears sole responsibility for the accuracy and legality of all data submitted by its drivers/users.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
