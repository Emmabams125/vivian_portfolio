'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/assets/data'
import { IconDownload, Logo } from '@/assets/icons'

const isActive = (pathname, href) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

const Navbar = () => {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav className={`w-full fixed top-0 z-50 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between backdrop-blur-md duration-300 bg-white/95 border-b ${scrolled ? 'border-gray-100 shadow-sm' : 'border-transparent'}`}>
            <Link href='/' className='group flex items-center gap-2.5'>
                <Logo className='w-9 h-9 group-hover:-rotate-6 group-hover:scale-105 duration-500' />
                <span className='font-semibold text-lg text-navy'>Vivian Nwije</span>
            </Link>

            <ul className='hidden lg:flex items-center gap-6 xl:gap-8'>
                {navLinks.map(({ label, href }) => {
                    const active = isActive(pathname, href)
                    return (
                        <li key={href}>
                            <Link
                                href={href}
                                aria-current={active ? 'page' : undefined}
                                className={`relative py-1 text-sm transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:rounded-full after:bg-purple after:origin-left after:transition-transform after:duration-300 ${active ? 'text-navy font-medium after:scale-x-100' : 'text-gray-600 hover:text-navy after:scale-x-0 hover:after:scale-x-50'}`}
                            >
                                {label}
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <div className='flex items-center gap-4'>
                <a
                    href='/resume.pdf'
                    download='Vivian_Nwije_Resume.pdf'
                    className='hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple text-white text-sm font-medium hover:bg-purple-dark hover:-translate-y-0.5 hover:shadow-hard duration-500'
                >
                    Resume <IconDownload className='w-4 h-4' />
                </a>
                <button className='block lg:hidden text-navy' onClick={() => setMenuOpen(true)} aria-label='Open menu' aria-expanded={menuOpen}>
                    <svg viewBox='0 0 24 24' className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth='1.8'>
                        <path d='M4 7h16M4 12h16M4 17h16' strokeLinecap='round' />
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`lg:hidden fixed inset-0 bg-navy/40 duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMenuOpen(false)}
                aria-hidden='true'
            />
            <ul className={`flex lg:hidden flex-col gap-5 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-white shadow-xl duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button className='absolute right-6 top-6 text-navy' onClick={() => setMenuOpen(false)} aria-label='Close menu'>
                    <svg viewBox='0 0 24 24' className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth='1.8'>
                        <path d='M6 6l12 12M18 6 6 18' strokeLinecap='round' />
                    </svg>
                </button>
                {navLinks.map(({ label, href }) => {
                    const active = isActive(pathname, href)
                    return (
                        <li key={href}>
                            <Link
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                aria-current={active ? 'page' : undefined}
                                className={`pb-1 border-b-2 transition-colors ${active ? 'text-navy font-medium border-purple' : 'text-gray-700 border-transparent'}`}
                            >
                                {label}
                            </Link>
                        </li>
                    )
                })}
                <li>
                    <a href='/resume.pdf' download='Vivian_Nwije_Resume.pdf' onClick={() => setMenuOpen(false)} className='inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple text-white text-sm font-medium'>
                        Resume <IconDownload className='w-4 h-4' />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
