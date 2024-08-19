import {View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ColorList from '@/components/ColorList'
import getConcert from '@/app/firebaseAPI'

const Home = () => {
    const concertList = getConcert();
    return (
        <SafeAreaView>
            <ColorList />
        </SafeAreaView>
    )
}

export default Home