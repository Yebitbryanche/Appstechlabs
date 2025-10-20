'use client';

import { motion } from 'framer-motion';
import { images } from '../../types/image';

export default function AboutAppstechLabs() {
  return (
    <div className="flex flex-col w-full">
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full h-[60vh] flex flex-col justify-center items-center bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${images.background})`,
        }}
      >
        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About AppstechLabs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg leading-relaxed"
          >
            AppsTech Labs is a solution center created to showcase existing
            technologies for our customers as well as develop cutting edge ones.
            lorem ipsum this is even better lets make this mind blowing
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20 bg-white w-full flex justify-center">
        <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#9B2C3F] text-white rounded-3xl p-12 flex flex-col justify-center items-center shadow-lg relative"
          >
            <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-white"></div>
            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-white"></div>
            <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-white"></div>
            <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-white"></div>
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">
                Lorem Ipsum dolor sit sans
              </p>
              <p className="text-lg font-semibold">serif</p>
              <p className="text-base mt-4">This is just a dummy text</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[images.first, images.second, images.third, images.fourth].map(
              (img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={`gallery-${idx}`}
                  className="rounded-2xl object-cover w-full h-48"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                />
              )
            )}
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-[#0052A3] text-white w-full"
      >
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
          >
            How It Started
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 30, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute -top-4 right-4 md:right-8 flex items-center gap-2"
          >
            <img
              src={images.fifth}
              alt="Jane Doe"
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
            />
            <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
              Jane Doe
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute -bottom-4 left-4 md:left-8 flex items-center gap-2"
          >
            <img
              src={images.sixth}
              alt="John Doe"
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
            />
            <span className="bg-pink-400 text-white px-3 py-1 rounded-full text-sm font-medium">
              John Doe
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg leading-relaxed text-center px-4 md:px-16"
          >
            AppsTech Labs is a solution center created to showcase existing
            technologies for our customers as well as develop cutting edge ones.
            lorem ipsum this is even better lets make this mind blowing
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 w-full flex flex-col items-center bg-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Founder</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0"
          >
            <img
              src={images.seventh}
              alt="Rebecca Enonchong"
              className="w-56 h-56 rounded-full object-cover shadow-xl"
            />
            <motion.img
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              src={images.eighth}
              alt="Rebecca Enonchong casual"
              className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left max-w-md mt-8 md:mt-0"
          >
            <h3 className="text-2xl font-bold mb-4">Rebecca Enonchong</h3>
            <p className="text-gray-700 leading-relaxed">
              a Cameroonian technology entrepreneur and also the founder and CEO
              of AppsTech. She is best known for her work promoting technology
              in Africa.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
