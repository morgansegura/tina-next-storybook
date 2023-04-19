import { ReactNode } from 'react'
import { GenericType } from 'types/generic.type'

export type TMenu = {
    children?: ReactNode | ReactNode[]
    className?: string
    rest?: GenericType
}

export type TMenuList = {
    children?: ReactNode | ReactNode[]
    className?: string
    rest?: GenericType
}

export type TMenuItem = {
    active?: boolean
    children?: ReactNode | ReactNode[]
    className?: string
    rest?: GenericType
    onClick?: () => void
}
