import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'

// components
import BalanceCard from './BalanceCard'

const BalanceCardSectionBackground = styled.View`
  flex: 2;
  align-items: center;
  width: 100%;
`

// types
import { BalanceCardProps } from './types'

const BalanceCardSection: FunctionComponent<BalanceCardProps> = props => {
  return (
    <BalanceCardSectionBackground>
      <BalanceCard {...props} />
    </BalanceCardSectionBackground>
  )
}

export default BalanceCardSection
