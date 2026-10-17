'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { IconArrowRight } from '@/assets/icons'

export const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

// Shared card hover: lift + hard offset shadow (same feel as the original portfolio)
export const cardHover = 'hover:bg-light-hover hover:border-navy hover:-translate-y-1 hover:shadow-hard duration-500'

// Fade/slide an element in the first time it scrolls into view
export const Reveal = ({ as = 'div', delay = 0, y = 20, className, children, ...rest }) => {
    const Component = motion[as]
    return (
        <Component
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay }}
            className={className}
            {...rest}
        >
            {children}
        </Component>
    )
}

export const SectionHeading = ({ eyebrow, title, children, light = false, center = false, className = '' }) => (
    <div className={`mb-10 ${center ? 'text-center mx-auto' : ''} ${className}`}>
        <Reveal as='p' delay={0.1} className={`text-sm font-semibold tracking-widest mb-2 ${light ? 'text-purple-200' : 'text-purple'}`}>
            {eyebrow}
        </Reveal>
        <Reveal as='h2' delay={0.2} className={`text-3xl sm:text-4xl font-semibold leading-tight ${light ? 'text-white' : 'text-navy'}`}>
            {title}
        </Reveal>
        {children && (
            <Reveal delay={0.3} className={`mt-4 max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}>
                {children}
            </Reveal>
        )}
    </div>
)

// Navy banner at the top of every inner page
export const PageHero = ({ eyebrow, title, children }) => (
    <section className='w-full bg-navy text-white pt-36 pb-16 px-[8%] xl:px-[10%] relative overflow-hidden'>
        <div className='absolute -right-24 -top-24 w-80 h-80 rounded-full bg-purple/20 blur-3xl' aria-hidden='true' />
        <div className='max-w-6xl mx-auto relative'>
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className='text-sm font-semibold tracking-widest text-purple-200 mb-3'
            >
                {eyebrow}
            </motion.p>
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className='text-4xl sm:text-5xl font-semibold leading-tight max-w-3xl'
            >
                {title}
            </motion.h1>
            {children && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className='mt-5 max-w-2xl text-gray-300'
                >
                    {children}
                </motion.div>
            )}
        </div>
    </section>
)

export const Section = ({ id, muted = false, className = '', children }) => (
    <section id={id} className={`w-full px-[8%] xl:px-[10%] py-20 scroll-mt-20 ${muted ? 'bg-gray-50' : ''} ${className}`}>
        <div className='max-w-6xl mx-auto'>{children}</div>
    </section>
)

export const ButtonLink = ({ href, children, variant = 'primary', external = false, className = '', ...rest }) => {
    const styles = {
        primary: 'bg-purple text-white hover:bg-purple-dark hover:shadow-hard',
        outline: 'border border-navy/20 text-navy hover:border-navy hover:bg-light-hover hover:shadow-hard',
        light: 'border border-white/30 text-white hover:bg-white/10 hover:shadow-hard-purple',
    }[variant]
    const cls = `group inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium hover:-translate-y-1 duration-500 ${styles} ${className}`
    const content = <>{children}<IconArrowRight className='w-4 h-4 group-hover:translate-x-1 duration-500' /></>
    if (external) {
        return <a href={href} target='_blank' rel='noopener noreferrer' className={cls} {...rest}>{content}</a>
    }
    return <Link href={href} className={cls} {...rest}>{content}</Link>
}

export const Bullet = ({ children, light = false }) => (
    <li className='flex gap-3'>
        <span className={`mt-2.5 w-1.5 h-1.5 rounded-full shrink-0 ${light ? 'bg-purple-200' : 'bg-purple'}`} />
        <span>{children}</span>
    </li>
)
