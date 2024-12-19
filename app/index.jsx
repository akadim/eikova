import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-3xl font-pblack'>Eikova</Text>
      <StatusBar style='auto' />
      <Link href='/home'>Go to Home</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
