import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Image as ImageIcon, BookOpen, HelpCircle, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 relative overflow-hidden">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Artifex Logo" width={120} height={120} />
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full
         px-6 py-2 transition-all shadow-md hover:shadow-lg" asChild>
          <Link href="/sign-in">Get Started</Link>
        </Button>
      </nav>

      <div className="flex justify-center my-8">
        <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
          <span> Membership - Join Now</span>
          <ChevronRight size={16} />
        </div>
      </div>

      <section className="container mx-auto text-center px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-gray-800">AI Content </span>
          <span className="text-primary">Generator</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Revolutionize your content creation with our AI-powered app, delivering 
          engaging and high-quality text in seconds.
        </p>
        <Button size="lg" className="px-8" asChild>
          <Link href="/dashboard">Get started</Link>
        </Button>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
            <div className="bg-blue-600 p-3 rounded-lg text-white mb-4">
              <Calendar size={24} />
            </div>
            <h3 className="font-semibold mb-2">25+ templates</h3>
            <p className="text-gray-500 text-center text-sm">
              Responsive, and mobile-first project on the web
            </p>
            <Link href="#" className="text-blue-600 mt-4 text-sm flex items-center">
              Learn more
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
            <div className="bg-blue-600 p-3 rounded-lg text-white mb-4">
              <ImageIcon size={24} />
            </div>
            <h3 className="font-semibold mb-2">Customizable</h3>
            <p className="text-gray-500 text-center text-sm">
              Components are easily customized and extendable
            </p>
            <Link href="#" className="text-blue-600 mt-4 text-sm flex items-center">
              Learn more
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
            <div className="bg-blue-600 p-3 rounded-lg text-white mb-4">
              <BookOpen size={24} />
            </div>
            <h3 className="font-semibold mb-2">Free to Use</h3>
            <p className="text-gray-500 text-center text-sm">
              Every component and plugin is well documented
            </p>
            <Link href="#" className="text-blue-600 mt-4 text-sm flex items-center">
              Learn more
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
            <div className="bg-blue-600 p-3 rounded-lg text-white mb-4">
              <HelpCircle size={24} />
            </div>
            <h3 className="font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-500 text-center text-sm">
              Contact us 24 hours a day, 7 days a week
            </p>
            <Link href="#" className="text-blue-600 mt-4 text-sm flex items-center">
              Learn more
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}