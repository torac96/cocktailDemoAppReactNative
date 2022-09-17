import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Cocktail from '../models/Cocktail.model';
import Card from './Card';
import i18n from '../utils/localization';
import { useStateContext } from '../contexts/ContextProvider';

interface IProps {
  searchName: string,
  cocktails: Cocktail[],
  handleCocktailClick: (cocktail: Cocktail) => void
}

const NoResult = ({ searchName, cocktails, handleCocktailClick }: IProps) => {

  const { lang } = useStateContext();
  i18n.locale = lang;

  return (
    <ScrollView >
      <Text className='w-full text-2xl text-center text-white'>
        {i18n.t('no-result')} {searchName}
      </Text>
      <View className='flex items-center justify-center w-full p-3'>
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