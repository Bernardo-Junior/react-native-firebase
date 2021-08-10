import resp from '../../../utils/responsividade';

import styled from 'styled-components/native';
import { Global_Primary } from '../../../utils/global';

export const Container_Notificacao = styled.TouchableOpacity`
  width: 100%;
  min-height: ${resp(150)}px;
  background-color: ${Global_Primary};
  position: absolute;
`;

export const Button_Notificacao = styled.TouchableOpacity`
  flex: 1;
  width: 85%;
  align-self: center;
`;

export const Title_Notificacao = styled.Text`
  margin-top: ${resp(30)}px;
  font-weight: bold;
  font-size: ${resp(20)}px;
  color: #FFFFFF;
`;

export const Body_Notification = styled.Text`
  margin-top: ${resp(30)}px;
  font-size: ${resp(16)}px;
  color: #FFFFFF;
`;