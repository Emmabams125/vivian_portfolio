'use client'
import React from 'react'
import Image from 'next/image'
import { aboutWork, focusAreas, homeIntro, profileSummary, skills, tools } from '@/assets/data'
import { IconCheck, IconWrench, ToolIcon } from '@/assets/icons'
import { Bullet, ButtonLink, PageHero, Reveal, Section, SectionHeading, cardHover } from './ui'

const About = () => (
    <>
        <PageHero eyebrow='ABOUT ME' title='I help products communicate their value clearly'>
            <p>Marketing strategist working at the intersection of product, customer and marketing.</p>
        </PageHero>

        <Section>
            <div className='grid lg:grid-cols-5 gap-10 lg:gap-14 items-start'>
                <Reveal delay={0.1} className='lg:col-span-2'>
                    <Image
                        src='/vivian-profile.png'
                        alt='Portrait of Vivian Nwije'
                        width={1145}
                        height={1374}
                        sizes='(min-width: 1024px) 400px, 90vw'
                        className='w-full max-w-sm h-auto rounded-[2rem] hover:-translate-y-1 hover:shadow-hard duration-500'
                    />
                </Reveal>
                <div className='lg:col-span-3'>
                    <SectionHeading eyebrow='ABOUT MY WORK' title='Reaching the people most likely to need a product' className='mb-6' />
                    <Reveal as='p' delay={0.3} className='text-gray-600 text-lg mb-6'>{aboutWork}</Reveal>
                    <Reveal as='p' delay={0.35} className='text-gray-600 mb-8'>{homeIntro.body[1]}</Reveal>

                    <Reveal delay={0.4} className={`bg-white border border-gray-200 rounded-2xl p-6 ${cardHover}`}>
                        <p className='text-sm font-semibold tracking-widest text-purple mb-4'>FOCUS AREAS</p>
                        <ul className='grid sm:grid-cols-2 gap-3'>
                            {focusAreas.map((area) => (
                                <li key={area} className='flex gap-3 text-sm text-gray-700'>
                                    <span className='w-5 h-5 rounded-full bg-purple-light text-purple flex items-center justify-center shrink-0 mt-0.5'><IconCheck className='w-3 h-3' /></span>
                                    {area}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
            </div>
        </Section>

        <Section muted>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-14'>
                <div>
                    <SectionHeading eyebrow='PROFILE SUMMARY' title='How I work' className='mb-6' />
                    <Reveal as='ul' delay={0.3} className='flex flex-col gap-3 text-gray-700'>
                        {profileSummary.map((item) => <Bullet key={item}>{item}</Bullet>)}
                    </Reveal>
                </div>
                <div>
                    <SectionHeading eyebrow='SKILLS' title='Core skills' className='mb-6' />
                    <Reveal delay={0.3} className='flex flex-wrap gap-2'>
                        {skills.map((skill) => (
                            <span key={skill} className='text-sm text-purple bg-white border border-purple/20 rounded-full px-4 py-2 hover:bg-purple hover:text-white hover:-translate-y-0.5 duration-500 cursor-default'>{skill}</span>
                        ))}
                    </Reveal>
                </div>
            </div>
        </Section>

        <Section>
            <Reveal className='bg-navy text-white rounded-2xl p-6 sm:p-8 hover:shadow-hard-purple duration-500'>
                <p className='flex items-center gap-2 text-sm font-semibold tracking-widest text-purple-200 mb-6'>
                    <IconWrench className='w-4 h-4' /> TOOLS I USE
                </p>
                <ul className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
                    {tools.map(({ name, icon }) => (
                        <li key={name} className='flex items-center gap-3 text-sm text-white/90 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 hover:bg-white/10 hover:border-purple-200/50 hover:-translate-y-1 duration-500'>
                            <span className='w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-purple-200 shrink-0'>
                                <ToolIcon name={icon} className='w-4 h-4' />
                            </span>
                            {name}
                        </li>
                    ))}
                </ul>
            </Reveal>
            <Reveal delay={0.1} className='mt-10 flex flex-wrap gap-4'>
                <ButtonLink href='/experience'>See my experience</ButtonLink>
                <ButtonLink href='/case-study' variant='outline'>Read the Benva case study</ButtonLink>
            </Reveal>
        </Section>
    </>
)

export default About
