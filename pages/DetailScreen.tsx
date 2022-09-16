import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Detail from '../components/Detail';
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
    <View className='items-center justify-center flex-1 bg-black'>
      {cocktail && <Detail cocktail={cocktail} />}
    </View>
  )
}

export default DetailScreen