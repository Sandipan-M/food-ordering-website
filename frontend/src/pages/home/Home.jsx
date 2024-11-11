import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploremenu/ExploreMenu'
import FoodDisplay from '../../components/fooddisplay/FoodDisplay'
import AppDownload from '../../components/appdownload/AppDownload'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home
