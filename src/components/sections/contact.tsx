
"use client";

import { useEffect, useRef } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Heading, Subheading } from "../ui/heading";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: "",
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-transform duration-300">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      value: "khushikamboj123456@gmail.com",
      href: "mailto:khushikamboj123456@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9306605503",
      href: "tel:+919306605503",
    },
]

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message && (state.errors && Object.keys(state.errors).length > 0 || !state.success)) {
        toast({
            title: "Error",
            description: state.message,
            variant: "destructive",
        })
    }
  }, [state, toast]);


  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
       <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_10%_20%,hsl(var(--primary)/0.1),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_90%_80%,hsl(var(--accent)/0.1),transparent)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <Heading>Get In Touch</Heading>
          <Subheading>
            Have a question or want to work together? Feel free to reach out.
          </Subheading>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactDetails.map((detail) => (
                <Card key={detail.title} className="bg-background/50 backdrop-blur-sm border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
                    <CardContent className="pt-6 flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <detail.icon className="h-6 w-6" />
                        </div>
                        <div>
                        <h3 className="text-lg font-semibold">{detail.title}</h3>
                        <p className="text-muted-foreground">
                            <a href={detail.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            {detail.value}
                            </a>
                        </p>
                        </div>
                    </CardContent>
                </Card>
            ))}
          </div>
          <div>
            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardContent className="pt-6">
                <form ref={formRef} action={formAction} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" type="text" placeholder="Your Name" required className="bg-background/80" />
                    {state.errors?.name && <p className="text-destructive text-sm mt-1">{state.errors.name[0]}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Your Email" required className="bg-background/80"/>
                    {state.errors?.email && <p className="text-destructive text-sm mt-1">{state.errors.email[0]}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your Message" required className="bg-background/80" />
                    {state.errors?.message && <p className="text-destructive text-sm mt-1">{state.errors.message[0]}</p>}
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
