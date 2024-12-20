import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/ui/CustomButton'
import { Link, router } from 'expo-router'
import { signIn } from '../../lib/appwrite'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = async () => {
    if (!form.email || !form.password)
      return Alert.alert('Error', 'Please fill in all the fields', [
        { text: 'OK' }
      ])

    setIsSubmitting(true)

    try {
      await signIn(form.email, form.password)

      Alert.alert('Success', 'User signed in successfully', [
        {
          text: 'OK',
          onPress: () => {
            router.replace('/home')
          }
        }
      ])
    } catch (error) {
      Alert.alert('Error', error.message, [{ text: 'OK' }])
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full h-full justify-center px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />

          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
            Log In to Eikova
          </Text>

          <FormField
            title='Email'
            value={form.email}
            handleChangeText={e => setForm({ ...form, email: e })}
            otherStyles='mt-7'
            keyboardType='email-address'
            placeholder={'Enter your email'}
          />
          <FormField
            title='Password'
            value={form.password}
            handleChangeText={e => setForm({ ...form, password: e })}
            otherStyles='mt-7'
            placeholder={'Enter your password'}
          />

          <CustomButton
            title='Log In'
            containerStyles='mt-7'
            onPress={submit}
            isLoading={isSubmitting}
          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Don't have an account?{' '}
              <Link
                className='text-lg font-semibold text-secondary'
                href='/sign-up'
              >
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
