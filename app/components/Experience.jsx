import React from 'react'
import { motion } from 'framer-motion'
import { experienceData } from '@/assets/data'
import { IconArrowRight } from '@/assets/icons'

const Experience = () => {
    return (
        <motion.div
            id='experience'
            className='w-full px-[8%] xl:px-[10%] py-16 scroll-mt-20 bg-gray-50'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className='max-w-6xl mx-auto'>
                <div className='flex items-end justify-between flex-wrap gap-3 mb-10'>
                    <div>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-sm font-semibold tracking-widest text-purple mb-2'>EXPERIENCE</motion.p>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-3xl sm:text-4xl font-semibold text-navy'>Where I&apos;ve Worked</motion.h2>
                    </div>
                    <a href="#experience" className='inline-flex items-center gap-1 text-sm text-purple font-medium hover:gap-2 transition-all'>
                        View all experience <IconArrowRight className='w-4 h-4' />
                    </a>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {experienceData.map(({ initials, role, company, period, bullets, selectedWork }, index) => (
                        <motion.div
                            key={company}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 + 0.1 * index }}
                            className='bg-white border border-gray-200 rounded-2xl p-6 flex flex-col cursor-pointer hover:bg-light-hover hover:border-navy hover:-translate-y-1 hover:shadow-hard duration-500'
                        >
                            <span className='w-10 h-10 rounded-lg bg-purple text-white flex items-center justify-center font-semibold mb-4'>{initials}</span>
                            <h3 className='font-semibold text-navy uppercase text-xs tracking-wide mb-1'>{company}</h3>
                            <p className='font-medium text-gray-800'>{role}</p>
                            <p className='text-sm text-gray-500 mb-4'>{period}</p>
                            <ul className='space-y-2 text-sm text-gray-600 flex-1'>
                                {bullets.map((b, i) => (
                                    <li key={i} className='flex gap-2'>
                                        <span className='text-purple mt-1.5 shrink-0'>&#9679;</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                            {selectedWork && (
                                <p className='text-xs text-gray-500 mt-5 pt-4 border-t border-gray-100'>
                                    <span className='font-semibold text-gray-700'>Selected work:</span> {selectedWork.join(' · ')}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Experience
