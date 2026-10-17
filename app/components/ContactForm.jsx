'use client'
import React, { useState } from 'react'
import { contactInfo } from '@/assets/data'
import { IconArrowRight } from '@/assets/icons'

// Web3Forms access key: messages are delivered to the inbox this key was created with
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

const inputClass = 'w-full p-3 outline-none border border-gray-300 rounded-xl bg-white text-gray-800 placeholder:text-gray-400 focus:border-purple focus:ring-2 focus:ring-purple/20 duration-300'

const ContactForm = () => {
    const [status, setStatus] = useState({ state: 'idle', message: '' })

    const onSubmit = async (event) => {
        event.preventDefault()

        if (!WEB3FORMS_KEY) {
            setStatus({ state: 'error', message: `The contact form isn't set up yet. Please email ${contactInfo.email} directly.` })
            return
        }

        setStatus({ state: 'sending', message: 'Sending...' })

        const formData = new FormData(event.target)
        formData.append('access_key', WEB3FORMS_KEY)
        formData.append('subject', `New portfolio message from ${formData.get('name')}`)

        try {
            const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
            const data = await response.json()

            if (data.success) {
                setStatus({ state: 'success', message: 'Message sent successfully! I’ll get back to you soon.' })
                event.target.reset()
            } else {
                console.error('Web3Forms error:', data)
                setStatus({ state: 'error', message: data.message || 'Something went wrong. Please try again.' })
            }
        } catch (error) {
            console.error(error)
            setStatus({ state: 'error', message: 'Network error. Please try again.' })
        }
    }

    const statusColor = { success: 'text-green-600', error: 'text-red-600' }[status.state]

    return (
        <form onSubmit={onSubmit} className='bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-navy hover:shadow-hard duration-500'>
            <p className='text-sm font-semibold tracking-widest text-purple mb-1'>SEND A MESSAGE</p>
            <h2 className='text-2xl font-semibold text-navy mb-6'>Tell me about your project</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5'>
                <label className='block'>
                    <span className='block text-sm font-medium text-navy mb-1.5'>Name</span>
                    <input type='text' name='name' placeholder='Your name' required className={inputClass} />
                </label>
                <label className='block'>
                    <span className='block text-sm font-medium text-navy mb-1.5'>Email</span>
                    <input type='email' name='email' placeholder='you@example.com' required className={inputClass} />
                </label>
            </div>
            <label className='block mb-6'>
                <span className='block text-sm font-medium text-navy mb-1.5'>Message</span>
                <textarea name='message' rows='6' placeholder='What are you working on, and how can I help?' required className={`${inputClass} resize-y`} />
            </label>

            {/* Honeypot field that Web3Forms uses to filter spam bots */}
            <input type='checkbox' name='botcheck' className='hidden' tabIndex={-1} autoComplete='off' />

            <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                <button
                    type='submit'
                    disabled={status.state === 'sending'}
                    className='group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-purple text-white text-sm font-medium hover:bg-purple-dark hover:-translate-y-1 hover:shadow-hard duration-500 disabled:opacity-60 disabled:pointer-events-none'
                >
                    {status.state === 'sending' ? 'Sending...' : 'Send Message'}
                    <IconArrowRight className='w-4 h-4 group-hover:translate-x-1 duration-500' />
                </button>
                {statusColor && <p role='status' className={`text-sm ${statusColor}`}>{status.message}</p>}
            </div>
        </form>
    )
}

export default ContactForm
