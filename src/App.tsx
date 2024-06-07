import './App.css'
import Card from './components/Card/Card'
import { CardProps } from './components/Card/types'
import { cards } from './data/data'

function App() {
  return (
    <section className='container'>
      {cards.map((card: CardProps) => (
        <Card
          key={card.key}
          theme={card.theme}
          clickable={card.clickable}
          cardLink={card.cardLink}
          onClick={card.onClick}
          title={card.title}
          titleSize={card.titleSize}
          text={card.text}
          imageLink={card.imageLink!}
          alt={card.alt!}
          width={card.width!}
          height={card.height!}
          style={card.style}
          className={card.className}
        />
      ))}
    </section>
  )
}

export default App
