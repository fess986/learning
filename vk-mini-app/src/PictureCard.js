import { Card, Div, Title } from '@vkontakte/vkui'

export default function PictureCard({ title, url, img }) {
	return <Card mode='shadow' onClick={() => window.open(url, '_blank').focus()}>
    <Div style={{
      display: 'flex',
      height: 220,
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'column',
    }}>
      <img src={url} alt={title} style={{
        maxHeight: 200,
      }}/>
      <Title level='2'>{title}</Title>
    </Div>
    </Card>;
}
