import React from 'react'
import { motion } from 'framer-motion'
import { socialLinks, sideNotes } from '@/assets/data'
import { IconArrowRight, IconLinkedIn, IconX, IconInstagram, IconMail } from '@/assets/icons'

const Footer = () => {
    return (
        <motion.div
            className='w-full bg-navy text-white px-[8%] xl:px-[10%] pt-16 pb-8'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className='max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10'>
                <div>
                    <h2 className='text-3xl sm:text-4xl font-semibold mb-3'>Let&apos;s Work Together</h2>
                    <p className='text-gray-300 max-w-md'>
                        I&apos;m always open to new opportunities, collaborations and exciting projects. Feel free to reach out.
                    </p>
                </div>
                <div className='flex items-center gap-6'>
                    <a href='#contact' className='inline-flex items-center gap-2 px-7 py-3 rounded-full bg-purple hover:bg-purple-dark transition-colors text-sm font-medium whitespace-nowrap'>
                        Get in Touch <IconArrowRight className='w-4 h-4' />
                    </a>
                    <div className='flex items-center gap-4'>
                        <a href={socialLinks.linkedin} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='text-white/70 hover:text-white hover:-translate-y-1 duration-500'><IconLinkedIn className='w-5 h-5' /></a>
                        <a href={socialLinks.twitter} target='_blank' rel='noopener noreferrer' aria-label='X' className='text-white/70 hover:text-white hover:-translate-y-1 duration-500'><IconX className='w-5 h-5' /></a>
                        <a href={socialLinks.instagram} target='_blank' rel='noopener noreferrer' aria-label='Instagram' className='text-white/70 hover:text-white hover:-translate-y-1 duration-500'><IconInstagram className='w-5 h-5' /></a>
                        <a href={socialLinks.mail} aria-label='Email' className='text-white/70 hover:text-white hover:-translate-y-1 duration-500'><IconMail className='w-5 h-5' /></a>
                    </div>
                </div>
            </div>

            <div className='max-w-6xl mx-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400'>
                <p>&copy; {new Date().getFullYear()} Vivian Nwije. All rights reserved.</p>
                <ul className='flex items-center gap-6'>
                    {sideNotes.map((note) => <li key={note}>{note}</li>)}
                </ul>
            </div>
        </motion.div>
    )
}

export default Footer
