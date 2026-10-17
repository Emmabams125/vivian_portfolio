import React from 'react'

export const IconMail = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
    </svg>
)

export const IconLinkedIn = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.9 8.75 23 11 23 14.3V21h-4v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V21h-4V9Z" />
    </svg>
)

export const IconDownload = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
        <path d="M12 3v12m0 0-4-4m4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" strokeLinecap="round" />
    </svg>
)

export const IconArrowRight = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
        <path d="M5 12h14m0 0-6-6m6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export const IconQuote = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H4.5a2.67 2.67 0 0 1 2.67-2.67V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H14.5a2.67 2.67 0 0 1 2.67-2.67V6Z" />
    </svg>
)

export const IconCap = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
        <path d="m2 9 10-5 10 5-10 5-10-5Z" strokeLinejoin="round" />
        <path d="M6 11v5c0 1.1 2.69 2 6 2s6-.9 6-2v-5" />
    </svg>
)

export const IconBadge = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 13h3M8 16h6" strokeLinecap="round" />
    </svg>
)

export const IconWrench = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 4.9L3 17.5V21h3.5l6.3-6.3a4 4 0 0 0 4.9-5.4l-2.6 2.6-2.1-2.1 2.6-2.5Z" strokeLinejoin="round" />
    </svg>
)

const skillIcons = {
    strategy: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
    ),
    research: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
            <circle cx="11" cy="11" r="6" />
            <path d="m20 20-4.5-4.5" strokeLinecap="round" />
        </svg>
    ),
    content: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
            <path d="M4 20h4L19 9l-4-4L4 16v4Z" strokeLinejoin="round" />
            <path d="m13.5 6.5 4 4" />
        </svg>
    ),
    growth: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
            <path d="m3 17 6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 7h6v6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    copy: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" strokeLinejoin="round" />
            <path d="M14 3v6h6M8 13h8M8 17h5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    analysis: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
            <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" strokeLinecap="round" />
        </svg>
    ),
}

export const SkillIcon = ({ name, ...props }) => {
    const Icon = skillIcons[name]
    return Icon ? <Icon {...props} /> : null
}

const toolIcons = {
    google: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.5 2.4 2.5 15.6 0 18M12 3c-2.5 2.4-2.5 15.6 0 18" />
        </svg>
    ),
    meta: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
            <path d="M4 15c0-5 2.5-8 5-8s3.5 3 3 6c-.5 3 .5 6 3 6s5-3 5-8" strokeLinecap="round" />
        </svg>
    ),
    chatgpt: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
            <circle cx="12" cy="12" r="9" />
            <path d="M8 13c1 1.3 2.4 2 4 2s3-.7 4-2M9 10h.01M15 10h.01" strokeLinecap="round" />
        </svg>
    ),
    claude: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 2l2.2 6.8H21l-5.6 4.1 2.1 6.9L12 15.9 6.5 19.8l2.1-6.9L3 8.8h6.8L12 2Z" />
        </svg>
    ),
    flow: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
            <circle cx="5" cy="6" r="2.2" />
            <circle cx="19" cy="18" r="2.2" />
            <path d="M7 7.5 17 16.5M5 8.2V14a4 4 0 0 0 4 4h2" strokeLinecap="round" />
        </svg>
    ),
    analytics: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
            <path d="M4 20V10M12 20V4M20 20v-7" strokeLinecap="round" />
        </svg>
    ),
    mailchimp: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
            <circle cx="12" cy="11" r="7" />
            <path d="M9.5 20c0 .8 1.1 1.3 2.5 1.3s2.5-.5 2.5-1.3" strokeLinecap="round" />
        </svg>
    ),
}

export const ToolIcon = ({ name, ...props }) => {
    const Cmp = toolIcons[name] || toolIcons.google
    return <Cmp {...props} />
}

// Brand mark — keep in sync with app/icon.svg (the favicon)
export const Logo = (props) => (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
        <defs>
            <linearGradient id="logo-bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#1d1e4a" />
                <stop offset="1" stopColor="#10112b" />
            </linearGradient>
            <linearGradient id="logo-accent" x1="46" y1="16" x2="32" y2="48" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#a99ffb" />
                <stop offset="1" stopColor="#6c5cf0" />
            </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="url(#logo-bg)" />
        <path d="M18 17 L32 47" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
        <path d="M46 17 L32 47" stroke="url(#logo-accent)" strokeWidth="8" strokeLinecap="round" />
    </svg>
)

export const IconExternal = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
        <path d="M14 4h6v6M20 4l-9 9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" strokeLinecap="round" />
    </svg>
)

export const IconCheck = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="m5 13 4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export const IconCopy = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15V5a1 1 0 0 1 1-1h10" strokeLinecap="round" />
    </svg>
)
