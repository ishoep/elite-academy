import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Clock, Award } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      category: "Undergraduate Programs",
      items: [
        {
          title: "Computer Science",
          description: "A comprehensive program covering software development, algorithms, and computer systems.",
          duration: "4 years",
          students: "500+",
          icon: <BookOpen className="h-6 w-6 text-blue-500" />
        },
        {
          title: "Business Administration",
          description: "Study management, marketing, finance, and entrepreneurship.",
          duration: "4 years",
          students: "450+",
          icon: <Users className="h-6 w-6 text-blue-500" />
        },
        {
          title: "Engineering",
          description: "Focus on mechanical, electrical, or civil engineering disciplines.",
          duration: "4 years",
          students: "400+",
          icon: <Clock className="h-6 w-6 text-blue-500" />
        }
      ]
    },
    {
      category: "Graduate Programs",
      items: [
        {
          title: "Master of Business Administration",
          description: "Advanced business studies with specializations in various fields.",
          duration: "2 years",
          students: "200+",
          icon: <Award className="h-6 w-6 text-blue-500" />
        },
        {
          title: "Data Science",
          description: "Advanced analytics, machine learning, and statistical analysis.",
          duration: "2 years",
          students: "150+",
          icon: <BookOpen className="h-6 w-6 text-blue-500" />
        },
        {
          title: "Digital Marketing",
          description: "Modern marketing strategies and digital communication.",
          duration: "2 years",
          students: "180+",
          icon: <Users className="h-6 w-6 text-blue-500" />
        }
      ]
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
          <h1 className="text-4xl font-bold mb-6">Our Academic Programs</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our diverse range of academic programs designed to prepare you
            for success in your chosen field.
          </p>
        </motion.div>

        {programs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold mb-8"
            >
              {category.category}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((program, programIndex) => (
                <motion.div
                  key={programIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: programIndex * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    {program.icon}
                    <h3 className="text-xl font-semibold ml-2">{program.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{program.description}</p>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {program.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {program.students} students
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center bg-gray-800 rounded-lg p-8 mt-12"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-gray-300 mb-6">
            Take the first step towards your future. Apply now or contact our
            admissions team for more information.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
            <button className="border border-blue-600 text-blue-400 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              Contact Admissions
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Programs;