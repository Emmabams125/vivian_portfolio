import React from 'react'
import { motion } from 'framer-motion'
import { contactInfo, profileSummary } from '@/assets/data'
import { IconMail, IconLinkedIn, IconQuote } from '@/assets/icons'

const About = () => {
    return (
        <motion.div
            id='about'
            className='w-full px-[8%] xl:px-[10%] py-20 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-start'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-sm font-semibold tracking-widest text-purple mb-2'>ABOUT ME</motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-3xl sm:text-4xl font-semibold text-navy mb-5'>
                        Marketing Professional &amp; Brand Builder
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }} className='text-gray-600 max-w-md mb-5'>
                        I work at the intersection of product, customer and marketing, helping businesses understand their audience, communicate their value clearly and turn interest into users.
                    </motion.p>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className='space-y-2 text-sm text-gray-600 max-w-md mb-8'
                    >
                        {profileSummary.map((item) => (
                            <li key={item} className='flex gap-2'>
                                <span className='text-purple mt-1.5 shrink-0 text-[8px]'>&#9679;</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </motion.ul>

                    <div className='flex items-center gap-3 mb-3'>
                        <span className='w-9 h-9 rounded-full bg-purple-light flex items-center justify-center text-purple hover:-translate-y-1 duration-500'><IconMail className='w-4 h-4' /></span>
                        <a href={`mailto:${contactInfo.email}`} className='text-gray-700 hover:text-purple transition-colors'>{contactInfo.email}</a>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='w-9 h-9 rounded-full bg-purple-light flex items-center justify-center text-purple hover:-translate-y-1 duration-500'><IconLinkedIn className='w-4 h-4' /></span>
                        <a href={contactInfo.linkedinUrl} target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-purple transition-colors'>{contactInfo.linkedinHandle}</a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex flex-col gap-6'
                >
                    <div className='bg-purple-light border border-transparent rounded-2xl p-8 cursor-pointer hover:border-navy hover:-translate-y-1 hover:shadow-hard duration-500'>
                        <IconQuote className='w-7 h-7 text-purple mb-4' />
                        <p className='font-ovo italic text-lg text-navy'>
                            Great marketing isn&apos;t just about selling a product, it&apos;s about solving a problem for the right people.
                        </p>
                    </div>

                    <div className='bg-navy rounded-2xl p-8 flex flex-col gap-2 cursor-pointer hover:-translate-y-1 hover:shadow-hard-purple duration-500'>
                        {['Better Messaging', 'More Users', 'Bigger Impact'].map((line) => (
                            <div key={line} className='flex items-center gap-2 font-ovo italic text-white/90'>
                                <svg viewBox="0 0 24 24" className='w-4 h-4 text-purple-200 shrink-0' fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="m5 13 4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {line}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About
