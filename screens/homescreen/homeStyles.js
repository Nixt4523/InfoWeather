import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('screen')

const style = StyleSheet.create({
    screen : { 
        flex: 1, 
        height: height,  
        justifyContent : "center",
        alignItems : "center",
        paddingVertical : 20,
    },
    sliderImage: { 
        width: width * 0.8,
        height: height / 2, 
        resizeMode: 'contain', 
        alignSelf : "center",
    },
    slider : { 
        width: width, 
        justifyContent: 'center', 
        alignItems: 'flex-start',
        paddingHorizontal : 20,
    },
    sliderMainText : {
        fontWeight : '700',
        fontSize : 42,
        textAlign : 'left',
        width : width * 0.9,
        color : 'black'
    },
    sliderDescText : {
        fontSize : 24,
        textAlign : 'left',
        opacity : 0.5,
        marginTop : 10,
        color : 'black'
    },
    indicators : {
        flexDirection : 'row',
        gap : 8,
        width : width,
        justifyContent : "center",
        alignItems : "center",
        marginBottom : 100,
        marginTop : 0
    },
    indicator : {
        width : 8,
        height : 8,
        borderRadius : 8,
        backgroundColor : 'black'
    },
    button : {
        width : width * 0.9,
        height : 60,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : 'black',
        borderRadius : 12,
        shadowColor : 'black',
        elevation : 2,
    },
    buttonText : {
        fontSize : 18,
        fontWeight : "500",
        color : "white"
    }

})

export default style