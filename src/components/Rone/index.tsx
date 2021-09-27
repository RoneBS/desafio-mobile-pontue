import React from 'react'

import * as S from './styles'

export type RoneProps = {
  children: React.ReactElement
}

const Rone = ({ children }: RoneProps) => (
  <S.Wrapper>
    <h1>{children}</h1>
  </S.Wrapper>
)

export default Rone
