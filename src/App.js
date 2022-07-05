import React from 'react'
import { Routes , Route , Link} from 'react-router-dom'
import { Layout , Typography , Space } from 'antd'
import { Navbar , Exchanges , Homepage , Cryptocurrencies , News , CryptoDetails } from './components'
import './App.css'

const App = () => {
  return (
    <div className='app'>
       <div className='navbar'>
         <Navbar />
       </div>
       <div className='main'>
          <Layout>
            <div className='routes'>
               <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route exact path='/exchanges' element={<Exchanges />} />
                <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
                <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
                <Route exact path='/news' element={<News />} />
               </Routes>
            </div>
          </Layout>
       <div className='footer'>
           <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
                Cryptoverse <br />
                All righrs reserved
           </Typography.Title>
           <Space>
          <p style={{color:"white"}}> Made By Rohit with <i class="fa-solid fa-heart" style={{color:"red"}}></i> </p>
           </Space>
       </div>
       </div>
    </div>
  )
}

export default App