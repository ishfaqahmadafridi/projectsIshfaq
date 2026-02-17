import React from 'react'
import './Home.css' 
// Assuming you have a CSS file for Home
import Header  from '../../components/Header/Header'
import ExploreMenu from '../../components/Menu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category, setCategory] = React.useState('All');

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay  category={category} />
      <AppDownload />
    </div>
  )
}

export default Home
