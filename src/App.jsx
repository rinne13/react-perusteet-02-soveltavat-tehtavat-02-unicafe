import { useState } from 'react'
import Button from "./Button"
import StatisticLine from "./StatisticLine"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const totalClicks = good + neutral + bad
  const averageClicks = totalClicks > 0 ? (good - bad) / totalClicks : 0
  const positiveClicks = totalClicks > 0 ? 100 * (good / totalClicks) : 0

  return (
    <div>
      <section>
        <h2>give feedback</h2>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
      </section>

      <section>
        <h2>statistics</h2>
        {totalClicks <= 0 ? (
          <p>No feedback given</p>
        ) : (
          <table>
<tbody>
          <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/>
            <StatisticLine text="all" value= {totalClicks}/>
             <StatisticLine text="average" value={`${averageClicks}%`}/>
             <StatisticLine text="positive" value={positiveClicks} />
             </tbody>
             </table>
        )}
      </section>
    </div>
  )
}

export default App
