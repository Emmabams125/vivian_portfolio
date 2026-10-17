'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { heroTags, homeIntro } from '@/assets/data'
import { ButtonLink } from './ui'

const Header = () => {
    return (
        <section className='w-full bg-navy text-white pt-36 pb-20 px-[8%] xl:px-[10%] relative overflow-hidden'>
            <div className='absolute -left-32 bottom-0 w-96 h-96 rounded-full bg-purple/15 blur-3xl' aria-hidden='true' />
            <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative'>
                <div>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className='text-xs tracking-widest text-purple-200/80 font-medium mb-4'
                    >
                        {heroTags.join('   |   ')}
                    </motion.p>
                    <motion.h1
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className='text-4xl sm:text-5xl font-semibold leading-tight mb-6'
                    >
                        Hi, I&apos;m <span className='text-purple'>Vivian Nwije</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className='font-ovo text-2xl sm:text-3xl leading-snug text-white/90 max-w-lg mb-6 border-l-2 border-purple pl-5'
                    >
                        {homeIntro.hook}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.85 }}
                        className='text-gray-300 max-w-lg mb-8'
                    >
                        I help businesses reach the right people, communicate their value and encourage action.
                    </motion.p>
                    <div className='flex flex-wrap items-center gap-4'>
                        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.0 }}>
                            <ButtonLink href='/case-study'>View Case Study</ButtonLink>
                        </motion.div>
                        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }}>
                            <ButtonLink href='/work-samples' variant='light'>See Work Samples</ButtonLink>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
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
        </section>
    )
}

export default Header
