import React from 'react';
import { useState } from 'react';
import { View, Animated, Button, LayoutChangeEvent } from 'react-native';

import {
  Container_Notificacao,
  Button_Notificacao,
  Body_Notification,
  Title_Notificacao
} from './styles';

import resp from '../../../utils/responsividade';
import { useEffect } from 'react';
import { Easing, not } from 'react-native-reanimated';
import { useContext } from 'react';
import NotificationContext from '../../../data/contexts/Notification';
import { Global_styles } from '../../../utils/global';

const ToastNotification: React.FC = () => {
  const [offset] = useState<Animated.Value>(new Animated.Value(resp(0)));
  const [sizeOff, setSizeOff] = useState<number>(0);

  const { notification, setNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (sizeOff > 0 && notification) {
      iniciarAnimacao()
    }
  }, [notification])

  const limparNotificacao = () => {
    setNotification(null);
  }

  const iniciarAnimacao = () => {
    Animated.sequence([
      Animated.spring(offset, {
        toValue: 0,
        tension: -5,
        useNativeDriver: true,
      }),
      Animated.delay(3000),
      Animated.timing(offset, {
        duration: 2000,
        toValue: -sizeOff,
        easing: Easing.ease,
        useNativeDriver: true
      })
    ]).start(() => limparNotificacao())
  }

  return (
    <>
      <Container_Notificacao
        as={Animated.View}
        style={[Global_styles.shadow, { transform: [{ translateY: offset }] }]}
        onLayout={(event: LayoutChangeEvent) => {
          setSizeOff(event.nativeEvent.layout.height);
        }}
      >
        <Button_Notificacao>
          <Title_Notificacao>
            {notification?.title}
          </Title_Notificacao>
          <Body_Notification>
            {notification?.body}
          </Body_Notification>
        </Button_Notificacao>
      </Container_Notificacao>
    </>
  )
}

export default ToastNotification;