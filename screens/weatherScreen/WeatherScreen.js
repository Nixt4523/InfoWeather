import { View, Text, TextInput, TouchableHighlight, ActivityIndicator, Image } from 'react-native'
import { useState } from 'react'
import axios from 'axios'

import style from './weatherStyle'
import { images } from '../../utils/appData'
import { ScrollView } from 'react-native-web'

const WeatherScreen = () => {

    const [cityName, setCityName] = useState('')
    const [cityData, setCityData] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: cityName },
        headers: {
            'X-RapidAPI-Key': 'X-RapidAPI-Key',
            'X-RapidAPI-Host': 'X-RapidAPI-Host'
        }
    }

    function searchCity() {
        setLoading(true)
        axios.request(options)
            .then((res) => {
                setCityData(res.data)
                setLoading(false)
            }).catch((err) => { setCityData(''); setLoading(false); setError(true) })
    }

    return (
        <View style={style.screen} >
            <View style={style.searchBox}>
                <TextInput
                    style={style.search}
                    placeholder='Search for your City..!'
                    onChangeText={text => { setCityName(text) }}
                />
                <TouchableHighlight
                    style={style.searchButton}
                    onPress={searchCity}
                >
                    <Text style={style.searchText}>Search</Text>
                </TouchableHighlight>
            </View>
            {
                loading ? <ActivityIndicator
                    style={style.activityIndicator}
                    color={'black'}
                    size={'large'}>
                </ActivityIndicator> : null
            }
            {
                cityData ?
                    <View style={style.weatherDataCards}>
                        <View
                            style={[style.card]}>
                            <View>
                                <Text style={style.baseText}>Location</Text>
                                <Text style={style.text2xl}>{cityData.location.name}</Text>
                                <Text style={[style.textXl]}>{cityData.location.country}</Text>
                                <Text style={[style.countryText, { marginBottom: 12 }]}>{cityData.location.region}</Text>
                                <Text style={style.textLg}>Latitude : {cityData.location.lat}°, Longitude : {cityData.location.lon}°</Text>
                                <Text style={style.textLg}>Time zone : {cityData.location.tz_id}</Text>
                            </View>
                            <Image style={{ width: 150, height: 150, position: 'absolute', right: -25, top: 20 }} resizeMode='contain' source={images[1]} />
                        </View>
                        <View
                            style={[style.card]}>
                            <View>
                                <Text style={style.baseText}>Today's Weather</Text>
                                <Text style={style.text2xl}>{cityData.current.condition.text} {cityData.current.is_day == 0 ? 'Night' : 'Day'}</Text>
                                <Image
                                    source={{ uri: "https:" + cityData.current.condition.icon }}
                                    style={{ width: 64, height: 64 }}
                                    resizeMode='cover'
                                />
                                <Text style={style.textXl}>Humidity : {cityData.current.humidity}%</Text>
                            </View>
                            <Image style={{ width: 150, height: 150, position: 'absolute', right: -10, top: 20 }} resizeMode='contain' source={images[0]} />
                        </View>
                        <View
                            style={[style.card]}>
                            <View>
                                <Text style={style.baseText}>Temperatuer Information</Text>
                                <View style={style.tempCard}>
                                    <View>
                                        <Text style={style.text2xl}>{cityData.current.temp_c}°</Text>
                                        <Text style={style.textXl}>Celsius</Text>
                                    </View>
                                    <View>
                                        <Text style={style.text2xl}>{cityData.current.temp_f}°</Text>
                                        <Text style={style.textXl}>Farenhite</Text>
                                    </View>
                                </View>
                            </View>
                            <Image style={{ width: 150, height: 150, position: 'absolute', right: -20, top: 20 }} resizeMode='contain' source={images[2]} />
                        </View>
                        <View
                            style={[style.card]}>
                            <View>
                                <Text style={style.baseText}>Wind Information</Text>
                                <View style={style.tempCard}>
                                    <View>
                                        <Text style={style.text2xl}>{cityData.current.wind_kph}</Text>
                                        <Text style={style.textXl}>Km/h</Text>
                                    </View>
                                    <View>
                                        <Text style={style.text2xl}>{cityData.current.wind_mph}</Text>
                                        <Text style={style.textXl}>M/h</Text>
                                    </View>
                                </View>
                                <Text style={[style.textXl, { marginTop: 20 }]}>Wind Direction : {cityData.current.wind_dir} {cityData.current.wind_degree}°</Text>
                            </View>
                            <Image style={{ width: 150, height: 150, position: 'absolute', right: -35, top: 20 }} resizeMode='contain' source={images[3]} />
                        </View>
                    </View> : (
                        <View style={style.noDataContainer}>
                            <Image style={style.searchImage} source={require('../../assets/Images/searchImage.png')} />
                            <Text style={style.searchText2xl}>{error ? "Cannot search for your City..!" : "Search for your City..!"}</Text>
                        </View>
                    )
            }
        </View >
    )
}

export default WeatherScreen
