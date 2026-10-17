'use client'
import React from 'react'
import { workSamples } from '@/assets/data'
import { IconExternal } from '@/assets/icons'
import { PageHero, Reveal, Section, slugify } from './ui'

const DETAILS = [
    { key: 'objective', label: 'Objective' },
    { key: 'contribution', label: 'My contribution' },
    { key: 'approach', label: 'Approach' },
    { key: 'outcome', label: 'Outcome' },
]

const WorkSamples = () => (
    <>
        <PageHero eyebrow='WORK SAMPLES' title='Copy and content that connects products with people'>
            <p>A selection of landing page copy, email campaigns, advertising copy and video scripts, each written around what the audience needs to hear and what they should do next.</p>
            <ul className='flex flex-wrap gap-2 mt-6'>
                {workSamples.map(({ title }) => (
                    <li key={title}>
                        <a href={`#${slugify(title)}`} className='inline-block text-xs text-white/80 border border-white/20 rounded-full px-3 py-1 hover:bg-white/10 hover:text-white duration-300'>
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </PageHero>

        <Section muted>
            <div className='flex flex-col gap-8'>
                {workSamples.map((sample, index) => {
                    const { title, brand, format, concept, links } = sample
                    return (
                        <Reveal
                            as='article'
                            key={title}
                            id={slugify(title)}
                            delay={0.1}
                            className='scroll-mt-28 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-navy hover:-translate-y-1 hover:shadow-hard duration-500'
                        >
                            <div className='grid lg:grid-cols-3'>
                                <div className='p-6 sm:p-8 lg:border-r border-b lg:border-b-0 border-gray-100 flex flex-col'>
                                    <span className='font-ovo text-5xl text-purple/80 leading-none mb-4'>0{index + 1}</span>
                                    <div className='flex flex-wrap gap-2 mb-4'>
                                        <span className='text-xs text-gray-600 border border-gray-200 rounded-full px-3 py-1'>{format}</span>
                                        {concept && <span className='text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-full px-3 py-1'>Concept project</span>}
                                    </div>
                                    <h2 className='text-2xl font-semibold text-navy leading-tight mb-1'>{title}</h2>
                                    <p className='text-gray-500 mb-6'>{brand}</p>
                                    <div className='mt-auto flex flex-col items-start gap-3'>
                                        {links.map(({ label, url }) => (
                                            <a
                                                key={url}
                                                href={url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple text-white text-sm font-medium hover:bg-purple-dark hover:-translate-y-0.5 duration-300'
                                            >
                                                {label} <IconExternal className='w-4 h-4' />
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <dl className='lg:col-span-2 grid sm:grid-cols-2'>
                                    {DETAILS.map(({ key, label }, i) => (
                                        <div
                                            key={key}
                                            className={`p-6 sm:p-8 border-gray-100 ${i < 2 ? 'border-b' : ''} ${i % 2 === 0 ? 'sm:border-r' : ''} ${i === 2 ? 'border-b sm:border-b-0' : ''} ${key === 'outcome' ? 'bg-purple-light/40' : ''}`}
                                        >
                                            <dt className='text-xs font-semibold tracking-widest text-purple mb-2'>{label.toUpperCase()}</dt>
                                            <dd className='text-sm text-gray-700'>{sample[key]}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </Reveal>
                    )
                })}
            </div>
        </Section>
    </>
)

export default WorkSamples
