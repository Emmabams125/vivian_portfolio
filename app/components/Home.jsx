'use client'
import React from 'react'
import Image from 'next/image'
import { benvaCaseStudy, homeIntro, services, servicesClosing, servicesIntro } from '@/assets/data'
import { SkillIcon } from '@/assets/icons'
import { ButtonLink, Reveal, Section, SectionHeading, cardHover } from './ui'

const formatNumber = (n) => n.toLocaleString('en-US')

export const HomeStory = () => (
    <Section>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
            <div>
                <Reveal as='p' delay={0.1} className='text-sm font-semibold tracking-widest text-purple mb-6'>WHY MESSAGING MATTERS</Reveal>
                <ol className='flex flex-col gap-5'>
                    {homeIntro.story.map((line, i) => (
                        <Reveal as='li' key={line} delay={0.2 + i * 0.15} className='flex gap-4'>
                            <span className='font-ovo text-purple text-xl leading-8 w-6 shrink-0'>0{i + 1}</span>
                            <span className='font-ovo text-xl sm:text-2xl text-navy leading-snug'>{line}</span>
                        </Reveal>
                    ))}
                </ol>
            </div>

            <div className='flex flex-col gap-5 text-gray-600'>
                <Reveal delay={0.3} className='bg-navy text-white rounded-2xl p-6 sm:p-8 hover:-translate-y-1 hover:shadow-hard-purple duration-500'>
                    <p className='text-xl sm:text-2xl font-semibold leading-snug'>{homeIntro.turn}</p>
                </Reveal>
                {homeIntro.body.map((p, i) => (
                    <Reveal as='p' key={i} delay={0.4 + i * 0.1}>{p}</Reveal>
                ))}
                <Reveal as='p' delay={0.6} className='font-ovo italic text-lg text-navy border-l-2 border-purple pl-4'>
                    {homeIntro.closing}
                </Reveal>
            </div>
        </div>
    </Section>
)

export const Services = () => (
    <Section muted>
        <SectionHeading eyebrow='SERVICES' title='What I Bring to the Table'>
            {servicesIntro.map((p) => <p key={p} className='mb-2 last:mb-0'>{p}</p>)}
        </SectionHeading>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {services.map(({ title, icon, tags, description }, index) => (
                <Reveal
                    key={title}
                    delay={0.1 * (index % 3)}
                    className={`bg-white border border-gray-200 rounded-2xl p-6 flex flex-col cursor-default ${cardHover}`}
                >
                    <span className='w-11 h-11 rounded-xl bg-purple-light flex items-center justify-center text-purple mb-4'>
                        <SkillIcon name={icon} className='w-5 h-5' />
                    </span>
                    <h3 className='font-semibold text-lg text-navy mb-1'>{title}</h3>
                    <p className='text-xs font-medium text-purple mb-3'>{tags.join(' · ')}</p>
                    <p className='text-sm text-gray-600'>{description}</p>
                </Reveal>
            ))}
        </div>

        <Reveal delay={0.2} className='mt-10 bg-purple-light/60 border border-purple/15 rounded-2xl p-6 sm:p-8'>
            <p className='font-ovo text-lg sm:text-xl text-navy'>{servicesClosing}</p>
        </Reveal>
    </Section>
)

export const FeaturedCaseStudy = () => {
    const { ads, logo, company, title, challenge } = benvaCaseStudy
    const totalClicks = ads.reduce((sum, ad) => sum + ad.linkClicks, 0)
    const totalViews = ads.reduce((sum, ad) => sum + ad.views, 0)
    const stats = [
        { value: formatNumber(totalClicks), label: 'Link clicks across two Meta ads' },
        { value: formatNumber(totalViews), label: 'Ad views across two Meta ads' },
        { value: '200+', label: 'Organic Facebook followers' },
    ]

    return (
        <Section>
            <SectionHeading eyebrow='FEATURED CASE STUDY' title='Benva: marketing an early-stage SaaS product' />
            <Reveal delay={0.2} className='bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-navy hover:-translate-y-1 hover:shadow-hard duration-500'>
                <div className='grid lg:grid-cols-5'>
                    <div className='lg:col-span-3 p-6 sm:p-8'>
                        <div className='flex items-center gap-3 mb-4'>
                            <Image src={logo} alt={`${company} logo`} width={44} height={44} className='w-11 h-11 rounded-lg border border-gray-200' />
                            <div>
                                <p className='font-semibold text-navy'>{company}</p>
                                <p className='text-xs text-gray-500'>{title}</p>
                            </div>
                        </div>
                        <p className='text-gray-600 mb-6'>{challenge}</p>
                        <ButtonLink href='/case-study'>Read the case study</ButtonLink>
                    </div>
                    <div className='lg:col-span-2 bg-navy text-white p-6 sm:p-8 grid grid-cols-1 gap-5 content-center'>
                        {stats.map(({ value, label }) => (
                            <div key={label}>
                                <p className='text-3xl sm:text-4xl font-semibold'>{value}</p>
                                <p className='text-sm text-gray-300'>{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </Section>
    )
}
