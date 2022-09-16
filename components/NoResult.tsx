import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Cocktail from '../models/Cocktail.model';
import Card from './Card';

interface IProps {
  searchName: string,
  cocktails: Cocktail[],
  handleCocktailClick: (cocktail: Cocktail) => void
}

const NoResult = ({ searchName, cocktails, handleCocktailClick }: IProps) => {
  return (
    <ScrollView>
      <Text className='text-white text-2xl'>Nessun risultato per: {searchName}</Text>
      <View className='flex  w-full gap-8 p-10 align-middle xl:justify-between'>
        {
          cocktails
            .map(cocktail => ({ cocktail, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ cocktail }) => <Card handleCocktailClick={handleCocktailClick} key={cocktail.idDrink} cocktail={cocktail} />)
        }
      </View>
    </ScrollView>
  )
}

export default NoResult