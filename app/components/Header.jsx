import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { heroTags } from '@/assets/data'
import { IconArrowRight, IconDownload } from '@/assets/icons'

const Header = () => {
    return (
        <div id='top' className='w-full bg-navy text-white pt-36 pb-20 px-[8%] xl:px-[10%]'>
            <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center'>
                <div>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className='text-xs tracking-widest text-purple-200/80 font-medium mb-4'>
                        {heroTags.join('   |   ')}
                    </motion.p>
                    <motion.h1
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className='text-4xl sm:text-5xl font-semibold leading-tight mb-5'
                    >
                        Hi, I&apos;m <span className='text-purple'>Vivian Nwije</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className='text-gray-200 max-w-md mb-4'
                    >
                        I help businesses understand their audience, communicate their value clearly and turn interest into users.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.85 }}
                        className='text-gray-400 text-sm max-w-lg mb-8'
                    >
                        I&apos;m a marketing professional with experience in product marketing, digital marketing, copywriting, audience research and customer acquisition. Currently, I&apos;m the CMO at Benva, an early-stage SaaS product, where I lead positioning, customer research, content and user acquisition across organic and paid channels.
                    </motion.p>
                    <div className='flex flex-wrap items-center gap-4'>
                        <motion.a
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            href="#experience"
                            className='group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-purple hover:bg-purple-dark hover:-translate-y-1 hover:shadow-hard-purple duration-500 text-sm font-medium'
                        >
                            View My Work <IconArrowRight className='w-4 h-4 group-hover:translate-x-1 duration-500' />
                        </motion.a>
                        <motion.a
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            href="/resume.pdf"
                            download='Vivian_Nwije_Resume.pdf'
                            className='inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 hover:bg-white/10 hover:-translate-y-1 duration-500 text-sm font-medium'
                        >
                            Download Resume <IconDownload className='w-4 h-4' />
                        </motion.a>
                    </div>
                </div>

                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                    className='relative flex justify-center lg:justify-end'
                >
                    <Image
                        src='/vivian-profile.png'
                        alt='Portrait of Vivian Nwije'
                        width={1145}
                        height={1374}
                        preload
                        sizes='(min-width: 640px) 384px, 90vw'
                        className='w-full max-w-sm h-auto rounded-[2.5rem] hover:-translate-y-1 hover:shadow-hard-purple duration-500'
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Header
