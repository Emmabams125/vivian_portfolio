import React from 'react'
import { motion } from 'framer-motion'
import { skillGroups, tools } from '@/assets/data'
import { IconWrench, SkillIcon, ToolIcon } from '@/assets/icons'

const Skills = () => {
    return (
        <motion.div
            id='skills'
            className='w-full px-[8%] xl:px-[10%] py-20 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className='max-w-6xl mx-auto'>
                <div className='mb-10'>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className='text-sm font-semibold tracking-widest text-purple mb-2'>SKILLS</motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-3xl sm:text-4xl font-semibold text-navy mb-3'>What I Bring to the Table</motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }} className='text-gray-600 max-w-2xl'>
                        A mix of strategy, research, writing and growth skills that help products find their audience and turn interest into users.
                    </motion.p>
                </div>

                <div className='grid sm:grid-cols-2 gap-6 mb-6'>
                    {skillGroups.map(({ title, icon, description, skills }, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 + 0.1 * index }}
                            className='bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer hover:bg-light-hover hover:border-navy hover:-translate-y-1 hover:shadow-hard duration-500'
                        >
                            <div className='flex items-center gap-3 mb-3'>
                                <span className='w-10 h-10 rounded-lg bg-purple-light flex items-center justify-center text-purple shrink-0'>
                                    <SkillIcon name={icon} className='w-5 h-5' />
                                </span>
                                <h3 className='font-semibold text-navy'>{title}</h3>
                            </div>
                            <p className='text-sm text-gray-600 mb-4'>{description}</p>
                            <div className='flex flex-wrap gap-2'>
                                {skills.map((skill) => (
                                    <span key={skill} className='text-xs text-purple bg-purple-light rounded-full px-3 py-1.5 hover:bg-purple hover:text-white duration-500'>{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className='bg-navy text-white rounded-2xl p-6 sm:p-8 hover:-translate-y-1 hover:shadow-hard-purple duration-500'
                >
                    <p className='flex items-center gap-2 text-xs font-semibold tracking-widest text-purple-200 mb-5'>
                        <IconWrench className='w-4 h-4' /> TOOLS I USE
                    </p>
                    <ul className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
                        {tools.map(({ name, icon }) => (
                            <li key={name} className='flex items-center gap-3 text-sm text-white/90 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 cursor-pointer hover:bg-white/10 hover:border-purple-200/50 hover:-translate-y-1 duration-500'>
                                <span className='w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-purple-200 shrink-0'>
                                    <ToolIcon name={icon} className='w-4 h-4' />
                                </span>
                                {name}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Skills
