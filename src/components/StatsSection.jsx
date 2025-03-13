import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Building, Users, Globe, TrendingUp } from "lucide-react"

function StatsSection() {
  const stats = [
    { label: "Companies", value: "500+", icon: Building, description: "Global businesses have established their presence" },
    { label: "Professionals", value: "25,000+", icon: Users, description: "Skilled workforce driving innovation and growth" },
    { label: "Countries", value: "30+", icon: Globe, description: "International partnerships and collaborations" },
    { label: "Growth", value: "40%", icon: TrendingUp, description: "Year-over-year business expansion rate" },
  ]

  function useCounter(end, duration = 2000) {
    const [count, setCount] = useState(0)
    const countRef = useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            let start = 0
            const endValue = parseInt(end.replace(/\D/g, ""))
            const increment = Math.ceil(endValue / (duration / 16))
            const timer = setInterval(() => {
              start += increment
              if (start > endValue) {
                start = endValue
                clearInterval(timer)
              }
              setCount(start)
            }, 16)
            return () => clearInterval(timer)
          }
        },
        { threshold: 0.5 }
      )

      if (countRef.current) observer.observe(countRef.current)

      return () => observer.disconnect()
    }, [end, duration])

    return { count, countRef }
  }

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16 sm:mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Our Impact in Numbers</h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">Driving economic growth and creating opportunities at an unprecedented scale</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => {
            const { count, countRef } = useCounter(stat.value)
            const displayValue = stat.value.includes("+") ? `${count}+` : stat.value.includes("%") ? `${count}%` : count

            return (
              <motion.div key={index} className="text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                <div className="flex justify-center mb-6">
                  <motion.div className="h-16 sm:h-20 w-16 sm:w-20 rounded-full bg-white/10 flex items-center justify-center">
                    <stat.icon className="h-8 sm:h-10 w-8 sm:w-10" />
                  </motion.div>
                </div>
                <h3 ref={countRef} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">{displayValue}</h3>
                <h4 className="text-xl sm:text-2xl font-semibold mb-3">{stat.label}</h4>
                <p className="text-white/80 text-base sm:text-lg">{stat.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
