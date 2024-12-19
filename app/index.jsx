import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { images } from '../constants'
import CustomButton from '../components/ui/CustomButton'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'

const Home = () => {
  const handlePress = () => {
    router.push('/sign-in')
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full h-full items-center justify-center px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className='max-w-[300px] w-full h-[300px]'
            resizeMode='contain'
          />

          <View className='relative mt-5'>
            <Text className='text-white font-bold text-3xl text-center'>
              Discover Endless Possibilities with{' '}
              <Text className='text-secondary-200'>Eikova</Text>
            </Text>
          </View>

          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
            Where creativity meets innovation: embark on a journey of endless
            exploration with Eikova.
          </Text>

          <CustomButton
            title='Get Started'
            onPress={handlePress}
            containerStyles='w-full mt-7'
            textStyles=''
            isLoading={false}
          />
        </View>
      </ScrollView>
      <StatusBar style='light' backgroundColor='#161622' />
    </SafeAreaView>
  )
}

export default Home
