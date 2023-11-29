import { View, Text, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import { useState } from 'react'

import { data, images } from '../../utils/appData'
import style from './homeStyles'

const { width } = Dimensions.get('screen')

const HomeScreen = ({ navigation }) => {

    const [indicator, setIndicator] = useState([1, 1, 1, 1])
    const [currentIndicator, setCurrentIndicator] = useState(0)


    
    return (
        <View style={[style.screen]}>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={e => {
                    const x = e.nativeEvent.contentOffset.x;
                    setCurrentIndicator((x / width).toFixed(0));
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={[style.slider]}>
                            <Image style={style.sliderImage} source={images[item.id]} />
                            <Text style={style.sliderMainText}>{item.mainText}</Text>
                            <Text style={style.sliderDescText}>{item.descText}</Text>
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
            />
            <View style={style.indicators}>
                {indicator.map((item, index) => {
                    return (
                        <View key={index} style={[style.indicator, { opacity: currentIndicator == index ? 100 : 0.2 }, { width: currentIndicator == index ? 18 : 8 }]}></View>
                    )
                })}
            </View>
            <TouchableOpacity style={style.button} onPress={() => navigation.navigate('WeatherScreen')}>
                <Text style={style.buttonText}>Get Started..!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen