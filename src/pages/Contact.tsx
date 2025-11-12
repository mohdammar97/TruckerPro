import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  companyName: z.string().optional(),
  fleetSize: z.string().optional(),
  email: z.string().email("Invalid email address"),
  contactNumber: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      fleetSize: "",
      email: "",
      contactNumber: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission (in production, this would send to a backend)
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <SchemaMarkup type="contact" />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground fade-in">
          Contact Us
        </h1>
        <p className="text-center text-muted-foreground mb-12 text-lg fade-in">
          Ready to optimize your fleet? Get in touch with our team today.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="fade-in">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="ABC Logistics" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fleetSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fleet Size</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 25 trucks" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your fleet and how we can help..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              Ready to make every mile more efficient? Contact our team to schedule a demo.
            </p>

            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">Website:</p>
                <a
                  href="https://thetruckerpro.com/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://thetruckerpro.com/
                </a>
              </div>

              <div>
                <p className="font-semibold text-foreground">Email:</p>
                <a href="mailto:support@thetruckerpro.com" className="text-primary hover:underline">
                  support@thetruckerpro.com
                </a>
              </div>

              <div>
                <p className="font-semibold text-foreground">Phone:</p>
                <a href="tel:+15598823863" className="text-primary hover:underline">
                  +1 (559) 882 3863
                </a>
              </div>

              <div>
                <p className="font-semibold text-foreground">Office:</p>
                <address className="not-italic">
                  2594 N Armstrong Ave, #224<br />
                  Fresno, CA 93727<br />
                  United States
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
