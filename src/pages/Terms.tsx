import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Helmet } from "react-helmet-async";

export default function Terms() {
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  return (
    <>
      <SchemaMarkup type="policy" policyUrl="/terms" policyTitle="Trucker Pro – Terms & Conditions" />
      <Helmet>
        <meta name="description" content="Terms & Conditions for The Trucker Pro - Read our legal terms governing your access and use of our AI-powered fuel optimization services." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground fade-in">
          Terms & Conditions
        </h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {today}</p>
        
        <div className="prose prose-lg max-w-none fade-in space-y-6">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">AGREEMENT TO OUR LEGAL TERMS</h2>
            <p className="text-muted-foreground mb-4">
              These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and <strong>The Trucker Pro Pvt. Ltd. (Trucker Pro)</strong> concerning your access to and use of the Services.
            </p>
            <p className="text-muted-foreground mb-4">
              We are <strong>The Trucker Pro Pvt. Ltd. (Trucker Pro)</strong> ("Company," "we," "us," "our"). We operate <a href="https://thetruckerpro.com" className="text-primary hover:underline">https://thetruckerpro.com</a>, as well as any other related products and services that refer or link to these legal terms (collectively, the "Services").
            </p>
            <p className="text-muted-foreground mb-4">
              You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms.
            </p>
            <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 my-4">
              <p className="text-muted-foreground font-semibold">
                IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
              </p>
            </div>
            <p className="text-muted-foreground">
              You can contact us by email at <a href="mailto:support@thetruckerpro.com" className="text-primary hover:underline">support@thetruckerpro.com</a> or by mail to 2594 N Armstrong Ave, #224, Fresno, CA 93727, United States.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. OUR SERVICES</h2>
            <p className="text-muted-foreground">
              The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. INTELLECTUAL PROPERTY RIGHTS</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Our Intellectual Property</h3>
            <p className="text-muted-foreground mb-4">
              We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
            </p>
            <p className="text-muted-foreground mb-4">
              Our Content and Marks are protected by copyright and trademark laws and treaties around the world. The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Your Use of Our Services</h3>
            <p className="text-muted-foreground mb-2">Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable license to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
              <li>Access the Services; and</li>
              <li>Download or print a copy of any portion of the Content to which you have properly gained access</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              This is solely for your personal, non-commercial use or internal business purpose. Except as explicitly allowed, no part of the Services may be exploited for any commercial purpose whatsoever, without our express prior written permission.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Your Submissions</h3>
            <p className="text-muted-foreground mb-4">
              By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. USER REPRESENTATIONS</h2>
            <p className="text-muted-foreground mb-2">By using the Services, you represent and warrant that:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>You have the legal capacity and you agree to comply with these Legal Terms</li>
              <li>You are not a minor in the jurisdiction in which you reside</li>
              <li>You will not access the Services through automated or non-human means</li>
              <li>You will not use the Services for any illegal or unauthorized purpose</li>
              <li>Your use of the Services will not violate any applicable law or regulation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. PROHIBITED ACTIVITIES</h2>
            <p className="text-muted-foreground mb-4">
              The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Services, you agree not to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Systematically retrieve data from the Services without written permission</li>
              <li>Trick, defraud, or mislead us and other users</li>
              <li>Circumvent security-related features of the Services</li>
              <li>Disparage, tarnish, or otherwise harm us and/or the Services</li>
              <li>Use information from the Services to harass, abuse, or harm another person</li>
              <li>Make improper use of our support services</li>
              <li>Upload or transmit viruses, Trojan horses, or other malicious material</li>
              <li>Engage in any automated use of the system</li>
              <li>Attempt to impersonate another user or person</li>
              <li>Interfere with, disrupt, or create an undue burden on the Services</li>
              <li>Copy or adapt the Services' software</li>
              <li>Decipher, decompile, disassemble, or reverse engineer any software</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. USER GENERATED CONTRIBUTIONS</h2>
            <p className="text-muted-foreground">
              The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services (collectively, "Contributions").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. CONTRIBUTION LICENSE</h2>
            <p className="text-muted-foreground mb-4">
              By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
            </p>
            <p className="text-muted-foreground">
              We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. SERVICES MANAGEMENT</h2>
            <p className="text-muted-foreground mb-2">We reserve the right, but not the obligation, to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Monitor the Services for violations of these Legal Terms</li>
              <li>Take appropriate legal action against anyone who violates the law or these Legal Terms</li>
              <li>Refuse, restrict access to, limit the availability of, or disable any of your Contributions</li>
              <li>Remove from the Services or disable all files and content that are excessive in size</li>
              <li>Otherwise manage the Services to protect our rights and property</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. TERM AND TERMINATION</h2>
            <p className="text-muted-foreground mb-4">
              These Legal Terms shall remain in full force and effect while you use the Services.
            </p>
            <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 p-6 my-4">
              <p className="text-muted-foreground font-semibold">
                WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES TO ANY PERSON FOR ANY REASON OR FOR NO REASON.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. MODIFICATIONS AND INTERRUPTIONS</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
            </p>
            <p className="text-muted-foreground">
              We cannot guarantee the Services will be available at all times. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. GOVERNING LAW</h2>
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border border-border">
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border px-4 py-2 font-semibold">Governing Law</td>
                    <td className="border border-border px-4 py-2">Laws of California, United States</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-semibold">Jurisdiction</td>
                    <td className="border border-border px-4 py-2">Courts of Fresno, California, United States (exclusive)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. DISPUTE RESOLUTION</h2>
            
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border border-border">
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border px-4 py-2 font-semibold">Informal Negotiations</td>
                    <td className="border border-border px-4 py-2">At least 90 Days before initiating arbitration</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-semibold">Arbitration Body</td>
                    <td className="border border-border px-4 py-2">International Commercial Arbitration Court (European Arbitration Chamber)</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-semibold">Number of Arbitrators</td>
                    <td className="border border-border px-4 py-2">One (1)</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-semibold">Seat of Arbitration</td>
                    <td className="border border-border px-4 py-2">Fresno, California, USA (mutually decided)</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-semibold">Language</td>
                    <td className="border border-border px-4 py-2">English ONLY</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-semibold">Governing Law</td>
                    <td className="border border-border px-4 py-2">Substantive law of California, United States</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Restrictions</h3>
            <p className="text-muted-foreground mb-4">
              The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, there is no right or authority for any Dispute to be arbitrated on a class-action basis.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Exceptions</h3>
            <p className="text-muted-foreground mb-2">The following Disputes are not subject to informal negotiations and binding arbitration:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Any Disputes seeking to enforce or protect intellectual property rights</li>
              <li>Any Dispute related to allegations of theft, piracy, invasion of privacy, or unauthorized use</li>
              <li>Any claim for injunctive relief</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. CORRECTIONS</h2>
            <p className="text-muted-foreground">
              We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">13. DISCLAIMER</h2>
            <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 my-4">
              <p className="text-muted-foreground font-semibold mb-4">
                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK.
              </p>
              <p className="text-muted-foreground">
                To the fullest extent permitted by law, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">14. LIMITATIONS OF LIABILITY</h2>
            <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 my-4">
              <p className="text-muted-foreground font-semibold mb-4">
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES.
              </p>
              <p className="text-muted-foreground">
                Notwithstanding anything to the contrary, our liability to you for any cause whatsoever will at all times be limited to the lesser of the amount paid, if any, by you to us OR 1 month of what customer has paid in the latest billings or monthly average.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">15. INDEMNIFICATION</h2>
            <p className="text-muted-foreground mb-2">
              You agree to defend, indemnify, and hold us harmless from and against any loss, damage, liability, claim, or demand made by any third party due to or arising out of:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Use of the Services</li>
              <li>Breach of these Legal Terms</li>
              <li>Any breach of your representations and warranties</li>
              <li>Your violation of the rights of a third party, including intellectual property rights</li>
              <li>Any overt harmful act toward any other user of the Services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">16. USER DATA</h2>
            <p className="text-muted-foreground">
              We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services. You are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">17. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
            <p className="text-muted-foreground mb-4">
              Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically satisfy any legal requirement that such communication be in writing.
            </p>
            <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-6 my-4">
              <p className="text-muted-foreground font-semibold">
                YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">18. MISCELLANEOUS</h2>
            <p className="text-muted-foreground mb-4">
              These Legal Terms and any policies or operating rules posted by us on the Services constitute the entire agreement and understanding between you and us.
            </p>
            <p className="text-muted-foreground">
              We may assign any or all of our rights and obligations to others at any time. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">19. CONTACT US</h2>
            <p className="text-muted-foreground mb-4">
              In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us:
            </p>
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-muted-foreground mb-2"><strong>The Trucker Pro Pvt. Ltd.</strong></p>
              <p className="text-muted-foreground">2594 N Armstrong Ave, #224</p>
              <p className="text-muted-foreground">Fresno, CA 93727, United States</p>
              <p className="text-muted-foreground mt-3">
                Email: <a href="mailto:support@thetruckerpro.com" className="text-primary hover:underline">support@thetruckerpro.com</a>
              </p>
              <p className="text-muted-foreground">
                Phone: <a href="tel:+15598823863" className="text-primary hover:underline">+1 (559) 882 3863</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
