import React from 'react';
import Cocktail from '../models/Cocktail.model';
import { formatLocale } from '../utils';
import { View, Text, Image, Button, ScrollView } from 'react-native';
import i18n from '../utils/localization';
import { useStateContext } from '../contexts/ContextProvider';

interface IProps {
  cocktail: Cocktail
}

const Detail = ({ cocktail }: IProps) => {
  const MAX_STR_LIMIT = 15;

  const { lang } = useStateContext();
  i18n.locale = lang;

  return (
    <View className='flex flex-row justify-start w-full '>

      <View className="rounded-full border-4 h-28 border-[#83F3FB] android:border-slate-900 ">
        <Image className='rounded-full' style={{ width: 104, height: 104 }} source={{ uri: cocktail?.strDrinkThumb}}  />
      </View>

      <View className='w-full h-full pl-5'>
        <Text className='pb-3 text-2xl font-semibold text-white'>{cocktail.strDrink}</Text>
        <Text className='mb-4 text-white'> {i18n.t('ingredienti')} </Text>
        <ScrollView className='h-[30vh]'>
          <View>
            {[...Array(MAX_STR_LIMIT)].filter((item, index) => cocktail[`strIngredient${index + 1}` as keyof typeof cocktail]).map((item, index) => (
              <Text key={index} className='text-white'>
                - {`${cocktail[`strMeasure${index + 1}` as keyof typeof cocktail] ?? ''} ${cocktail[`strIngredient${index + 1}` as keyof typeof cocktail]}`}
              </Text>
            ))}
          </View>
          <Text className='mt-4 text-white w-[55vw]'>{lang === 'it' ? cocktail?.strInstructionsIT : cocktail?.strInstructions}</Text>
        </ScrollView>

      </View>

    </View>
  )
}

export default Detail