'use client'
import React from 'react'
import Image from 'next/image'
import { benvaCaseStudy } from '@/assets/data'
import { IconCheck, IconExternal } from '@/assets/icons'
import { AdResultsChart, ClickRateChart } from './AdCharts'
import { Bullet, PageHero, Reveal, Section, SectionHeading, cardHover } from './ui'

const fmt = (n) => n.toLocaleString('en-US')

const CaseStudy = () => {
    const cs = benvaCaseStudy
    const totalClicks = cs.ads.reduce((sum, ad) => sum + ad.linkClicks, 0)
    const totalViews = cs.ads.reduce((sum, ad) => sum + ad.views, 0)
    const stats = [
        { value: fmt(totalClicks), label: 'Link clicks', note: 'Across both ads' },
        { value: fmt(totalViews), label: 'Ad views', note: 'Across both ads' },
        { value: String(cs.ads.length), label: 'Meta ads reviewed', note: 'Tracked separately' },
        { value: '200+', label: 'Facebook followers', note: 'Grown organically' },
    ]

    return (
        <>
            <PageHero eyebrow={`CASE STUDY | ${cs.company.toUpperCase()}`} title={cs.title}>
                <div className='flex flex-wrap gap-x-10 gap-y-4 text-sm'>
                    <div>
                        <p className='text-gray-400'>Role</p>
                        <p className='text-white font-medium'>{cs.role}</p>
                    </div>
                    <div>
                        <p className='text-gray-400'>Product</p>
                        <p className='text-white font-medium'>Tailoring management app</p>
                    </div>
                    <div>
                        <p className='text-gray-400'>Website</p>
                        <a href={cs.website.url} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-1 text-purple-200 font-medium hover:text-white duration-300'>
                            {cs.website.label} <IconExternal className='w-3.5 h-3.5' />
                        </a>
                    </div>
                </div>
                <ul className='flex flex-wrap gap-2 mt-6'>
                    {cs.channels.map((c) => (
                        <li key={c} className='text-xs text-white/80 border border-white/20 rounded-full px-3 py-1'>{c}</li>
                    ))}
                </ul>
            </PageHero>

            {/* Challenge + contribution */}
            <Section>
                <div className='grid lg:grid-cols-2 gap-10 lg:gap-14'>
                    <div>
                        <SectionHeading eyebrow='THE CHALLENGE' title='Awareness and a clear explanation' className='mb-6' />
                        <Reveal delay={0.3} className='flex items-start gap-4'>
                            <Image src={cs.logo} alt={`${cs.company} logo`} width={56} height={56} className='w-14 h-14 rounded-xl border border-gray-200 shrink-0' />
                            <p className='text-gray-600'>{cs.challenge}</p>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2} className={`bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 ${cardHover}`}>
                        <p className='text-sm font-semibold tracking-widest text-purple mb-4'>MY CONTRIBUTION</p>
                        <ul className='flex flex-col gap-3 text-gray-700'>
                            {cs.contribution.map((item) => <Bullet key={item}>{item}</Bullet>)}
                        </ul>
                    </Reveal>
                </div>
            </Section>

            {/* Metrics */}
            <Section muted>
                <SectionHeading eyebrow='SELECTED PAID CAMPAIGN RESULTS' title='What the Meta ads recorded'>
                    Two separate Meta ads promoted Benva to tailors and fashion designers. Here is what each one recorded.
                </SectionHeading>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8'>
                    {stats.map(({ value, label, note }, i) => (
                        <Reveal key={label} delay={0.1 * i} className={`bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 ${cardHover}`}>
                            <p className='text-3xl sm:text-4xl font-semibold text-navy tabular-nums'>{value}</p>
                            <p className='text-sm font-medium text-gray-700 mt-1'>{label}</p>
                            <p className='text-xs text-gray-500'>{note}</p>
                        </Reveal>
                    ))}
                </div>

                <div className='grid lg:grid-cols-5 gap-6'>
                    <Reveal delay={0.1} className='lg:col-span-3'><AdResultsChart ads={cs.ads} /></Reveal>
                    <Reveal delay={0.2} className='lg:col-span-2'><ClickRateChart ads={cs.ads} /></Reveal>
                </div>

                <Reveal delay={0.1} className='mt-6 flex gap-3 bg-white border border-gray-200 rounded-2xl p-5 text-sm text-gray-600'>
                    <span className='w-6 h-6 rounded-full bg-purple-light text-purple flex items-center justify-center font-semibold shrink-0 text-xs'>i</span>
                    <p>{cs.adsNote}</p>
                </Reveal>

                <div className='mt-12'>
                    <Reveal as='h3' className='font-semibold text-navy text-lg mb-1'>Evidence screenshots</Reveal>
                    <Reveal as='p' delay={0.1} className='text-sm text-gray-500 mb-6'>Original &ldquo;Results from this ad&rdquo; screens from Meta. Click to view full size.</Reveal>
                    <div className='grid sm:grid-cols-2 gap-6 max-w-3xl'>
                        {cs.ads.map((ad, i) => (
                            <Reveal key={ad.name} delay={0.1 * i}>
                                <a href={ad.screenshot} target='_blank' rel='noopener noreferrer' className='group block bg-white border border-gray-200 rounded-2xl p-4 hover:border-navy hover:-translate-y-1 hover:shadow-hard duration-500'>
                                    <div className='relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100'>
                                        <Image
                                            src={ad.screenshot}
                                            alt={`Meta results for ${ad.name}: ${fmt(ad.linkClicks)} link clicks, ${fmt(ad.views)} views, ${fmt(ad.viewers)} viewers`}
                                            fill
                                            sizes='(min-width: 640px) 360px, 90vw'
                                            className='object-cover object-[50%_45%] group-hover:scale-[1.03] duration-700'
                                        />
                                    </div>
                                    <p className='mt-3 text-sm text-gray-700'>
                                        <span className='font-semibold text-navy'>{ad.name}:</span> {fmt(ad.linkClicks)} link clicks, {fmt(ad.views)} views, {fmt(ad.viewers)} viewers
                                    </p>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Approach & learning */}
            <Section>
                <SectionHeading eyebrow='APPROACH & LEARNING' title='How I approached it' />
                <div className='grid sm:grid-cols-2 gap-6'>
                    {cs.approach.map(({ title, text }, i) => (
                        <Reveal key={title} delay={0.1 * (i % 2)} className={`bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 ${cardHover}`}>
                            <span className='font-ovo text-3xl text-purple'>0{i + 1}</span>
                            <h3 className='font-semibold text-lg text-navy mt-2 mb-2'>{title}</h3>
                            <p className='text-gray-600'>{text}</p>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* What it demonstrates */}
            <Section muted>
                <Reveal className='bg-navy text-white rounded-2xl p-6 sm:p-10 grid lg:grid-cols-2 gap-8 items-center hover:shadow-hard-purple duration-500'>
                    <div>
                        <p className='text-sm font-semibold tracking-widest text-purple-200 mb-2'>WHAT THIS WORK DEMONSTRATES</p>
                        <h2 className='text-2xl sm:text-3xl font-semibold'>Practical, multi-channel marketing for an early-stage product</h2>
                    </div>
                    <ul className='flex flex-col gap-3'>
                        {cs.demonstrates.map((item) => (
                            <li key={item} className='flex gap-3 text-white/90'>
                                <span className='w-6 h-6 rounded-full bg-purple/30 text-purple-200 flex items-center justify-center shrink-0'><IconCheck className='w-3.5 h-3.5' /></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </Section>
        </>
    )
}

export default CaseStudy
