import {View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ColorList from '@/components/ColorList'

const Home = () => {
    return (
        <SafeAreaView>
            <ColorList color = "#DECEF4"/>
        </SafeAreaView>
    )
}

export default Home