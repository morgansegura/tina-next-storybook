import { ReactNode } from 'react'
import { GenericType } from 'types/generic.type'

export type TBox = {
    as?: any
    children?: ReactNode | ReactNode[]
    className?: string
    color?: string
    disableGutters?: boolean
    maxWidth?:
        | 'mobile'
        | 'tablet'
        | 'desktop-small'
        | 'desktop'
        | 'desktop-large'
        | 'desktop-huge'
        | 'full'
        | false
    rest?: GenericType
    shape?: number | string
    csx?: any
}
