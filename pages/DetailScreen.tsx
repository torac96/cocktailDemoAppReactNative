import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import Detail from '../components/Detail';
import Footer from '../components/Footer';
import { COCKTAIL_API_URL_LOOKUP } from '../utils';

const DetailScreen = ({ route, navigation }) => {
  const { cocktailId } = route.params;
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    axios.get(`${COCKTAIL_API_URL_LOOKUP}${cocktailId}`).then(({ data }) => {
      setCocktail(data.drinks[0]);
    })
  }, [])

  return (
    <SafeAreaView className='items-center justify-between flex-1 p-5 bg-black'>
      <View className='w-full mt-20'>
        {cocktail && <Detail cocktail={cocktail} />}
      </View>
      <View className='mb-3'>
        <Footer />
      </View>
    </SafeAreaView>
  )
}

export default DetailScreen