import { StyleSheet, Platform } from 'react-native';
import {Global_Primary} from '../../utils/global';

import resp from '../../utils/responsividade';

import { hp } from '../../utils/responsividadeWH';

export const styles = StyleSheet.create({
  tabBar: {
    height: hp('10%'),
    backgroundColor: `${Global_Primary}`,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  labelStyle: { 
    fontSize: resp(10),
    alignSelf: 'center',
    color: '#FFFFFF',
    fontFamily: 'Silka',
  },
  tabStyle: { 
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    width: resp(Platform.OS == 'ios' ? 24 : 30),
    height: resp(Platform.OS == 'ios' ? 24 : 30)
  },
  activeTabText: {
    fontFamily: 'Silka_Bold',
    color: '#FFFFFF',
    fontSize: resp(10),
    marginBottom: resp(Platform.OS == 'ios' ? 10 : 12)
  },
  inactiveTabText: {
    fontFamily: 'Silka',
    color: '#FFFFFF',
    fontSize: resp(10),
    marginBottom: resp(Platform.OS == 'ios' ? 10 : 12)
  }

})