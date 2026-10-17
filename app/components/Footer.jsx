'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { contactInfo, navLinks } from '@/assets/data'
import { IconLinkedIn, IconMail, Logo } from '@/assets/icons'
import { ButtonLink, Reveal } from './ui'

const Footer = () => {
    const pathname = usePathname()

    return (
        <footer className='w-full bg-navy text-white px-[8%] xl:px-[10%] pt-16 pb-8'>
            {/* The contact page already is the call to action */}
            {pathname !== '/contact' && (
                <Reveal className='max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 mb-10 border-b border-white/10'>
                    <div>
                        <h2 className='text-3xl sm:text-4xl font-semibold mb-3'>Let&apos;s work together</h2>
                        <p className='text-gray-300 max-w-xl'>
                            For marketing strategy, product messaging, content, or growth support, I bring a practical approach focused on reaching the right audience and learning from results.
                        </p>
                    </div>
                    <ButtonLink href='/contact' className='self-start lg:self-auto whitespace-nowrap'>Get in Touch</ButtonLink>
                </Reveal>
            )}

            <div className='max-w-6xl mx-auto grid sm:grid-cols-[1fr_auto_auto] gap-10 pb-10'>
                <div>
                    <Link href='/' className='inline-flex items-center gap-2.5 mb-3'>
                        <Logo className='w-9 h-9 ring-1 ring-white/15 rounded-[10px]' />
                        <span className='font-semibold text-lg'>Vivian Nwije</span>
                    </Link>
                    <p className='text-sm text-gray-400 max-w-xs'>Marketing Strategist · Product Marketing · Growth Marketing</p>
                </div>

                <div>
                    <p className='text-xs font-semibold tracking-widest text-purple-200 mb-3'>PAGES</p>
                    <ul className='grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-300'>
                        {navLinks.map(({ label, href }) => (
                            <li key={href}><Link href={href} className='hover:text-white duration-300'>{label}</Link></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className='text-xs font-semibold tracking-widest text-purple-200 mb-3'>CONTACT</p>
                    <div className='flex flex-col gap-2 text-sm'>
                        <a href={contactInfo.linkedinUrl} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-1 duration-500'>
                            <IconLinkedIn className='w-4 h-4' /> LinkedIn
                        </a>
                        <a href={contactInfo.gmailUrl} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-1 duration-500'>
                            <IconMail className='w-4 h-4' /> {contactInfo.email}
                        </a>
                    </div>
                </div>
            </div>

            <div className='max-w-6xl mx-auto border-t border-white/10 pt-6 text-sm text-gray-400'>
                <p>&copy; {new Date().getFullYear()} Vivian Nwije. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
