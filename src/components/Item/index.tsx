import React from 'react'

import * as S from './styles'

export type ItemProps = {
  numero: number;
  data: string;
}

const Item = ({ numero, data }: ItemProps) => (
  <S.Wrapper>
      <S.Text>
        numero: {numero}
      </S.Text>
      <S.Text>
        criado: {data}
      </S.Text>
  </S.Wrapper>
)

export default Item
