import { rem } from 'polished'
import { TContainer, TScreens } from '@lib/styles/screens/screens.types'

export const screens: TScreens = {
    mobile: {
        sm: rem('0px'),
        base: rem('414px'),
    },
    tablet: rem('640px'),
    desktop: {
        sm: rem('1024px'),
        base: rem('1376px'),
        lg: rem('1800px'),
    },
}

export const container: TContainer = {
    mobile: {
        sm: rem('320px'),
        base: rem('639px'),
    },
    tablet: rem('1023px'),
    desktop: {
        sm: rem('1366px'),
        base: rem('1799px'),
        lg: rem('2256px'),
        offset: rem('2384px'),
    },
}

export const maxwidth = (width: TScreens | string | number) => {
    return (style: TemplateStringsArray | string) =>
        `@media (max-width: ${width}) { ${style} }`
}

export const minwidth = (width: TScreens | string | number): any => {
    return (style: TemplateStringsArray | string) =>
        `@media (min-width: ${width}) { ${style} }`
}

export const between = (
    min: TScreens | string | number,
    max: TScreens | string | number,
) => {
    return (style: TemplateStringsArray | string) =>
        `@media (min-width: ${min}) and (max-width: ${max}) { ${style} }`
}

// export function createTransition(
//     props: string[],
//     options: { easing?: {}; duration?: {} },
// ) {
//     return `${props};`
// }

// export const media = (key: TScreens) => {
//     return (style: TemplateStringsArray | string) =>
//         //@ts-ignore
//         `@media (min-width: ${rem(screens[key])} ) {${style}}`;
// };
