

import { useAuthStore } from '@/store/authStore';
import { Redirect, Stack } from 'expo-router';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function ProtectedLayout() {
    const {isLoggedIn,isLoading} = useAuthStore();

    if(!isLoading){
        return(
            <View className='flex justify-center items-center h-screen w-screen'>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    if(!isLoggedIn){
        return <Redirect href={"/sign-in"} />
    }
  return <Stack screenOptions={{headerShown: false}} />
}