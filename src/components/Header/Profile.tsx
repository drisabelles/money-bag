import React, { FunctionComponent } from "react";
import { 
  ImageSourcePropType,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from "react-native";
import styled from "styled-components/native";

const StyledView = styled.TouchableOpacity`
  flex-direction: column;
  heigh: 50px;
  width: 50px;
  border-radius: 15px;
  justify-content: center;
`

const StyledImage = styled.Image`
  resize-mode: cover;
  width: 50px;
  height: 50px;
  border-radius: 15px;
`

interface ProfileProps {
  img: ImageSourcePropType;
  imgStyle?: StyleProp<ImageStyle>;
  imgContainerStyle?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: FunctionComponent<ProfileProps> = (props) => {
  return (
    <StyledView 
      onPress={props.onPress} 
      style={props.imgContainerStyle}
    >
      <StyledImage 
        sytle={props.imgStyle} 
        source={props.img} 
      />
    </StyledView>
  )
}

export default Profile;