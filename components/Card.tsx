import React from 'react';
import Cocktail from '../models/Cocktail.model';
import { Image, View, Text, TouchableOpacity } from 'react-native';

interface IProps {
  cocktail: Cocktail, 
  handleCocktailClick: (cocktail: Cocktail) => void
}

const Card = ({cocktail, handleCocktailClick}: IProps) => {
  return (
    <TouchableOpacity onPress={() => handleCocktailClick(cocktail)}>
      <View
        className="flex w-72 justify-center items-center p-6 m-3 rounded-lg border shadow-md bg-gray-800 border-[#83F3FB] hover:bg-gray-700 cursor-pointer"
      >
        <Image className='pb-4 md:rounded-lg' source={{uri:cocktail?.strDrinkThumb}} style={{ width: 120, height: 120 }}/>
        <Text className="mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cocktail.strDrink}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Card