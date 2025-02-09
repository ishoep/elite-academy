import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Trophy, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[90vh] flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to Academia Elite
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Empowering minds, shaping futures. Join us in our pursuit of excellence
              in education and innovation.
            </p>
            <Link
              to="/programs"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Programs <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-700 rounded-lg"
            >
              <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-gray-300">Programs Offered</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-700 rounded-lg"
            >
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold">15,000+</h3>
              <p className="text-gray-300">Students Enrolled</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-700 rounded-lg"
            >
              <Trophy className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold">200+</h3>
              <p className="text-gray-300">Awards Won</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-700 rounded-lg"
            >
              <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold">50</h3>
              <p className="text-gray-300">Years of Excellence</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "New Research Center Opening",
                date: "March 15, 2024",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "International Conference Success",
                date: "March 10, 2024",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Student Achievement Awards",
                date: "March 5, 2024",
                image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-blue-400 text-sm mb-2">{news.date}</p>
                  <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                  <Link
                    to="/news"
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                  >
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;