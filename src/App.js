import './App.css' 
import CollectionCard from './component/CollectionCard'
import Header from './component/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
 

function App() {
  const [punkListData, setPunkListData] = useState([])

  useEffect(() =)
  return (
  <div className='app'>
  <Header />
  <CollectionCard
   id={0}
   name={'Bandana Punk'} 
  traits={[{ Value: 19 }]}
  image='https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu' 
 />
  </div>
  )
}

export default App
