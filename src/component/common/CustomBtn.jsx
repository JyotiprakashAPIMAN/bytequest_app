import { Pressable, Text, Vibration } from "react-native";
import { BLACK, BRANDCOLOR, WHITE } from "../../constants/color";
import { COMICS, COSMICBOLD } from "../../constants/fontPath";

export const Custombtn = ({
    title = "",
    onPress = () => { },
    color = "",
}) => {

    return (
        <Pressable
            onPress={onPress}
            style={{
                backgroundColor: BRANDCOLOR,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
                // elevation: 10,
                height: 50,
                width: 200
            }}>
            <Text style={{
                color: color,
                fontSize: 24,
                fontFamily: COSMICBOLD
            }}>{title}</Text>
        </Pressable>
    )
}