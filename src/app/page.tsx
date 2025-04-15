'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ForceGraph from '../components/ForceGraph';

export default function Home() {
  const handleContactClick = () => {
    window.location.href = 'mailto:eslin@hks.harvard.edu,mhughes4@media.mit.edu';
  };

  const INTEREST_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfWvRyLr1vmKrZkKCs0rpScr5ByXnJk_WfK710zpvEM6f2JNQ/viewform?usp=header';

  // Base path for GitHub Pages
  const basePath = '/lumoviz';

  return (
    <main className="min-h-screen bg-yellow-glow">
      {/* Hero Section with Force Graph */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-yellow-glow to-white">
        <ForceGraph />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 shadow-glow">
              Lumoviz
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Building stronger social movements through relationship-based data collection, analysis, and visualization.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-yellow-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-glow"
              >
                Try Our Tool
              </a>
              <button
                onClick={handleContactClick}
                className="bg-white hover:bg-accent text-primary border-2 border-primary font-bold py-3 px-8 rounded-full transition duration-300 shadow-glow"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center shadow-glow">
              About Us
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-6">
                We're a mission-driven startup born out of the MIT Media Lab and Harvard Kennedy School, building tools to support community organizers, unions, and political movements—locally and internationally.
              </p>
              <p className="text-gray-600 mb-6">
                Our work is deeply informed by collaboration with frontline organizers and the practices of transformative and relational organizing.
              </p>
              <p className="text-gray-600">
                We're creating an open-source, privacy-respecting platform that helps organizers track relationships, map organizational ecosystems, and align their data practices with their values. This work is grounded in community organizing practice and social movement theory, with an emphasis on mutual trust, data sovereignty, and usability in real-world political contexts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-yellow-glow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center shadow-glow">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-glow-lg flex flex-col items-center text-center"
            >
              <div className="w-48 h-48 mb-6">
                <img
                  src={`${basePath}/images/emily-headshot.jpeg`}
                  alt="Emily S. Lin"
                  className="w-full h-full rounded-full object-cover shadow-glow"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Emily S. Lin</h3>
              <p className="text-gray-600 italic mb-4">Co-founder & Director, Practicing Democracy Project</p>
              <p className="text-gray-600">
                Emily brings 20+ years of academic, non-profit, and private sector experience in researching, designing, building, and shipping data tools that support collective learning for human flourishing.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-glow-lg flex flex-col items-center text-center"
            >
              <div className="w-48 h-48 mb-6">
                <img
                  src={`${basePath}/images/maggie-headshot.jpeg`}
                  alt="Maggie Hughes"
                  className="w-full h-full rounded-full object-cover shadow-glow"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Maggie Hughes</h3>
              <p className="text-gray-600 italic mb-4">Co-founder & PhD Candidate, Center for Constructive Communication</p>
              <p className="text-gray-600">
                A designer and researcher working with community organizers to create tools that strengthen democratic practice. Her work combines participatory design and data visualization to build effective movement infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center shadow-glow">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-yellow-glow p-6 rounded-lg shadow-glow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Relationship Tracking</h3>
              <p className="text-gray-600">
                Map and track relationships within your community to build stronger networks and identify key connectors.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-yellow-glow p-6 rounded-lg shadow-glow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Analysis</h3>
              <p className="text-gray-600">
                Analyze organizational ecosystems and identify patterns to strengthen your movement's impact.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-yellow-glow p-6 rounded-lg shadow-glow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy-First</h3>
              <p className="text-gray-600">
                Built with privacy and data sovereignty at its core, ensuring your community's trust and security.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 shadow-glow">
            Ready to Strengthen Your Movement?
          </h2>
          <div className="flex justify-center gap-4">
            <a
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-accent font-bold py-3 px-8 rounded-full transition duration-300 inline-block shadow-glow"
            >
              Get Started Now
            </a>
            <button
              onClick={handleContactClick}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-glow"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 