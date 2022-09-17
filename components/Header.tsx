import React, { useState } from 'react';
import { View, Text, Image, TextInput, ImageBackground, Button, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import i18n from '../utils/localization';
import { useStateContext } from '../contexts/ContextProvider';

interface IProps {
  handleSearch: (params: any) => any,
  handleLogoClick: () => any,
}

const Header = ({ handleSearch, handleLogoClick }: IProps) => {
  const { lang, setLang } = useStateContext();
  const [isEnabled, setIsEnabled] = useState(false);

  i18n.locale = lang;
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setLang(isEnabled ? 'it' : 'en');
  }

  const [name, setName] = useState('');
  const handleChange = (event: any) => {
    setName(event);
  }

  return (
    <View>
      <View className="flex-row items-center justify-between w-full">
      <TouchableOpacity onPress={() => handleLogoClick()}>
        <Image
          source={require('../assets/cocktail-bar.webp')}
          style={{ width: 156, height: 132 }}
        />
        </TouchableOpacity>
        <View className="flex-row items-center justify-center pr-5" onTouchStart={toggleSwitch}>
          <Text className="pr-3 text-sm font-medium text-gray-300">IT</Text>

          <View className="relative inline-flex items-center cursor-pointer">
            <View className=" relative w-11 h-6 rounded-full border bg-gray-700 border-[#83F3FB]   ">
              <View className={`bg-white absolute w-5 h-5 rounded-full ${isEnabled ? 'right-[2px]' : 'left-[2px]'}  `}>
                  <ImageBackground source={isEnabled ? require('../assets/usFlag.png') : require('../assets/itFlag.png')} resizeMode="cover"  className="flex justify-center w-5 h-5 rounded-full"></ImageBackground>
              </View>
            </View>
          </View>

          <Text className="pl-3 text-sm font-medium text-gray-300">EN {isEnabled}</Text>
        </View>


      </View>
      <View className="flex-row items-center justify-center w-full pt-5">
        <View className="relative w-full flex-row justify-center items-center rounded-lg p-2 border border-[#83F3FB] ">

        <EvilIcons name="search" size={28} color="#60c1e8" />

          <TextInput
            className="block p-4 w-2/3 text-sm  bg-black text-[#83F3FB]  focus-visible:border-none focus-visible:outline-none"
            onChangeText={handleChange}
            value={name}
            placeholder={i18n.t('search')}
            placeholderTextColor={'#83F3FB'}
          />

          <View className=" bg-[#F67DF7] px-3y py-1 rounded-xl">
            <Button
              onPress={() => handleSearch(name)}
              title={i18n.t('search')}
              color="white"
              accessibilityLabel={i18n.t('search')}
            />
          </View>
          
        </View>
        

      </View>

    </View>
  )
}

export default Header;