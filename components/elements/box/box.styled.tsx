import styled from 'styled-components'

export const Box = styled(as => as)``

Box.defaultProps = {
    as: 'div',
    color: '',
    disableGutters: false,
    fixed: false,
    maxWidth: false,
    shape: 'square',
}
