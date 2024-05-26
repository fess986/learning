import { AppRoot, Panel, PanelHeader, View, Group, Header, CardGrid} from '@vkontakte/vkui'
import PictureCard from './PictureCard';
import bridge from '@vkontakte/vk-bridge';
import { useEffect, useState } from 'react';

const courses = [
  {
    title: "Картинка 1",
    img: "https://i.pinimg.com/236x/0e/bd/26/0ebd262c4b7f69f7ec915dbd8509328f.jpg",
    url: "https://i.pinimg.com/236x/0e/bd/26/0ebd262c4b7f69f7ec915dbd8509328f.jpg"
  },
  {
    title: "Картинка 2",
    img: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1698796800&semt=ais",
    url: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1698796800&semt=ais"
  },
  {
    title: "Картинка 3",
    img: "https://memax.club/wp-content/uploads/2019/06/krasivye_kartinki_2_04111329.jpg",
    url: "https://memax.club/wp-content/uploads/2019/06/krasivye_kartinki_2_04111329.jpg"
  }
];

function App() {

  const [userVK, setUserVK] = useState('');

  useEffect(() => {
    console.log('ass')

    const fetchingVKUser = async () => {
      
      const user = await bridge.send('VKWebAppGetUserInfo')
      setUserVK(user);
      console.log(user)

  //     bridge.send('VKWebAppGetFriends')
  // .then((data) => { 
  //   if (data) {
  //     // Данные о пользователях
  //     console.log(data.users);
  //   }
  // })

    } 
    fetchingVKUser();

    const fetchFriends = async () => {
      const token = await bridge.send('VKWebAppGetAuthToken', { 
        app_id: 51783492, 
        scope: 'friends,status'
        })
      
      console.log(token.access_token)

      const friends = await bridge.send('VKWebAppCallAPIMethod', {
        method: 'friends.get',
        params: {
          v: '5.131',
          access_token: token.access_token,
          order: 'random',
          fields: 'photo_100, sex, relation',
        }})

        const friendsList = friends.response.items;
        console.log(friendsList)

        friendsList.map(item => console.log(`${item.last_name} - ${item.relation}`))
        
      // console.log(friends);
      
    }
    fetchFriends();
  }, [])

  return (
    <AppRoot>
      <View activePanel='main'>
        <Panel id='main'>
          <PanelHeader>Privet, bratishka1234!</PanelHeader>
          <Group mode='card' header={<Header mode='secondary'>Рандомные картинки: </Header>}></Group>
          
          <CardGrid size='s'>
            {courses.map(card => (<PictureCard key={card.url} url={card.url} img={card.img} title={card.title}></PictureCard>))}
          </CardGrid>

          <Group mode='card' header={<Header mode='secondary'>Ваше имя:</Header>}>
            <div>Имя -{userVK && userVK?.first_name}</div>
            <div>Фамилия - {userVK && userVK?.last_name}</div>
          </Group>
          
        </Panel>
      </View>
    </AppRoot>
  );
}

export default App;
