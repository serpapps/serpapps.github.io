import { Hero111 } from "@/components/Hero111";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code2, Palette, Zap, Shield, Globe, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero111 
        badgeText="Welcome to Serp Apps"
        title="Build Amazing Apps with Modern Web Technologies"
        subtitle="Discover our collection of powerful web applications built with Next.js, TypeScript, and shadcn/ui. Fast, reliable, and designed with you in mind."
        button1Text="Browse Apps"
        button1Link="/apps"
        button2Text="View on GitHub"
        button2Link="https://github.com/serpapps"
      />

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why Choose Our Apps?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with the latest technologies and best practices for an exceptional experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Optimized for speed and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Static site generation with Next.js ensures your apps load instantly, providing the best user experience.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Beautiful Design</CardTitle>
                <CardDescription>
                  Modern UI with shadcn/ui components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Every component is carefully crafted with attention to detail, accessibility, and responsive design.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Open Source</CardTitle>
                <CardDescription>
                  Transparent and community-driven
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All our apps are open source on GitHub. Contribute, learn, or use them as inspiration for your projects.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure & Private</CardTitle>
                <CardDescription>
                  Your data stays with you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We prioritize privacy and security. No tracking, no ads, just useful tools that respect your privacy.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Works Everywhere</CardTitle>
                <CardDescription>
                  Cross-platform compatibility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access our apps from any device with a modern browser. Responsive design ensures a great experience.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Regular Updates</CardTitle>
                <CardDescription>
                  Always improving and evolving
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We continuously update our apps with new features, improvements, and the latest web technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>
        
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to explore our apps?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our collection of web applications designed to make your life easier. New apps are added regularly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Browse All Apps
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              View on GitHub
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}