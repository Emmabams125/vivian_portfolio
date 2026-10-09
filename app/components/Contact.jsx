import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { contactInfo } from '@/assets/data'
import { IconArrowRight, IconLinkedIn, IconMail } from '@/assets/icons'

// Web3Forms access key — messages are delivered to the inbox this key was created with
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

const inputClass = 'w-full p-3 outline-none border border-gray-300 rounded-xl bg-white text-gray-800 placeholder:text-gray-400 focus:border-purple focus:ring-2 focus:ring-purple/20 duration-300'

const Contact = () => {
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
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            })
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
            setStatus({ state: 'error', message: 'Network error — please try again.' })
        }
    }

    const statusColor = { success: 'text-green-600', error: 'text-red-600', sending: 'text-gray-500' }[status.state]

    return (
        <motion.div
            id='contact'
            className='w-full px-[8%] xl:px-[10%] py-20 scroll-mt-20 bg-gray-50'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className='max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 lg:gap-14'>
                <div className='lg:col-span-2'>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-sm font-semibold tracking-widest text-purple mb-2'>CONTACT</motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-3xl sm:text-4xl font-semibold text-navy mb-3'>Get in Touch</motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }} className='text-gray-600 mb-8'>
                        Have a product to launch, a message to sharpen or users to win? Send me a message and I&apos;ll get back to you as soon as possible.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className='flex flex-col gap-4'
                    >
                        <a href={`mailto:${contactInfo.email}`} className='flex items-center gap-3 bg-white border border-gray-200 rounded-2xl p-4 hover:bg-light-hover hover:border-navy hover:-translate-y-1 hover:shadow-hard duration-500'>
                            <span className='w-10 h-10 rounded-full bg-purple-light flex items-center justify-center text-purple shrink-0'><IconMail className='w-4 h-4' /></span>
                            <span className='min-w-0'>
                                <span className='block text-xs text-gray-500'>Email</span>
                                <span className='block text-sm text-navy font-medium truncate'>{contactInfo.email}</span>
                            </span>
                        </a>
                        <a href={contactInfo.linkedinUrl} target='_blank' rel='noopener noreferrer' className='flex items-center gap-3 bg-white border border-gray-200 rounded-2xl p-4 hover:bg-light-hover hover:border-navy hover:-translate-y-1 hover:shadow-hard duration-500'>
                            <span className='w-10 h-10 rounded-full bg-purple-light flex items-center justify-center text-purple shrink-0'><IconLinkedIn className='w-4 h-4' /></span>
                            <span className='min-w-0'>
                                <span className='block text-xs text-gray-500'>LinkedIn</span>
                                <span className='block text-sm text-navy font-medium truncate'>{contactInfo.linkedinHandle}</span>
                            </span>
                        </a>
                    </motion.div>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    onSubmit={onSubmit}
                    className='lg:col-span-3 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8'
                >
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
                        <textarea name='message' rows='6' placeholder='Tell me about your project or idea...' required className={`${inputClass} resize-y`} />
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
                        {status.state !== 'idle' && status.state !== 'sending' && (
                            <p role='status' className={`text-sm ${statusColor}`}>{status.message}</p>
                        )}
                    </div>
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact
