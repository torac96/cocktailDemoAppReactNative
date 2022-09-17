import React from 'react';
import { Text } from 'react-native';
import { useStateContext } from '../contexts/ContextProvider';
import i18n from '../utils/localization';

const Footer = () => {
  const { lang } = useStateContext();
  i18n.locale = lang;
  
  return (
    <Text className='w-full mb-3 text-center text-white'>
      {i18n.t('footer')} Pietro Torac
    </Text>
  )
}


export default Footer