import React, { useEffect, useRef, useState } from 'react'
import { navLinks } from '@/assets/data'
import { Logo } from '@/assets/icons'

const Navbar = () => {
    const sideMenuRef = useRef()
    const [activeHref, setActiveHref] = useState(navLinks[0].href)

    useEffect(() => {
        const updateActive = () => {
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
            if (atBottom) {
                setActiveHref(navLinks[navLinks.length - 1].href)
                return
            }
            // The active section is the last one whose top has passed just below the navbar
            let current = navLinks[0].href
            for (const { href } of navLinks) {
                const section = document.querySelector(href)
                if (section && section.getBoundingClientRect().top <= 120) current = href
            }
            setActiveHref(current)
        }

        updateActive()
        window.addEventListener('scroll', updateActive, { passive: true })
        window.addEventListener('resize', updateActive)
        return () => {
            window.removeEventListener('scroll', updateActive)
            window.removeEventListener('resize', updateActive)
        }
    }, [])

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    return (
        <nav className='w-full fixed top-0 z-50 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-gray-100'>
            <a href="#top" className='group flex items-center gap-2.5'>
                <Logo className='w-9 h-9 group-hover:-rotate-6 group-hover:scale-105 duration-500' />
                <span className='font-semibold text-lg text-navy'>Vivian Nwije</span>
            </a>

            <ul className='hidden lg:flex items-center gap-6 xl:gap-8'>
                {navLinks.map(({ label, href }) => (
                    <li key={label}>
                        <a
                            href={href}
                            aria-current={activeHref === href ? 'true' : undefined}
                            className={`relative py-1 text-sm transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:rounded-full after:bg-purple after:origin-left after:transition-transform after:duration-300 ${activeHref === href ? 'text-navy font-medium after:scale-x-100' : 'text-gray-600 hover:text-navy after:scale-x-0'}`}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='flex items-center gap-4'>
                <a href="#contact" className='hidden sm:flex items-center px-6 py-2.5 rounded-full bg-purple text-white text-sm font-medium hover:bg-purple-dark transition-colors'>
                    Get in Touch
                </a>
                <button className='block lg:hidden' onClick={openMenu} aria-label="Open menu">
                    <svg viewBox="0 0 24 24" className='w-6 h-6' fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                    </svg>
                </button>
            </div>

            <ul ref={sideMenuRef} className='flex lg:hidden flex-col gap-5 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white shadow-xl transition-all duration-300'>
                <button className='absolute right-6 top-6' onClick={closeMenu} aria-label="Close menu">
                    <svg viewBox="0 0 24 24" className='w-6 h-6' fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                    </svg>
                </button>
                {navLinks.map(({ label, href }) => (
                    <li key={label}>
                        <a
                            onClick={closeMenu}
                            href={href}
                            aria-current={activeHref === href ? 'true' : undefined}
                            className={`pb-1 border-b-2 transition-colors ${activeHref === href ? 'text-navy font-medium border-purple' : 'text-gray-700 border-transparent'}`}
                        >
                            {label}
                        </a>
                    </li>
                ))}
                <li><a onClick={closeMenu} href="#contact" className='inline-flex px-6 py-2.5 rounded-full bg-purple text-white text-sm font-medium'>Get in Touch</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
