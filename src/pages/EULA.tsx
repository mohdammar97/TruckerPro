import { SchemaMarkup } from "@/components/SchemaMarkup";

export default function EULA() {
  return (
    <>
      <SchemaMarkup type="policy" policyUrl="/eula" policyTitle="Trucker Pro – EULA" />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground fade-in">
          End-User License Agreement (EULA)
        </h1>
        <div className="prose prose-lg max-w-none fade-in space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">I. GENERAL</h2>
            <p className="text-muted-foreground">
              This End-User License Agreement ("EULA") is a binding legal agreement between you, the End User (either an individual or a single entity) ("Licensee" or "You"), and <strong>The Trucker Pro Pvt. Ltd. (Trucker Pro)</strong> ("Licensor" or "We") for the mobile application <strong>Trucker Pro</strong> (the "Application"). The Application is licensed, not sold, to You for use strictly in accordance with the terms of this EULA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">II. LICENSE GRANT</h2>
            <p className="text-muted-foreground mb-4">
              The Licensor grants You a revocable, non-exclusive, non-transferable, limited license to download, install, and use the Application on wireless electronic devices owned or controlled by You, and to access and use the Application on such devices strictly in accordance with the terms of this EULA.
            </p>
            <p className="text-muted-foreground">
              The Application is free to download. However, the core service—sending optimized routes and fuel stops—is contingent upon an active, paid subscription agreement between the Licensor and Your associated company or fleet ("Client").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">III. LICENSE RESTRICTIONS AND ACCESS</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Scope of Service Access</h3>
            <p className="text-muted-foreground mb-4">
              Access to proprietary information (optimized routes and fuel stops) within the Application is strictly limited to trucks/drivers associated with a valid, subscribed truck number provided under a Client agreement. If a user is not a Client or the driver of a truck on an active subscription, they will be able to download the Application but will not receive any service information or data.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Use of Data</h3>
            <p className="text-muted-foreground mb-4">
              Data will only be visible for the subscribed truck numbers. Multiple logins on different devices are allowed per subscribed truck number.
            </p>

            <p className="text-muted-foreground mb-2">You agree not to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Copy, modify, distribute, or create derivative works of the Application</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">IV. TERMS AND TERMINATION</h2>
            <p className="text-muted-foreground">
              This EULA shall remain in effect until terminated by You or the Licensor. The Licensor may, at any time and for any reason, terminate this EULA without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">V. THIRD-PARTY PLATFORM REQUIREMENTS</h2>
            <p className="text-muted-foreground mb-4">
              This EULA incorporates, and You agree to comply with, additional terms and conditions imposed by <strong>Apple Inc.</strong> (Apple App Store) and <strong>Google LLC</strong> (Google Play Store), including the respective Licensed Application End-User License Agreement and Google Play Terms of Service.
            </p>
            
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>You acknowledge that this EULA is concluded between Licensor and You only, and not with Apple or Google.</li>
              <li>The Licensor, not Apple or Google, is solely responsible for the licensed Application and the content thereof.</li>
              <li>You must comply with applicable third-party terms of agreement when using the Application.</li>
              <li>Apple and Google are third-party beneficiaries of this EULA and will have the right (and will be deemed to have accepted the right) to enforce this EULA against You as a third-party beneficiary thereof.</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
