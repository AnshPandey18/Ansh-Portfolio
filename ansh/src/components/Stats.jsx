import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Books', value: '8+' },
  { label: 'Videos', value: '3+' },
  { label: 'Journals', value: '5+' },
  { label: 'Projects', value: '1+' },
]

export default function Stats() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-center text-2xl font-semibold mb-6 dark:text-white text-black">Highlights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex flex-col items-center justify-center p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/5 shadow-md"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 bg-gradient-to-tr from-indigo-500 to-pink-500 text-white shadow-md">
                <span className="font-bold">{s.value}</span>
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-300 dark:text-gray-200">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
