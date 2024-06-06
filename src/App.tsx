import './App.css'
import Card from './components/Card/Card'
import { cards } from './data/data'

function App() {
  return (
    <section>
      {cards.map(card => (
        <Card
          key={card.key}
          theme={card.theme}
          cardLink={card.cardLink}
          handleClick={card.handleClick}
          title={card.title}
          text={card.text}
          imageLink={card.imageLink!}
          alt={card.alt!}
          width={card.width!}
          height={card.height!} />
      ))}
    </section>
  )
}

export default App
