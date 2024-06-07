import './App.css'
import Card from './components/Card/Card'
import { CardProps } from './components/Card/types'
import { cards } from './data/data'

function App() {
  return (
    <section className='container'>
      {cards.map((card: CardProps) => <Card {...card} key={card.key} />)}
    </section>
  )
}
export default App
