import { createGlobalStyle } from 'styled-components'

import LexendDecaFont from '../assets/fonts/lexend-deca-v13-latin-regular.woff2'
import PlayballFont from '../assets/fonts/playball-v11-latin-regular.woff2'

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Lexend Deca';
        src: url(${LexendDecaFont});
    }

    @font-face {
        font-family: 'Playball';
        src: url(${PlayballFont});
    }
`

export default FontStyles
