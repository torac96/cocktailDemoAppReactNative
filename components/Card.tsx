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
        className="block p-6 max-w-sm rounded-lg border shadow-md bg-gray-800 border-[#83F3FB] hover:bg-gray-700 cursor-pointer"
      >
        <Image className='md:rounded-lg' source={{uri:cocktail?.strDrinkThumb}} style={{ width: 120, height: 120 }}/>
        <View>
          <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cocktail.strDrink}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Card