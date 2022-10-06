import React, { FunctionComponent } from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";

// custom components
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyle?: StyleProp<TextStyle>; 
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
  return (
    <StyledView>
      <RegularText 
        textStyles={[
          {
            color: colors.secondary,
            fontSize: 22,
          },
        props.mainTextStyles,
        ]}
      >
        {props.mainText}
      </RegularText>
      <SmallText 
        textStyles={[
          {
            color: colors.graydark,
          },
          props.mainTextStyles,
        ]}
      >
        {props.subText}
      </SmallText>
    </StyledView>
  )
}

export default Greeting;