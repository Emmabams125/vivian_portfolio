import React from 'react'
import { motion } from 'framer-motion'
import { education } from '@/assets/data'
import { IconCap } from '@/assets/icons'

const Education = () => {
    return (
        <motion.div
            id='education'
            className='w-full px-[8%] xl:px-[10%] py-20 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className='max-w-6xl mx-auto'>
                <div className='mb-10'>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-sm font-semibold tracking-widest text-purple mb-2'>EDUCATION</motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-3xl sm:text-4xl font-semibold text-navy'>Academic Background</motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className='bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 max-w-3xl cursor-pointer hover:bg-light-hover hover:border-navy hover:-translate-y-1 hover:shadow-hard duration-500'
                >
                    <span className='w-14 h-14 rounded-xl bg-purple-light flex items-center justify-center text-purple shrink-0'>
                        <IconCap className='w-7 h-7' />
                    </span>
                    <div>
                        <h3 className='text-lg font-semibold text-navy'>{education.school}</h3>
                        <p className='text-gray-600 mt-1'>{education.degree}</p>
                        <p className='text-sm text-gray-500 mt-1'>{education.year}</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Education
