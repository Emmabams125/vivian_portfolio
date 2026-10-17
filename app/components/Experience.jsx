'use client'
import React from 'react'
import Image from 'next/image'
import { education, experienceData } from '@/assets/data'
import { IconCap } from '@/assets/icons'
import { Bullet, PageHero, Reveal, Section, SectionHeading, cardHover } from './ui'

const Experience = () => (
    <>
        <PageHero eyebrow='EXPERIENCE & EDUCATION' title='Where I’ve worked and studied'>
            <p>From leading marketing at an early-stage SaaS product to copywriting and content for brands and organisations.</p>
        </PageHero>

        <Section>
            <SectionHeading eyebrow='EXPERIENCE' title='Professional experience' />
            <ol className='relative border-l-2 border-purple/20 ml-3 sm:ml-5 flex flex-col gap-10'>
                {experienceData.map(({ initials, logo, role, company, period, bullets, selectedWork }, index) => (
                    <Reveal as='li' key={company} delay={0.1 * index} className='relative pl-8 sm:pl-12'>
                        <span className='absolute -left-[11px] top-7 w-5 h-5 rounded-full bg-white border-4 border-purple' aria-hidden='true' />
                        <div className={`bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 ${cardHover}`}>
                            <div className='flex flex-wrap items-start justify-between gap-4 mb-5'>
                                <div className='flex items-center gap-4'>
                                    {logo ? (
                                        <Image src={logo} alt={`${company} logo`} width={48} height={48} className='w-12 h-12 rounded-xl border border-gray-200' />
                                    ) : (
                                        <span className='w-12 h-12 rounded-xl bg-purple text-white flex items-center justify-center font-semibold text-lg'>{initials}</span>
                                    )}
                                    <div>
                                        <h3 className='font-semibold text-lg text-navy'>{role}</h3>
                                        <p className='text-gray-600'>{company}</p>
                                    </div>
                                </div>
                                <span className='text-sm text-purple bg-purple-light rounded-full px-3 py-1'>{period}</span>
                            </div>
                            <ul className='flex flex-col gap-2 text-gray-700'>
                                {bullets.map((b) => <Bullet key={b}>{b}</Bullet>)}
                            </ul>
                            {selectedWork && (
                                <div className='mt-6 pt-5 border-t border-gray-100'>
                                    <p className='text-xs font-semibold tracking-widest text-gray-500 mb-3'>SELECTED WORK</p>
                                    <ul className='flex flex-wrap gap-2'>
                                        {selectedWork.map((w) => (
                                            <li key={w} className='text-sm text-gray-700 border border-gray-200 rounded-full px-3 py-1 hover:border-purple hover:text-purple duration-300'>{w}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </Reveal>
                ))}
            </ol>
        </Section>

        <Section muted>
            <SectionHeading eyebrow='EDUCATION' title='Academic background' />
            <Reveal delay={0.2} className={`bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6 max-w-3xl ${cardHover}`}>
                <span className='w-16 h-16 rounded-2xl bg-purple-light flex items-center justify-center text-purple shrink-0'>
                    <IconCap className='w-8 h-8' />
                </span>
                <div className='flex-1'>
                    <h3 className='text-lg font-semibold text-navy'>{education.school}</h3>
                    <p className='text-gray-700 mt-1'>{education.degree}</p>
                    <p className='text-sm text-gray-500 mt-1'>{education.grade}</p>
                </div>
                <span className='self-start sm:self-center text-sm text-purple bg-purple-light rounded-full px-3 py-1'>Class of {education.year}</span>
            </Reveal>
        </Section>
    </>
)

export default Experience
