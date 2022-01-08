import { PropsWithChildren } from 'react'
import Loader from 'react-loader-spinner'

import { ButtonStyle } from '../../styles/FormStyle'

interface ButtonPropsInterface {
  isLoading: boolean
}

export default function Button(props: PropsWithChildren<ButtonPropsInterface>) {
  const { children, isLoading } = props

  return (
    <ButtonStyle disabled={isLoading} type="submit">
      {isLoading ? (
        <Loader type="ThreeDots" width={40} height={16} color="#FFFFFF" />
      ) : (
        children
      )}
    </ButtonStyle>
  )
}
