import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Globe, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">About Academia Elite</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded in 1974, Academia Elite has been at the forefront of educational
            excellence for 50 years, shaping the minds of tomorrow's leaders.
          </p>
        </motion.div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To provide world-class education that empowers students to become
              innovative leaders, critical thinkers, and responsible global citizens
              who make meaningful contributions to society.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be a leading global institution that sets the standard for academic
              excellence, research innovation, and societal impact while fostering
              an inclusive and diverse learning environment.
            </p>
          </motion.div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Award className="h-8 w-8 text-blue-500" />,
              title: "Excellence",
              description: "Committed to the highest standards in education and research"
            },
            {
              icon: <Globe className="h-8 w-8 text-blue-500" />,
              title: "Global Perspective",
              description: "International partnerships and diverse student body"
            },
            {
              icon: <Users className="h-8 w-8 text-blue-500" />,
              title: "Community",
              description: "Strong alumni network and industry connections"
            },
            {
              icon: <BookOpen className="h-8 w-8 text-blue-500" />,
              title: "Innovation",
              description: "Cutting-edge research and modern teaching methods"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg text-center"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* History Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Our History</h2>
          <div className="space-y-8">
            {[
              {
                year: "1974",
                title: "Foundation",
                description: "Academia Elite was established with a vision to provide quality education."
              },
              {
                year: "1985",
                title: "Research Center",
                description: "Opened our first research center focusing on technological innovation."
              },
              {
                year: "1999",
                title: "International Expansion",
                description: "Established international partnerships and exchange programs."
              },
              {
                year: "2010",
                title: "Modern Campus",
                description: "Completed the construction of our state-of-the-art campus."
              },
              {
                year: "2024",
                title: "Today",
                description: "Celebrating 50 years of academic excellence and innovation."
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-24 flex-shrink-0 text-blue-500 font-bold">
                  {event.year}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;