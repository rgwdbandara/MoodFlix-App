import React, { useEffect, useState } from 'react'
import BannerHome from '../components/BannerHome'
import Card from '../components/Card';
import { useSelector} from 'react-redux';
import HorizontalScollCard from '../components/HorizontalScollCard';
import axios from 'axios';
import useFetch from '../hooks/useFetch';


const Home = () => {
  const trendingData = useSelector(state => state.movieoData.bannerData)
  const {data : nowPlayingData} = useFetch('/movie/now_playing')
  const {data : topRatedData} = useFetch('/movie/top_rated')
  const {data : popularTvShowData} = useFetch('/tv/popular')
  const {data : OnTheAirShowData} = useFetch('/tv/on_the_air')


  return (
    <div>
      <BannerHome/>
      <HorizontalScollCard data={trendingData} heading={"Trending"} trending={true} />
      <HorizontalScollCard data={nowPlayingData} heading={"Now Playing"}media_type={"movie"}/>
      <HorizontalScollCard data={topRatedData} heading={"Top Rated Movies"}media_type={"movie"} />
      <HorizontalScollCard data={popularTvShowData} heading={"Popular Tv Show"}media_type={"tv"} />
      <HorizontalScollCard data={OnTheAirShowData} heading={"On the Air"}media_type={"tv2"} />
     
    
    </div>
  )
}

export default Home