import { Building2, Landmark, Lightbulb, Percent, BarChart3, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TestimonialSlider from "@/components/testimonial-slider"
import Chatbot from "@/components/chatbot"

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm px-10">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <Building2 className="h-6 w-6" />
            <span className="text-xl font-bold">GIFT City</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <a href="#contact">Get Started</a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      <main className="flex-1 ">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
              poster="/placeholder.svg?height=1080&width=1920"
            >
              <source src="https://example.com/gift-city-video.mp4" type="video/mp4" />
              {/* Fallback img if video doesn't load */}
              <img
                src="/placeholder.svg?height=1080&width=1920"
                alt="GIFT City Skyline"
                fill
                className="object-cover"
                priority
              />
            </video>
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              India's Global Financial & Tech Hub
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-white/90 md:text-xl">
              A world-class smart city designed to compete with global financial centers, offering unparalleled
              infrastructure and business opportunities.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" asChild className="h-12 px-8">
                <a href="#about">Explore GIFT City</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-8 text-white hover:bg-white/10">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
            <a
              href="#about"
              className="flex items-center justify-center rounded-full bg-white/10 p-2 backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6 rotate-90 text-white" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 px-10">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  About GIFT City
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  A Vision of Global Excellence
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Gujarat International Finance Tec-City (GIFT City) is India's first operational smart city and
                  International Financial Services Centre (IFSC). Designed to be a global financial and technology hub,
                  GIFT City offers world-class infrastructure, connectivity, and business-friendly regulations.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  With state-of-the-art facilities and strategic location, GIFT City provides an ideal ecosystem for
                  financial services, fintech companies, and global businesses looking to access the fast-growing Indian
                  market.
                </p>
                <Button asChild>
                  <a href="#features">Discover Our Features</a>
                </Button>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square">
                <img
                  src="/placeholder.svg?height=800&width=800"
                  alt="GIFT City Aerial View"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-muted py-20 md:py-32 px-10">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Services & Features
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                World-Class Infrastructure & Opportunities
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                GIFT City offers a comprehensive ecosystem designed to foster innovation, growth, and global
                connectivity.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Landmark className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">IFSC & Global Finance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    India's first International Financial Services Centre offering a comprehensive range of financial
                    services with world-class regulatory framework.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Smart Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    State-of-the-art buildings, utilities, and urban planning with integrated technology for efficient
                    resource management and sustainable development.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">FinTech & IT Hub</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    A thriving ecosystem for financial technology innovation with dedicated spaces, incubators, and
                    accelerators for startups and established tech companies.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Percent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Tax Benefits & Incentives</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Competitive tax structure with significant exemptions and incentives for businesses operating within
                    GIFT City, making it an attractive destination for global companies.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">World-Class Urban Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Meticulously designed urban spaces with a perfect balance of work and leisure, featuring green
                    spaces, cultural venues, and residential areas.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m7 10 2 2 6-6" />
                    </svg>
                  </div>
                  <CardTitle className="mt-4">Global Connectivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Strategic location with excellent transportation as, advanced telecommunications, and proximity
                    to major international airports and seaports.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Success Stories
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Partners Say
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Hear from businesses and professionals who have experienced the GIFT City advantage.
              </p>
            </div>
            <div className="mt-16">
              <TestimonialSlider />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Get In Touch</div>
              <h2 className="mt-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Join GIFT City?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Contact us to learn more about opportunities and how your business can thrive in India's premier
                financial hub.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-[600px]">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium leading-none">
                          First name
                        </label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium leading-none">
                          Last name
                        </label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium leading-none">
                        Company
                      </label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium leading-none">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-12 px-10">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2">
                <Building2 className="h-6 w-6" />
                <span className="text-xl font-bold">GIFT City</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Gujarat International Finance Tec-City, India's global financial and technology hub.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Quick as</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-sm text-muted-foreground hover:text-primary">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    News & Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Regulatory Framework
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Investment Opportunities
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-muted-foreground"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-sm text-muted-foreground">+91 79 6777 2222</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-muted-foreground"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-sm text-muted-foreground">info@giftcity.in</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-muted-foreground"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-sm text-muted-foreground">GIFT City, Gandhinagar, Gujarat, India - 382355</span>
                </li>
              </ul>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t pt-6">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} GIFT City. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-xs text-muted-foreground hover:text-primary">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-muted-foreground hover:text-primary">
                  Terms of Service
                </a>
                <a href="#" className="text-xs text-muted-foreground hover:text-primary">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  )
}