import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { caseStudies } from '@/assets/data'

const Bullets = ({ items }) => (
    <ul className='space-y-2 text-sm text-gray-600'>
        {items.map((item, i) => (
            <li key={i} className='flex gap-2'>
                <span className='text-purple mt-1.5 shrink-0 text-[8px]'>&#9679;</span>
                <span>{item}</span>
            </li>
        ))}
    </ul>
)

const CaseStudies = () => {
    return (
        <motion.div
            id='case-studies'
            className='w-full px-[8%] xl:px-[10%] py-20 scroll-mt-20 bg-gray-50'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className='max-w-6xl mx-auto'>
                <div className='mb-10'>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-sm font-semibold tracking-widest text-purple mb-2'>CASE STUDIES</motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-3xl sm:text-4xl font-semibold text-navy mb-3'>Selected Work &amp; Results</motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }} className='text-gray-600 max-w-2xl'>
                        A closer look at the problems I worked on, how I approached them and what came out of it.
                    </motion.p>
                </div>

                <div className='flex flex-col gap-8'>
                    {caseStudies.map(({ initials, logo, company, title, category, overview, challenge, approach, results, tags }) => (
                        <motion.article
                            key={company}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className='bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-navy hover:-translate-y-1 hover:shadow-hard duration-500'
                        >
                            <div className='p-6 sm:p-8 border-b border-gray-100'>
                                <div className='flex items-center gap-3 mb-4'>
                                    {logo ? (
                                        <Image src={logo} alt={`${company} logo`} width={40} height={40} className='w-10 h-10 rounded-lg object-cover border border-gray-200 shrink-0' />
                                    ) : (
                                        <span className='w-10 h-10 rounded-lg bg-purple text-white flex items-center justify-center font-semibold shrink-0'>{initials}</span>
                                    )}
                                    <div>
                                        <p className='font-semibold text-navy uppercase text-xs tracking-wide'>{company}</p>
                                        <p className='text-xs text-gray-500'>{category}</p>
                                    </div>
                                </div>
                                <h3 className='text-xl sm:text-2xl font-semibold text-navy mb-3'>{title}</h3>
                                <p className='text-gray-600 max-w-3xl'>{overview}</p>
                            </div>

                            <div className='grid lg:grid-cols-3'>
                                <div className='p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-gray-100'>
                                    <p className='text-xs font-semibold tracking-widest text-purple mb-3'>THE CHALLENGE</p>
                                    <p className='text-sm text-gray-600'>{challenge}</p>
                                </div>
                                <div className='p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-gray-100'>
                                    <p className='text-xs font-semibold tracking-widest text-purple mb-3'>MY APPROACH</p>
                                    <Bullets items={approach} />
                                </div>
                                <div className='p-6 sm:p-8 bg-purple-light/40'>
                                    <p className='text-xs font-semibold tracking-widest text-purple mb-3'>RESULTS</p>
                                    <Bullets items={results} />
                                </div>
                            </div>

                            <div className='px-6 sm:px-8 py-4 border-t border-gray-100 flex flex-wrap gap-2'>
                                {tags.map((tag) => (
                                    <span key={tag} className='text-xs text-gray-600 border border-gray-200 rounded-full px-3 py-1 hover:bg-light-hover hover:border-purple hover:text-purple duration-500'>{tag}</span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default CaseStudies
