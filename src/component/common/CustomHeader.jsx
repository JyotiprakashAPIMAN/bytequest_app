import React, { useState, useRef } from "react";
import { Animated, Image, Pressable, StyleSheet, TextInput, View, Easing } from "react-native";
import { BLACK, WHITE } from "../../constants/color";
import { ARROW, LOGO, SEARCH } from "../../constants/imagePath";

export const CustomHeader = ({
    backgroundColor = WHITE,
    height = 80,
    leftHeaderBtn = true,
    leftHeaderBtnPress = () => { console.log("leftHeaderBtnPress") },
    rightHeaderBtn = false,
    rightHeaderBtnPress = () => { console.log("rightHeaderBtnPress") }
}) => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const slideAnim = useRef(new Animated.Value(0)).current;

    const handleSearchPress = () => {
        setIsSearchActive(!isSearchActive);
        if (isSearchActive) {
            rightHeaderBtnPress();
        }
    };

    const handleLeftPress = () => {
        if (isSearchActive) {
            setIsSearchActive(false); // Close the search bar when back arrow is pressed
        } else {
            leftHeaderBtnPress();
        }
    };

    const searchBarWidth = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "100%"]
    });

    return (
        <>
            <View style={[styles.container, { backgroundColor, height }]}>
                <Pressable
                    onPress={leftHeaderBtn ? handleLeftPress : () => { }}
                    style={styles.childContainer}>
                    {leftHeaderBtn && (
                        <Image
                            source={isSearchActive ? ARROW : LOGO}
                            style={isSearchActive ? styles.arrow : styles.logo}
                        />
                    )}
                </Pressable>
                <Animated.View style={[styles.childContainer, { flex: 3, width: searchBarWidth }]}>
                    {isSearchActive && (
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search..."
                            placeholderTextColor={BLACK}
                        />
                    )}
                </Animated.View>
                <Pressable
                    onPress={rightHeaderBtn ? handleSearchPress : () => { }}
                    style={styles.childContainer}>
                    {rightHeaderBtn && (
                        <Image
                            source={SEARCH}
                            style={styles.searchIcon}
                        />
                    )}
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        elevation: 3
    },
    childContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        height: 80,
        width: 80,
        resizeMode: "contain",
    },
    arrow: {
        height: 40,
        width: 40,
        resizeMode: "contain",
    },
    searchIcon: {
        height: 40,
        width: 40,
        resizeMode: "contain",
    },
    searchInput: {
        width: "100%",
        height: 50,
        borderRadius: 20,
        backgroundColor: WHITE,
        color: BLACK,
        paddingHorizontal: 10,
        elevation: 2
    }
});
