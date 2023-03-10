'use client';

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@headlessui/react'

const sunIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
)

const moonIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
)

const ThemeSwitcher = () => {
    const [ mounted, setMounted ] = useState(false)
    const [ enabled, setEnabled ] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <Switch.Group>
            <div className="flex items-center text-zinc-800">
                <Switch
                    checked={enabled}
                    onChange={() => {
                        setEnabled(!enabled)
                        setTheme(theme === 'light' ? 'dark' : 'light')
                    }}
                    className={`${
                        enabled ? 'bg-rose-600' : 'bg-zinc-300'
                    } relative inline-flex h-8 w-14 items-center rounded-full transition-colors ring-1 ring-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2`}
                >
                    <span
                        className={`${
                        enabled ? 'translate-x-6' : 'translate-x-0'
                        } flex justify-center items-center h-8 w-8 transform rounded-full bg-white transition ease-in-out duration-200`}
                    >
                        {theme === 'dark' ? sunIcon : moonIcon}
                    </span>
                </Switch>
            </div>
        </Switch.Group>
    )
}

export default ThemeSwitcher