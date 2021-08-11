import styled from 'styled-components/native';
import { Global_Primary } from '../../../utils/global';

import resp from '../../../utils/responsividade';

export const Container_Notificacao = styled.View`
  width: 90%;
  height: auto;
  min-height: ${resp(200)}px;
  background-color: ${Global_Primary};
  align-self: center;
  margin-top: ${resp(15)}px;
  border-radius: ${resp(7)}px;
  justify-content: center;
  align-items: center;
`;

export const SubContainer_Notificacao = styled.View`
  width: 92%;
  min-height: ${resp(175)}px;
  margin-top: ${resp(10)}px;
  margin-bottom: ${resp(10)}px;
`;

export const Header_Notificacao = styled.View`
  width: 100%;
  height: auto;
  min-height: ${resp(50)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Header_Titulo = styled.Text`
  font-weight: bold;
  font-size: ${resp(20)}px;
  color: #FFFFFF;
  width: ${resp(180)}px;
`;

export const Header_Data = styled.Text`
  font-weight: 400;
  font-size: ${resp(16)}px;
  color: #FFFFFF;
  width: ${resp(90)}px;
`;

export const Body_Notificacao = styled.Text`
  font-weight: normal;
  font-size: ${resp(16)}px;
  color: #FFFFFF;
  margin-bottom: ${resp(15)}px;
  margin-top: ${resp(15)}px;
`;