'use client'
import React, { useState } from 'react'
import { contactInfo } from '@/assets/data'
import { IconCheck, IconCopy, IconExternal, IconLinkedIn, IconMail } from '@/assets/icons'
import ContactForm from './ContactForm'
import { PageHero, Reveal, Section } from './ui'

const Contact = () => {
    const [copied, setCopied] = useState(false)

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(contactInfo.email)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            // Clipboard can be blocked; the address is visible on the card anyway
        }
    }

    const cardClass = 'group bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:bg-light-hover hover:border-navy hover:-translate-y-1 hover:shadow-hard duration-500'

    return (
        <>
            <PageHero eyebrow='CONTACT' title='Let’s work together'>
                <p>For marketing strategy, product messaging, content, or growth support, I bring a practical approach focused on reaching the right audience and learning from results.</p>
            </PageHero>

            <Section>
                <div className='grid lg:grid-cols-5 gap-6 items-start'>
                    <div className='lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-6'>
                    <Reveal delay={0.1} className={cardClass}>
                        <span className='w-12 h-12 rounded-xl bg-purple-light text-purple flex items-center justify-center mb-5'><IconMail className='w-5 h-5' /></span>
                        <p className='text-sm font-semibold tracking-widest text-purple mb-1'>GMAIL</p>
                        <p className='text-lg sm:text-xl font-semibold text-navy break-all mb-2'>{contactInfo.email}</p>
                        <p className='text-sm text-gray-600 mb-6 flex-1'>Send me an email about your product, campaign or role, and I&apos;ll get back to you as soon as possible.</p>
                        <div className='flex flex-wrap gap-3'>
                            <a href={contactInfo.gmailUrl} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple text-white text-sm font-medium hover:bg-purple-dark duration-300'>
                                Write in Gmail <IconExternal className='w-4 h-4' />
                            </a>
                            <button onClick={copyEmail} className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-navy/20 text-navy text-sm font-medium hover:border-navy duration-300'>
                                {copied ? <><IconCheck className='w-4 h-4 text-green-600' /> Copied</> : <><IconCopy className='w-4 h-4' /> Copy email</>}
                            </button>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2} className={cardClass}>
                        <span className='w-12 h-12 rounded-xl bg-purple-light text-purple flex items-center justify-center mb-5'><IconLinkedIn className='w-5 h-5' /></span>
                        <p className='text-sm font-semibold tracking-widest text-purple mb-1'>LINKEDIN</p>
                        <p className='text-lg sm:text-xl font-semibold text-navy mb-2'>Vivian Nwije</p>
                        <p className='text-sm text-gray-600 mb-6 flex-1'>Connect with me on LinkedIn to see my latest work and send me a message.</p>
                        <div>
                            <a href={contactInfo.linkedinUrl} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple text-white text-sm font-medium hover:bg-purple-dark duration-300'>
                                View LinkedIn profile <IconExternal className='w-4 h-4' />
                            </a>
                        </div>
                    </Reveal>
                    </div>

                    <Reveal delay={0.3} className='lg:col-span-3'>
                        <ContactForm />
                    </Reveal>
                </div>
            </Section>
        </>
    )
}

export default Contact
