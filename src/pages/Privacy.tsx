import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <>
      <SchemaMarkup type="policy" policyUrl="/privacy" policyTitle="Trucker Pro – Privacy Policy" />
      <Helmet>
        <meta name="description" content="Privacy Policy for The Trucker Pro - Learn how we collect, use, and protect your personal information when you use our fuel optimization services." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground fade-in">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: November 11, 2025</p>
        
        <div className="prose prose-lg max-w-none fade-in space-y-6">
          <section className="mb-8">
            <p className="text-muted-foreground mb-4">
              This Privacy Notice for <strong>The Trucker Pro Pvt. Ltd.</strong> (doing business as Trucker Pro) ("we," "us," or "our") describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Visit our website at <a href="https://thetruckerpro.com" className="text-primary hover:underline">https://thetruckerpro.com</a></li>
              <li>Download and use our mobile application (Trucker Pro)</li>
              <li>Use our Fuel Optimization services</li>
              <li>Engage with us in other related ways, including sales, marketing, or events</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:support@thetruckerpro.com" className="text-primary hover:underline">support@thetruckerpro.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">SUMMARY OF KEY POINTS</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>What personal information do we process?</strong> We process personal information you disclose to us, such as names, phone numbers, email addresses, contact preferences, and company name.</li>
              <li><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</li>
              <li><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</li>
              <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</li>
              <li><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information.</li>
              <li><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by visiting <a href="/contact" className="text-primary hover:underline">https://thetruckerpro.com/contact</a>, or by contacting us.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. WHAT INFORMATION DO WE COLLECT?</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Personal information you disclose to us</h3>
            <p className="text-muted-foreground mb-4">
              <em>In Short:</em> We collect personal information that you provide to us.
            </p>
            <p className="text-muted-foreground mb-4">
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
            </p>
            <p className="text-muted-foreground mb-2"><strong>Personal Information Provided by You.</strong> The personal information we collect may include the following:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
              <li>Names</li>
              <li>Phone numbers</li>
              <li>Email addresses</li>
              <li>Contact preferences</li>
              <li>Company name</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              <strong>Sensitive Information.</strong> We do not process sensitive information.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Application Data.</strong> If you use our application(s), we may collect information if you choose to provide us with access or permission.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Push Notifications.</strong> We may request to send you push notifications regarding your account or certain features of the application(s).
            </p>
            <p className="text-muted-foreground">
              All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Information automatically collected</h3>
            <p className="text-muted-foreground mb-4">
              <em>In Short:</em> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
            </p>
            <p className="text-muted-foreground mb-4">
              We automatically collect certain information when you visit, use, or navigate the Services. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
            </p>
            <p className="text-muted-foreground mb-2">The information we collect includes:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services (e.g., IP address, device information, browser type, and information about your activity in the Services).</li>
              <li><strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services (e.g., IP address, browser type, hardware model, operating system).</li>
              <li><strong>Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
            <p className="text-muted-foreground mb-4">
              <em>In Short:</em> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.
            </p>
            <p className="text-muted-foreground mb-4">
              We process your personal information for a variety of reasons, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>To deliver and facilitate delivery of services to the user</li>
              <li>To respond to user inquiries/offer support to users</li>
              <li>To enable user-to-user communications</li>
              <li>To request feedback</li>
              <li>To send you marketing and promotional communications</li>
              <li>To comply with our legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
            <p className="text-muted-foreground mb-4">
              <em>In Short:</em> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law.
            </p>
            <p className="text-muted-foreground">
              If you are located in Canada, we may process your information if you have given us specific permission (i.e., express consent) or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
            <p className="text-muted-foreground mb-4">
              <em>In Short:</em> We may share information in specific situations described in this section.
            </p>
            <p className="text-muted-foreground mb-2">We may need to share your personal information in the following situations:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              <li><strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Notice.</li>
              <li><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>
            <p className="text-muted-foreground mb-4">
              <em>In Short:</em> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.
            </p>
            <p className="text-muted-foreground mb-4">
              As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products").
            </p>
            <p className="text-muted-foreground mb-4">
              We provide the AI Products through third-party service providers ("AI Service Providers"), including OpenAI, Google Cloud AI, and ElevenLabs. Your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products.
            </p>
            <p className="text-muted-foreground">
              All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
            <p className="text-muted-foreground mb-4">
              <em>In Short:</em> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
            </p>
            <p className="text-muted-foreground">
              We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice. No purpose in this notice will require us keeping your personal information for longer than 6 months.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
            <p className="text-muted-foreground mb-4">
              <em>In Short:</em> We aim to protect your personal information through a system of organizational and technical security measures.
            </p>
            <p className="text-muted-foreground">
              We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, transmission of personal information to and from our Services is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
            <p className="text-muted-foreground mb-4">
              <em>In Short:</em> We do not knowingly collect data from or market to children under 18 years of age.
            </p>
            <p className="text-muted-foreground">
              If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:dpo@thetruckerpro.com" className="text-primary hover:underline">dpo@thetruckerpro.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
            <p className="text-muted-foreground mb-4">
              <em>In Short:</em> Depending on your state of residence in the US or in some regions, such as Canada, you have rights that allow you greater access to and control over your personal information.
            </p>
            <p className="text-muted-foreground mb-4">
              If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time by contacting us.
            </p>
            <p className="text-muted-foreground">
              You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
            <p className="text-muted-foreground">
              We do not currently respond to Do-Not-Track (DNT) browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
            <p className="text-muted-foreground mb-4">
              <em>In Short:</em> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have specific privacy rights.
            </p>
            
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left text-foreground">Category</th>
                    <th className="border border-border px-4 py-2 text-left text-foreground">Examples</th>
                    <th className="border border-border px-4 py-2 text-left text-foreground">Collected</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border px-4 py-2">A. Identifiers</td>
                    <td className="border border-border px-4 py-2">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                    <td className="border border-border px-4 py-2 text-center font-semibold">YES</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">B. Personal information (CA Customer Records)</td>
                    <td className="border border-border px-4 py-2">Name, contact information, education, employment, employment history, and financial information</td>
                    <td className="border border-border px-4 py-2 text-center font-semibold">YES</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">C. Protected classification characteristics</td>
                    <td className="border border-border px-4 py-2">Gender, age, date of birth, race and ethnicity, national origin, marital status</td>
                    <td className="border border-border px-4 py-2 text-center">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">D. Commercial information</td>
                    <td className="border border-border px-4 py-2">Transaction information, purchase history, financial details, and payment information</td>
                    <td className="border border-border px-4 py-2 text-center">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">E. Biometric information</td>
                    <td className="border border-border px-4 py-2">Fingerprints and voiceprints</td>
                    <td className="border border-border px-4 py-2 text-center">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">F. Internet or network activity</td>
                    <td className="border border-border px-4 py-2">Browsing history, search history, online behavior</td>
                    <td className="border border-border px-4 py-2 text-center">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">G. Geolocation data</td>
                    <td className="border border-border px-4 py-2">Device location</td>
                    <td className="border border-border px-4 py-2 text-center">NO</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">H. Sensory information</td>
                    <td className="border border-border px-4 py-2">Audio, video or call recordings</td>
                    <td className="border border-border px-4 py-2 text-center">NO</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground mb-4">
              We will use and retain the collected personal information as needed to provide the Services or for: Category A - 6 months; Category B - 6 months.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">How to Exercise Your Rights</h3>
            <p className="text-muted-foreground">
              To exercise these rights, you can contact us by visiting <a href="/contact" className="text-primary hover:underline">https://thetruckerpro.com/contact</a>, by emailing us at <a href="mailto:support@thetruckerpro.com" className="text-primary hover:underline">support@thetruckerpro.com</a>, or by referring to the contact details at the bottom of this document. We will honor your opt-out preferences if you enact the Global Privacy Control (GPC) opt-out signal on your browser.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Notice from time to time. The updated version will be indicated by an updated date at the top of this Privacy Notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO):
            </p>
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-muted-foreground mb-2"><strong>The Trucker Pro Pvt. Ltd.</strong></p>
              <p className="text-muted-foreground">Data Protection Officer</p>
              <p className="text-muted-foreground">2594 N Armstrong Ave, #224</p>
              <p className="text-muted-foreground">Fresno, CA 93727, United States</p>
              <p className="text-muted-foreground mt-3">
                Email: <a href="mailto:dpo@thetruckerpro.com" className="text-primary hover:underline">dpo@thetruckerpro.com</a>
              </p>
              <p className="text-muted-foreground">
                Phone: <a href="tel:+15598823863" className="text-primary hover:underline">+1 (559) 882 3863</a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
            <p className="text-muted-foreground">
              To request to review, update, or delete your personal information, please visit: <a href="/contact" className="text-primary hover:underline">https://thetruckerpro.com/contact</a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
