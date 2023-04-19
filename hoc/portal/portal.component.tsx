import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
// [Types]
import { TPortal } from '@hoc/portal/portal.types'

export default function Portal({ children }: TPortal) {
    const [mounted, setMouounted] = useState<boolean>(false)

    useEffect(() => {
        setMouounted(true)

        return () => setMouounted(false)
    }, [])

    return mounted
        ? createPortal(children, document.querySelector('#root') as Element)
        : null
}
