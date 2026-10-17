'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'

// Fixed series order: Ad 1 is always purple, Ad 2 always orange
const SERIES = [
    { key: 0, swatch: 'bg-series-1' },
    { key: 1, swatch: 'bg-series-2' },
]

const METRICS = [
    { key: 'linkClicks', label: 'Link clicks' },
    { key: 'views', label: 'Views' },
    { key: 'viewers', label: 'Viewers' },
]

const fmt = (n, digits = 0) => n.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits })

const Legend = ({ ads }) => (
    <ul className='flex flex-wrap gap-4 text-sm text-gray-600'>
        {ads.map((ad, i) => (
            <li key={ad.name} className='flex items-center gap-2'>
                <span className={`w-3 h-3 rounded-sm ${SERIES[i].swatch}`} aria-hidden='true' />
                {ad.name}
            </li>
        ))}
    </ul>
)

// One horizontal bar: grows from the baseline, value label at the tip, tooltip on hover/focus
const Bar = ({ value, max, swatch, label, digits = 0, delay = 0 }) => {
    const pct = (value / max) * 100
    return (
        <div className='group relative flex items-center h-6' tabIndex={0} aria-label={`${label}: ${fmt(value, digits)}`}>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay, ease: 'easeOut' }}
                className={`h-5 rounded-r ${swatch} group-hover:brightness-110 group-focus:brightness-110`}
            />
            <span className='ml-2 text-sm font-semibold text-navy tabular-nums'>{fmt(value, digits)}</span>
            <span
                role='tooltip'
                className='pointer-events-none absolute -top-9 z-10 whitespace-nowrap rounded-md bg-navy px-2.5 py-1 text-xs text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 duration-200'
                style={{ left: `min(${pct}%, calc(100% - 9rem))` }}
            >
                {label}: <span className='font-semibold'>{fmt(value, digits)}</span>
            </span>
        </div>
    )
}

const Gridlines = ({ ticks, max }) => (
    <div className='absolute inset-0 pointer-events-none' aria-hidden='true'>
        {ticks.map((t) => (
            <div key={t} className='absolute top-0 bottom-0 border-l border-gray-100' style={{ left: `${(t / max) * 100}%` }} />
        ))}
    </div>
)

const Axis = ({ ticks, max, offsetClass }) => (
    <div className={`relative h-5 mt-2 text-xs text-gray-400 tabular-nums ${offsetClass}`} aria-hidden='true'>
        {ticks.map((t) => (
            <span key={t} className='absolute -translate-x-1/2' style={{ left: `${(t / max) * 100}%` }}>{fmt(t)}</span>
        ))}
    </div>
)

const ChartCard = ({ title, subtitle, children, footer }) => (
    <figure className='bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-navy hover:shadow-hard duration-500'>
        <figcaption className='mb-6'>
            <h3 className='font-semibold text-navy text-lg'>{title}</h3>
            {subtitle && <p className='text-sm text-gray-500 mt-1'>{subtitle}</p>}
        </figcaption>
        {children}
        {footer}
    </figure>
)

export const AdResultsChart = ({ ads }) => {
    const [showTable, setShowTable] = useState(false)
    const max = 1000
    const ticks = [0, 250, 500, 750, 1000]

    return (
        <ChartCard
            title='Results by ad'
            subtitle='Link clicks, views and viewers recorded by Meta for each ad'
            footer={
                <div className='mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3'>
                    <Legend ads={ads} />
                    <button onClick={() => setShowTable((v) => !v)} className='text-sm text-purple font-medium hover:underline' aria-expanded={showTable}>
                        {showTable ? 'Hide table' : 'Show as table'}
                    </button>
                </div>
            }
        >
            <div className='flex flex-col gap-6'>
                {METRICS.map(({ key, label }) => (
                    <div key={key} className='grid grid-cols-[5.5rem_1fr] sm:grid-cols-[7rem_1fr] items-center gap-3'>
                        <span className='text-sm text-gray-600'>{label}</span>
                        <div className='relative pr-12'>
                            <div className='relative'>
                                <Gridlines ticks={ticks} max={max} />
                                <div className='relative flex flex-col gap-0.5'>
                                    {ads.map((ad, i) => (
                                        <Bar key={ad.name} value={ad[key]} max={max} swatch={SERIES[i].swatch} label={`${ad.name} · ${label}`} delay={0.1 * i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-[5.5rem_1fr] sm:grid-cols-[7rem_1fr] gap-3'>
                <span />
                <div className='pr-12'><Axis ticks={ticks} max={max} /></div>
            </div>

            {showTable && (
                <div className='mt-6 overflow-x-auto'>
                    <table className='w-full text-sm text-left'>
                        <thead>
                            <tr className='border-b border-gray-200 text-gray-500'>
                                <th className='py-2 pr-4 font-medium'>Metric</th>
                                {ads.map((ad) => <th key={ad.name} className='py-2 pr-4 font-medium text-right'>{ad.name}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {METRICS.map(({ key, label }) => (
                                <tr key={key} className='border-b border-gray-100'>
                                    <td className='py-2 pr-4 text-gray-700'>{label}</td>
                                    {ads.map((ad) => <td key={ad.name} className='py-2 pr-4 text-right tabular-nums text-navy font-medium'>{fmt(ad[key])}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </ChartCard>
    )
}

export const ClickRateChart = ({ ads }) => {
    const rates = ads.map((ad) => (ad.linkClicks / ad.views) * 100)
    const max = 100
    const ticks = [0, 25, 50, 75, 100]
    const ratio = rates[0] / rates[1]

    return (
        <ChartCard
            title='Link clicks per 100 views'
            subtitle='How often a view turned into a click on each ad'
            footer={
                <p className='mt-6 pt-4 border-t border-gray-100 text-sm text-gray-600'>
                    <span className='font-semibold text-navy'>{ads[0].name}</span> drew about <span className='font-semibold text-navy'>{fmt(ratio, 1)}×</span> the click rate of {ads[1].name}, despite fewer views, a useful signal for which creative and message to build on.
                </p>
            }
        >
            <div className='flex flex-col gap-3'>
                {ads.map((ad, i) => (
                    <div key={ad.name} className='grid grid-cols-[5.5rem_1fr] sm:grid-cols-[7rem_1fr] items-center gap-3'>
                        <span className='flex items-center gap-2 text-sm text-gray-600'>
                            <span className={`w-3 h-3 rounded-sm ${SERIES[i].swatch}`} aria-hidden='true' />
                            {ad.name}
                        </span>
                        <div className='relative pr-12'>
                            <Gridlines ticks={ticks} max={max} />
                            <div className='relative'>
                                <Bar value={rates[i]} max={max} swatch={SERIES[i].swatch} label={`${ad.name} · clicks per 100 views`} digits={1} delay={0.1 * i} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-[5.5rem_1fr] sm:grid-cols-[7rem_1fr] gap-3'>
                <span />
                <div className='pr-12'><Axis ticks={ticks} max={max} /></div>
            </div>
        </ChartCard>
    )
}
