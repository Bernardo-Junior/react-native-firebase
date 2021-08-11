import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useContext } from 'react';
import { FlatList } from 'react-native';
import { ListRenderItem } from 'react-native';
import { View } from 'react-native';
import NotificationContext from '../../../data/contexts/Notification';
import { INotificationStorage } from '../../../data/protocols/Notification';
import { Global_Container, Global_styles } from '../../../utils/global';

import {
  Body_Notificacao,
  Container_Notificacao, Header_Data, Header_Notificacao, Header_Titulo, SubContainer_Notificacao
} from './styles';

const Home: React.FC = () => {
  const { notifications, setNotifications } = useContext(NotificationContext);

  useEffect(() => {
    console.log(notifications)
  }, [notifications])

  const renderItems: ListRenderItem<INotificationStorage> = useCallback(({ item }) => {
    return (
      <Container_Notificacao style={Global_styles.shadow}>
        <SubContainer_Notificacao>
          <Header_Notificacao>
            <Header_Titulo>
              {item.title}
            </Header_Titulo>
            <Header_Data>
              {item.date}
            </Header_Data>
          </Header_Notificacao>
          <Body_Notificacao>
            {item.body}
          </Body_Notificacao>
        </SubContainer_Notificacao>
      </Container_Notificacao>
    )
  }, [notifications])

  return (
    <Global_Container>
      <FlatList
        data={notifications}
        keyExtractor={notification => notification.id.toString()}
        renderItem={renderItems}
      />
    </Global_Container>
  )
}

export default Home;