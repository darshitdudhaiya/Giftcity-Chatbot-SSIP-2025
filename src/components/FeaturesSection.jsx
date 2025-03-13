import { motion } from "framer-motion";
import { Globe, Monitor, Lightbulb, TrendingUp, Users, Zap } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Global Connectivity",
      description:
        "Connect with international markets and businesses through our world-class infrastructure and network.",
      icon: Globe,
    },
    {
      title: "Smart Infrastructure",
      description: "Experience cutting-edge technology integrated into every aspect of the business environment.",
      icon: Monitor,
    },
    {
      title: "Innovation Hub",
      description: "Join a thriving ecosystem of innovators, startups, and established businesses driving change.",
      icon: Lightbulb,
    },
    {
      title: "Growth Opportunities",
      description: "Access unparalleled opportunities for business expansion and market penetration.",
      icon: TrendingUp,
    },
    {
      title: "Talent Pool",
      description: "Tap into a diverse pool of skilled professionals and industry experts.",
      icon: Users,
    },
    {
      title: "Fast-Track Approvals",
      description: "Benefit from streamlined regulatory processes and business-friendly policies.",
      icon: Zap,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our Business District
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advantages that make us the premier destination for businesses looking to thrive in the global
            economy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="h-full border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 bg-white overflow-hidden group">
                <div className="p-8">
                  <div className="h-16 w-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-emerald-600 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}