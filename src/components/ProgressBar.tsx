import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar'

import { ProgressBarStyle } from '../styles/FixedComponentsStyle'

import themes from '../styles/themes'

import 'react-circular-progressbar/dist/styles.css'

export default function ProgressBar() {
  return (
    <ProgressBarStyle>
      <CircularProgressbarWithChildren
        value={66}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: themes.lightBlue,
          pathColor: themes.white,
          trailColor: 'transparent',
        })}
      >
        <strong>Hoje</strong>
      </CircularProgressbarWithChildren>
    </ProgressBarStyle>
  )
}
