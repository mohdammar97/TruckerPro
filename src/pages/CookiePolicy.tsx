import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Helmet } from "react-helmet-async";

export default function CookiePolicy() {
  return (
    <>
      <SchemaMarkup type="policy" policyUrl="/cookie-policy" policyTitle="Trucker Pro – Cookie Policy" />
      <Helmet>
        <meta name="description" content="Cookie Policy for The Trucker Pro - Learn how we use cookies to enhance your experience on our website." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground fade-in">
          Cookie Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          For Associated Website: <a href="https://thetruckerpro.com" className="text-primary hover:underline">https://thetruckerpro.com</a>
        </p>
        
        <div className="prose prose-lg max-w-none fade-in space-y-6">
          <p className="text-muted-foreground mb-8">
            <strong>The Trucker Pro Pvt. Ltd. (Trucker Pro)</strong> operates the website <a href="https://thetruckerpro.com" className="text-primary hover:underline">https://thetruckerpro.com</a>.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">I. WHAT ARE COOKIES?</h2>
            <p className="text-muted-foreground">
              Cookies are small text files placed on Your device (computer, mobile phone, tablet) when You visit our website. They are widely used to make websites work or improve their efficiency, as well as to provide reporting information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">II. HOW WE USE COOKIES</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies to enhance Your experience, understand how our site is used, and support our marketing efforts. Specifically, we may use cookies for:
            </p>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left text-foreground">Category</th>
                    <th className="border border-border px-4 py-2 text-left text-foreground">Purpose</th>
                    <th className="border border-border px-4 py-2 text-left text-foreground">Retention</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border px-4 py-2 font-semibold">Functionality</td>
                    <td className="border border-border px-4 py-2">To remember Your preferences and recognize You when You return to our website.</td>
                    <td className="border border-border px-4 py-2">Varies</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-semibold">Analytics</td>
                    <td className="border border-border px-4 py-2">To track traffic patterns, visitor numbers, and general usage to improve our website's performance and design.</td>
                    <td className="border border-border px-4 py-2">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">III. YOUR CHOICES</h2>
            <p className="text-muted-foreground mb-4">
              Most browsers allow You to refuse to accept cookies and to delete cookies. The method for doing so varies from browser to browser, and from version to version. You can manage Your cookie preferences directly through Your browser settings.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-6 my-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Managing Cookies</h3>
              <p className="text-muted-foreground mb-2">
                To learn more about managing cookies in your specific browser, please visit:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
                <li>Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
                <li>Safari: Preferences → Privacy → Manage Website Data</li>
                <li>Edge: Settings → Privacy, search, and services → Cookies and site permissions</li>
              </ul>
            </div>

            <p className="text-muted-foreground">
              Please note that blocking or deleting cookies may impact your experience on our website and limit certain functionality.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
