import type { Route } from "./+types/home";
import { Button } from "app/components/ui/button";
import { Card, CardContent } from "app/components/ui/card";
import { Badge } from "app/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "app/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "app/components/ui/avatar";
import { H1, H2, H3, P, Lead, Subtitle } from "app/components/ui/typography";
import {
  Heart,
  Users,
  MessageCircle,
  Camera,
  Star,
  CheckCircle,
  Mail,
} from "lucide-react";
import { SubscribeForm } from "app/components/subscribe-form";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PawConnect - The Social Network for Dogs & Their Humans" },
    {
      name: "description",
      content:
        "Connect your furry friend with dogs nearby, share adorable moments, and build lasting friendships in the dog community.",
    },
  ];
}

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
        backgroundSize: "2rem 2rem",
      }}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">
                PawConnect
              </span>
            </div>
            <div className="hidden items-center gap-8 lg:flex">
              <a href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-gray-900"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-gray-900"
              >
                Reviews
              </a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900">
                FAQ
              </a>
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Join Free Today
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
              🐕 Join 50,000+ Happy Dogs & Owners
            </Badge>
            <H1>
              The Social Network for
              <br />
              <span className="text-blue-600">Dogs & Their Humans</span>
            </H1>
            <Lead>
              Connect your furry friend with dogs nearby, share adorable
              moments, and build lasting friendships in the dog community.
            </Lead>
            <div className="mb-12 flex flex-col justify-center gap-4 lg:flex-row">
              <Button
                size="lg"
                className="bg-blue-600 px-8 py-3 text-lg hover:bg-blue-700"
              >
                Start Connecting Today - Free!
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                Watch Demo
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>100% Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Safe & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>No Credit Card Required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <H2>Everything Your Dog Needs to Socialize</H2>
            <Subtitle>
              From finding playmates to sharing memories, PawConnect makes it
              easy to connect with the dog community.
            </Subtitle>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="p-8 text-center transition-shadow hover:shadow-lg">
              <CardContent className="p-0">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <H3>Find Dog Friends Nearby</H3>
                <P>
                  Discover dogs in your neighborhood based on size, breed, age,
                  and personality. Perfect playmates are just a swipe away.
                </P>
              </CardContent>
            </Card>
            <Card className="p-8 text-center transition-shadow hover:shadow-lg">
              <CardContent className="p-0">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Camera className="h-8 w-8 text-green-600" />
                </div>
                <H3>Share Adorable Moments</H3>
                <P>
                  Create a beautiful timeline of your dog's adventures,
                  milestones, and daily cuteness. Get likes and comments from
                  fellow dog lovers.
                </P>
              </CardContent>
            </Card>
            <Card className="p-8 text-center transition-shadow hover:shadow-lg">
              <CardContent className="p-0">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <MessageCircle className="h-8 w-8 text-purple-600" />
                </div>
                <H3>Safe Messaging & Meetups</H3>
                <P>
                  Chat with other dog parents, organize playdates, and join
                  local dog events. All in a safe, moderated environment.
                </P>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <H2>Get Started in 3 Simple Steps</H2>
            <Subtitle className="mx-auto">
              It takes less than 2 minutes to create your dog's profile and
              start connecting.
            </Subtitle>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                1
              </div>
              <H3>Create Your Dog's Profile</H3>
              <P>
                Add photos, personality traits, favorite activities, and basic
                info. Make your pup stand out with their unique story.
              </P>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                2
              </div>
              <H3>Discover Compatible Dogs</H3>
              <P>
                Browse profiles of dogs near you. Use filters to find the
                perfect playmates based on size, energy level, and interests.
              </P>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold text-white">
                3
              </div>
              <H3>Connect & Meet Up</H3>
              <P>
                Send a friendly message, plan a playdate, or join group walks.
                Watch your dog make new friends and socialize safely.
              </P>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <H2>Happy Dogs, Happy Owners</H2>
            <Subtitle>
              See how PawConnect has transformed the social lives of dogs and
              their families.
            </Subtitle>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="mb-4 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-gray-600">
                  "My shy rescue dog Luna has made 5 best friends through
                  PawConnect! She's so much more confident and playful now. This
                  app changed our lives."
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Sarah Martinez</p>
                    <p className="text-sm text-gray-500">
                      Luna's Mom • Golden Retriever
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="mb-4 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-gray-600">
                  "Finally found other German Shepherd owners nearby! Our weekly
                  pack walks are the highlight of Max's week. He's never been
                  happier."
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">James Davidson</p>
                    <p className="text-sm text-gray-500">
                      Max's Dad • German Shepherd
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="mb-4 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-gray-600">
                  "As a new dog owner, I was worried about socialization.
                  PawConnect connected me with experienced owners who gave
                  amazing advice and playdates!"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Emily Rodriguez</p>
                    <p className="text-sm text-gray-500">
                      Buddy's Mom • Labrador Mix
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <H2>Frequently Asked Questions</H2>
            <Subtitle>
              Everything you need to know about keeping your dog safe and
              social.
            </Subtitle>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                Is PawConnect really free forever?
              </AccordionTrigger>
              <AccordionContent>
                Yes! PawConnect is completely free to use. We believe every dog
                deserves to make friends regardless of their owner's budget. We
                may introduce optional premium features in the future, but the
                core social features will always be free.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                How do you ensure my dog's safety during meetups?
              </AccordionTrigger>
              <AccordionContent>
                Safety is our top priority. We require vaccination records,
                encourage public meetups, provide safety guidelines, and have a
                reporting system. We also suggest starting with short,
                supervised meetings and recommend meeting in neutral, public
                spaces like dog parks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                What if my dog is aggressive or reactive?
              </AccordionTrigger>
              <AccordionContent>
                We welcome all dogs! You can specify behavioral needs in your
                profile, and we'll help match you with understanding owners.
                Many of our users have successfully helped reactive dogs
                socialize through gradual, controlled interactions with patient
                playmates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                Can I use PawConnect for puppies?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! Puppy socialization is crucial. We have special
                puppy playgroups and can connect you with other puppy parents.
                We do recommend ensuring your puppy has started their
                vaccination series before in-person meetups.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="rounded-lg border px-6">
              <AccordionTrigger className="text-left">
                How do I report inappropriate behavior or users?
              </AccordionTrigger>
              <AccordionContent>
                Every profile and conversation has a report button. Our
                moderation team reviews all reports within 24 hours. We take
                community safety seriously and will take appropriate action,
                including warnings or account suspension for violations of our
                community guidelines.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <Mail className="h-8 w-8 text-blue-600" />
          </div>
          <H2 className="mb-4">Stay Updated with PawConnect</H2>
          <p className="mb-8 text-lg text-gray-600">
            Get the latest tips for dog socialization, community events, and new
            features delivered to your inbox.
          </p>
          <div className="mx-auto max-w-md">
            <SubscribeForm />
          </div>
          <p className="mt-4 text-sm text-gray-500">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <H2 className="mb-6 text-white">
            Ready to Help Your Dog Make New Friends?
          </H2>
          <p className="mb-8 text-xl text-blue-100">
            Join thousands of happy dogs and their owners. It's free, safe, and
            takes less than 2 minutes to get started.
          </p>
          <Button
            size="lg"
            className="bg-white px-8 py-3 text-lg text-blue-600 hover:bg-gray-100"
          >
            Create Your Dog's Profile - Free!
          </Button>
          <p className="mt-4 text-sm text-blue-200">
            No credit card required • 100% free forever • Join 50,000+ happy
            dogs
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="text-xl font-bold">PawConnect</span>
              </div>
              <p className="text-gray-300">
                The social network that brings dogs and their humans together
                for lasting friendships.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Product</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#features" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community Guidelines
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#faq" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Report an Issue
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 PawConnect. All rights reserved. Made with ❤️ for dogs
              everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
