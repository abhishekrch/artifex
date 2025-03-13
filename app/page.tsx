import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Image as ImageIcon, BookOpen, HelpCircle, ChevronRight, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Artifex Logo" width={120} height={120} />
        </div>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-gray-600 hover:text-primary font-medium hidden md:block">
            Dashboard
          </Link>
          <Link href="#features" className="text-gray-600 hover:text-primary font-medium hidden md:block">
            Features
          </Link>
          <Button className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-6 py-2 transition-all shadow-md hover:shadow-lg" asChild>
            <Link href="/sign-in">Get Started</Link>
          </Button>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-800">AI-Powered </span>
              <span className="text-primary">Content Generator</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full" asChild>
                <Link href="/dashboard">Get started</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 rounded-full" asChild>
                <Link href="#features" className="flex items-center gap-2">
                  Learn more <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-white text-xs">JD</div>
                <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-white text-xs">MK</div>
                <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white flex items-center justify-center text-white text-xs">AR</div>
              </div>
              <p className="text-sm text-gray-600">Join <span className="font-medium">1,000+</span> content creators</p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <Image 
                src="/logo2.png" 
                alt="Artifex Dashboard" 
                width={600} 
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -z-10 top-10 right-10 w-full h-full bg-primary/10 rounded-xl"></div>
          </div>
        </div>
      </section>

      <div className="flex justify-center my-8">
        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3 shadow-md border border-gray-100">
          <span className="font-medium">Premium Membership - Unlock unlimited content generation</span>
          <Button variant="ghost" size="sm" className="rounded-full p-0 w-8 h-8 flex items-center justify-center bg-primary/10 text-primary">
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>

      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to create high-quality content for your business, blog, or social media.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center hover:shadow-md transition-all border border-gray-100">
            <div className="bg-primary/10 text-primary p-3 rounded-lg mb-4">
              <Calendar size={24} />
            </div>
            <h3 className="font-semibold mb-2">25+ templates</h3>
            <p className="text-gray-500 text-center text-sm">
              Responsive, and mobile-first project on the web
            </p>
            <Link href="#" className="text-primary mt-4 text-sm flex items-center font-medium">
              Learn more
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center hover:shadow-md transition-all border border-gray-100">
            <div className="bg-primary/10 text-primary p-3 rounded-lg mb-4">
              <ImageIcon size={24} />
            </div>
            <h3 className="font-semibold mb-2">Customizable</h3>
            <p className="text-gray-500 text-center text-sm">
              Components are easily customized and extendable
            </p>
            <Link href="#" className="text-primary mt-4 text-sm flex items-center font-medium">
              Learn more
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center hover:shadow-md transition-all border border-gray-100">
            <div className="bg-primary/10 text-primary p-3 rounded-lg mb-4">
              <BookOpen size={24} />
            </div>
            <h3 className="font-semibold mb-2">Free to Use</h3>
            <p className="text-gray-500 text-center text-sm">
              Every component and plugin is well documented
            </p>
            <Link href="#" className="text-primary mt-4 text-sm flex items-center font-medium">
              Learn more
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center hover:shadow-md transition-all border border-gray-100">
            <div className="bg-primary/10 text-primary p-3 rounded-lg mb-4">
              <HelpCircle size={24} />
            </div>
            <h3 className="font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-500 text-center text-sm">
              Contact us 24 hours a day, 7 days a week
            </p>
            <Link href="#" className="text-primary mt-4 text-sm flex items-center font-medium">
              Learn more
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Simplify Your Content Creation?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who trust Artifex for efficient content generation.
          </p>
          <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-600 font-medium px-8 py-3 rounded-md shadow-md" asChild>
            <Link href="/sign-in" className="flex items-center gap-2">
              Start For Free <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image src="/logo.svg" alt="Artifex Logo" width={100} height={100} />
            <p className="text-gray-500 text-sm mt-2">© 2023 Artifex. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-600 hover:text-primary">Terms</Link>
            <Link href="#" className="text-gray-600 hover:text-primary">Privacy</Link>
            <Link href="#" className="text-gray-600 hover:text-primary">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}