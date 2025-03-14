
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "CEO, Global Finance Ltd",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "GIFT City has transformed our business operations. The world-class infrastructure and regulatory framework have enabled us to expand our global footprint while maintaining a strong presence in the Indian market.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Founder, TechInnovate",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "As a fintech startup, GIFT City provided us with the perfect ecosystem to grow. The support from regulatory bodies and access to global financial institutions has been instrumental in our success.",
  },
  {
    id: 3,
    name: "John Williams",
    position: "Managing Director, International Banking Corp",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The tax incentives and business-friendly environment at GIFT City have made it an attractive destination for our IFSC operations. The smart infrastructure and quality of life for our employees are unparalleled.",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const prev = () => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full">
              <Card className="mx-auto max-w-[800px] border-none bg-transparent shadow-none">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center text-center">
                    <Quote className="h-12 w-12 text-primary/20" />
                    <blockquote className="mt-6 text-xl font-medium leading-relaxed md:text-2xl">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="mt-8 flex items-center">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4 text-left">
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => {
            prev()
            setAutoplay(false)
          }}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index === current ? "bg-primary" : "bg-muted-foreground/30"}`}
              onClick={() => {
                setCurrent(index)
                setAutoplay(false)
              }}
            >
              <span className="sr-only">Go to testimonial {index + 1}</span>
            </button>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => {
            next()
            setAutoplay(false)
          }}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}