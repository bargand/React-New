import React from 'react'
import Card from './components/Card'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Card title="Javascript" decsription="This Course is for Pro"/>
      <Card title="Python" decsription="This Course is for Pro"/>
      <Card title="Rust" decsription="This Course is for beginner"/>
      <Card title="React" decsription="This Course is for Pro"/>
      <Card title="Go" decsription="This Course is for Advanced Students"/>
      <Card title="HTML" decsription="This Course is for Advanced Students"/>
      <Card title="CSS" decsription="This Course is for Advanced Students"/>
      <Card title="R" decsription="This Course is for Advanced Students"/>
    </div>
  )
}

export default App