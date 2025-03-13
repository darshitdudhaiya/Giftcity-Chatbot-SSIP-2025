import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, ChevronRight } from "lucide-react"

function NewsSection() {
    const [activeTab, setActiveTab] = useState("all")
  
    const newsCategories = [
      { id: "all", label: "All News" },
      { id: "business", label: "Business" },
      { id: "technology", label: "Technology" },
      { id: "events", label: "Events" },
    ]
  
    const newsItems = [
      {
        id: 1,
        title: "New International Business Hub Opens",
        excerpt: "The latest addition to our business district welcomes companies from around the globe.",
        date: "June 15, 2023",
        category: "business",
        image: "https://giftgujarat.in/assets/infrastructure/c4.webp",
      },
      {
        id: 2,
        title: "Tech Innovation Summit 2023",
        excerpt: "Join industry leaders for our annual technology conference showcasing cutting-edge innovations.",
        date: "July 22, 2023",
        category: "events",
        image: "https://giftgujarat.in/assets/infrastructure/c4.webp",
      },
      {
        id: 3,
        title: "Smart City Infrastructure Expansion",
        excerpt: "New smart infrastructure developments set to transform urban living and working experiences.",
        date: "May 8, 2023",
        category: "technology",
        image: "https://giftgujarat.in/assets/infrastructure/c4.webp",
      },
      {
        id: 4,
        title: "Global Finance Forum Announced",
        excerpt: "Leading financial institutions to gather for discussions on the future of global finance.",
        date: "August 3, 2023",
        category: "events",
        image: "https://giftgujarat.in/assets/infrastructure/c4.webp",
      },
      {
        id: 5,
        title: "Sustainable Development Initiative Launched",
        excerpt: "New program aims to make our business district carbon-neutral by 2030.",
        date: "April 22, 2023",
        category: "business",
        image: "https://giftgujarat.in/assets/infrastructure/c4.webp",
      },
      {
        id: 6,
        title: "AI Research Center Established",
        excerpt: "State-of-the-art facility will drive advancements in artificial intelligence and machine learning.",
        date: "September 10, 2023",
        category: "technology",
        image: "https://giftgujarat.in/assets/infrastructure/c4.webp",
      },
    ]
  
    const filteredNews = activeTab === "all" ? newsItems : newsItems.filter((item) => item.category === activeTab)
  
    return (
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3e4d64] mb-6 drop-shadow-md">
              Latest News & Updates
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto tracking-wide">
              Stay informed about the latest developments, events, and opportunities.
            </p>
          </motion.div>
  
          <div className="w-full">
            <motion.div
              className="flex justify-center mb-12 overflow-x-auto pb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-100 rounded-full p-2 shadow-md flex flex-wrap justify-center">
                {newsCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`px-4 sm:px-8 py-2 sm:py-3 m-1 sm:m-2 rounded-full transition-all text-base sm:text-lg font-medium ${
                      activeTab === category.id
                        ? "bg-emerald-700 text-white shadow-lg"
                        : "bg-white text-[#3e4d64] border border-[#3e4d64] hover:bg-[#6b7a99] hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
  
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {filteredNews.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      y: -15,
                      transition: { duration: 0.3 },
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <div className="h-full overflow-hidden rounded-xl shadow-md bg-white">
                      <div className="relative h-56 w-full overflow-hidden">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {item.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.date}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 hover:text-emerald-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-5 text-base sm:text-lg">{item.excerpt}</p>
                        <motion.button
                          className="px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all text-base sm:text-lg font-medium border border-[#3e4d64] bg-white text-[#3e4d64] hover:bg-emerald-600 hover:text-white hover:border-emerald-600 shadow-md flex items-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Read more
                          <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
  
          <div className="mt-16 text-center">
            <motion.button
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-md text-lg font-medium transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View All News
            </motion.button>
          </div>
        </div>
      </section>
    )
  }
  

export default NewsSection
