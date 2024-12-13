import React, { useEffect, useRef } from "react";
import { Animated, Image, StatusBar, Text, View } from "react-native";
import { BLACK, BRANDCOLOR, WHITE } from "../../constants/color";
import { LOGO } from "../../constants/imagePath";
import { COSMICBOLD } from "../../constants/fontPath";

export default Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('OnBoarding')
        }, 3000)
    }, [])
    const FadeInView = props => {
        const fadeAnim = useRef(new Animated.Value(0)).current;

        useEffect(() => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true,
            }).start();
        }, [fadeAnim]);

        return (
            <Animated.View
                style={{
                    ...props.style,
                    opacity: fadeAnim,
                }}>
                {props.children}
            </Animated.View>
        );
    };
    return (
        <>
            <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <View style={{ flex: 1, backgroundColor: WHITE }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: WHITE,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <FadeInView style={{
                        borderRadius: 100,
                        backgroundColor: WHITE,
                        elevation: 10
                    }}>
                        <Image
                            style={{
                                height: 200,
                                width: 200,
                            }}
                            source={LOGO}
                        />
                    </FadeInView>
                    <FadeInView style={{
                        padding: 32,
                    }}>
                        <Text style={{
                            color: BLACK,
                            fontSize: 22,
                            fontFamily: COSMICBOLD
                        }}>"Crafting the<Text style={{ color: BRANDCOLOR }}> architects</Text> of</Text>
                        <Text style={{
                            color: BLACK,
                            fontSize: 22,
                            fontFamily: COSMICBOLD
                        }}>  tomorrow's<Text style={{ color: BRANDCOLOR }}> technology"</Text></Text>
                    </FadeInView>
                    <FadeInView style={{
                        height: 50,
                        marginLeft: 150,
                        justifyContent: "space-around"
                    }}>
                        <Text style={{
                            color: BRANDCOLOR,
                            fontSize: 16,
                            fontFamily: COSMICBOLD
                        }}> ~apiman.in</Text>
                    </FadeInView>
                </View>
            </View >
        </>
    )
}