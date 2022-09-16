import React from 'react';
import Cocktail from '../models/Cocktail.model';
import { formatLocale } from '../utils';
import { View, Text, Image, Button, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IProps {
  cocktail: Cocktail
}

const Detail = ({ cocktail }: IProps) => {
  const MAX_STR_LIMIT = 15;

  // const { locale }: { locale?: string } = useRouter();
  const locale = 'it';
  const formattedLocale = formatLocale(locale!);

  return (
    <View className='flex flex-row justify-start w-full '>

      <View className="rounded-full border-4 h-32 border-[#83F3FB]">
        <Image className='rounded-full ' source={{
          uri: cocktail?.strDrinkThumb
        }} style={{ width: 120, height: 120 }} />
      </View>

      <View className='w-full pl-5'>
        <Text className='pb-3 text-2xl font-semibold text-white'>{cocktail.strDrink}</Text>
        <Text className='mb-4 text-white'> Ingredienti </Text>
        <View>
          {[...Array(MAX_STR_LIMIT)].filter((item, index) => cocktail[`strIngredient${index + 1}` as keyof typeof cocktail]).map((item, index) => (
            <Text key={index} className='text-white'>
              - {`${cocktail[`strMeasure${index + 1}` as keyof typeof cocktail] ?? ''} ${cocktail[`strIngredient${index + 1}` as keyof typeof cocktail]}`}
            </Text>
          ))}
        </View>
        <ScrollView className='mt-4 text-white w-60 max-h-40'>
          <Text className='text-white'>{formattedLocale === 'it' ? cocktail?.strInstructionsIT : cocktail?.strInstructions}</Text>
        </ScrollView>

      </View>

    </View>
  )
}

export default Detail