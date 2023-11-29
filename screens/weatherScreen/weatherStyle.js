import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('screen')

const style = StyleSheet.create({
    screen : { 
        flex: 1, 
        width : width,
        height: height,  
        justifyContent : "flex-start",
        alignItems : "center",
        paddingVertical : 50,
        paddingHorizontal : 20
    },
    searchBox : {
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : 'space-between',
    },
    search : {
        flex : 1,
        height : 50,
        borderColor : 'black',
        borderWidth : 2,
        borderTopLeftRadius : 12,
        borderBottomLeftRadius : 12,
        paddingHorizontal : 20,
    },
    searchButton : {
        width : 100,
        height : 50,
        display : 'flex',
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : 'black',
        borderTopRightRadius : 12,
        borderBottomRightRadius : 12,
        paddingHorizontal : 20
    },
    searchText : { 
        color : "white",
        fontSize : 14,
        fontWeight : "700"
    },
    activityIndicator : {
        marginTop : 10
    },
    weatherDataCards : {
        marginTop : 10,
        width : width * 0.9,
        overflow : "visible",
    },
    card : { 
        padding : 20,
        borderRadius : 25,
        display : 'flex',
        height : 200,
        flexDirection : 'row',
        alignItems : "flex-start",
        justifyContent : 'space-between',
        marginBottom : 10,
        backgroundColor : 'white',
        elevation : 2,
        position : "relative"
    },
    cardImage : {
        width : 150,
        height : 150,
    },
    baseText : {
        fontSize : 14,
        opacity : 0.5,
        color : 'black',
        marginBottom : 10
    },
    text2xl : {
        fontSize : 34,
        color : 'black',
    },
    textXl : {
        fontSize : 24,
        color : 'black',
        opacity : 0.5,
    },
    countryText : {
        fontSize : 18,
        color : 'black',
        opacity : 0.5,
    },
    textLg : {
        fontSize : 14,
        color : 'black',
        opacity : 0.5,
    },
    tempCard : {
        display : 'flex',
        gap : 40,
        flexDirection : 'row',
        alignItems : "center",
        justifyContent : 'flex-start',
    },
    noDataContainer : {
        display : 'flex',
        height : height * 0.5,
        alignItems : "center",
        justifyContent : 'center'
    },
    searchImage : {
        width : 250,
        height : 250
    },
    searchText2xl : {
        fontSize : 32,
        opacity : 0.5
    }
    
})

export default style