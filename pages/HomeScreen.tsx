import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, View, Text, SafeAreaView } from 'react-native'
import Detail from '../components/Detail'
import Footer from '../components/Footer'
import NoResult from '../components/NoResult'
import Cocktail from '../models/Cocktail.model'
import { COCKTAIL_API_URL_SEARCH, COCKTAIL_API_URL_ORDINARY_DRINK, COCKTAIL_API_URL_RANDOM } from '../utils'
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header'

const HomeScreen = ({ navigation }) => {

  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [searchName, setSearchName] = useState('');
  const [foundCocktails, setFoundCocktails] = useState(false);

  const handleSearch = async (name: string) => {
    
    setSearchName(name);
    const { data } = await axios.get(`${COCKTAIL_API_URL_SEARCH}${name}`);
    
    setCocktails(data?.drinks ?? []);

    setFoundCocktails(!!data?.drinks);

    if (!data?.drinks) {
      
      const { data } = await axios.get(COCKTAIL_API_URL_ORDINARY_DRINK);
      setCocktails(data.drinks ?? []);
    }
  }

  const handleNewCocktail = () => {
    axios.get(COCKTAIL_API_URL_RANDOM).then(({ data }) => {
      setCocktails(data?.drinks);
    })
  }

  const handleCocktailClick = (cocktail: Cocktail) => {
    navigation.navigate('Detail', {
      name: cocktail?.strDrink,
      cocktailId: cocktail.idDrink
    })
  }

  useEffect(() => {
    handleNewCocktail();
  }, [])

  return (
    <View className='flex justify-between w-full h-full p-3 bg-black pt-7'>
      <Header handleSearch={handleSearch} handleLogoClick={handleNewCocktail} />
      <View className={`w-full pt-4 ${cocktails?.length === 1 ? 'h-[50%]' : 'h-[70%]'}`}>
        {
          cocktails?.length === 1 && cocktails[0] !== null ? (
            <Detail cocktail={cocktails[0]} />
          ) : (
            <NoResult searchName={searchName} cocktails={cocktails} foundCocktails={foundCocktails} handleCocktailClick={handleCocktailClick} />
          )
        }
      </View>
      {
        cocktails.length === 1 &&
        (
          <View className='flex items-center'>
            <Ionicons name="refresh" size={40} color="white" onPress={handleNewCocktail} />
          </View>
        )
      }
      <Footer />
    </View>
    
  )
}

export default HomeScreen