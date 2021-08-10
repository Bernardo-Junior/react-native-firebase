import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const Global_Primary = "#F09741";

export const Global_Container = styled.SafeAreaView`
   flex: 1;
   background-color: #FFFFFF;
`;

export const Global_styles = StyleSheet.create({
  shadow: {
    shadowColor: "#51c5cb",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 2,
    elevation: 10,
  },
});