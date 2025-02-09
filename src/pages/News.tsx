import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const News = () => {
  const news = [
    {
      title: "New Research Center Opening",
      date: "March 15, 2024",
      author: "Dr. Sarah Johnson",
      category: "Research",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Academia Elite announces the opening of its new Advanced Research Center, focusing on artificial intelligence and sustainable technologies."
    },
    {
      title: "International Conference Success",
      date: "March 10, 2024",
      author: "Prof. Michael Chen",
      category: "Events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "The annual International Education Conference hosted by Academia Elite saw record attendance with delegates from over 50 countries."
    },
    {
      title: "Student Achievement Awards",
      date: "March 5, 2024",
      author: "Emma Williams",
      category: "Student Life",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Outstanding students were recognized at the annual Achievement Awards ceremony for their academic excellence and community contributions."
    },
    {
      title: "New Partnership with Tech Giants",
      date: "February 28, 2024",
      author: "Dr. Robert Taylor",
      category: "Partnerships",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Academia Elite partners with leading tech companies to provide enhanced internship and career opportunities for students."
    },
    {
      title: "Sustainability Initiative Launch",
      date: "February 20, 2024",
      author: "Prof. Lisa Anderson",
      category: "Campus",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "New campus-wide sustainability initiative aims to achieve carbon neutrality by 2030."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Latest News</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and announcements
            from Academia Elite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8">
                <div className="md:col-span-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-3">
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                    <div className="flex items-center ml-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                    <div className="flex items-center ml-4">
                      <User className="h-4 w-4 mr-1" />
                      {item.author}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                  <p className="text-gray-300 mb-6">{item.excerpt}</p>
                  <button className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;