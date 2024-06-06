import './App.css'
import Card from './components/Card/Card'
import { cards } from './data/data'

function App() {
  return (
    <section className='container'>
      {cards.map(card => (
        <Card
          key={card.key}
          theme={card.theme}
          cardLink={card.cardLink}
          handleClick={card.handleClick}
          title={card.title}
          titleSize={card.titleSize}
          text={card.text}
          imageLink={card.imageLink!}
          alt={card.alt!}
          width={card.width!}
          height={card.height!}
          cardSpan={card.cardSpan}
          cardIsClickable={card.cardIsClickable}
        />
      ))}
    </section>
  )
}

export default App
