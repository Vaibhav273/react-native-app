import {
    Dimensions,
    ImageBackground,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../../types";
import Spacing from "../../theme/Space";
import Colors from "../../theme/Colors";
import Font from "../../theme/Font";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem from "./SliderCardItem";

const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [internalValue, setInternalValue] = useState('');

    const isCarousel = React.useRef(null);

    const SLIDER_WIDTH = Dimensions.get('window').width + 80;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

    const onChangeText = (val: string) => {

    }

    const data = [
        {
            imgUrl: "https://picsum.photos/id/11/200/300",
        },
        {
            imgUrl: "https://picsum.photos/id/10/200/300",
        },
        {
            imgUrl: "https://picsum.photos/id/12/200/300",
        },
    ];


    return (
        <View
            style={[
                styles.container,
                { justifyContent: "space-between" }
            ]}
        >
            <View
                style={{
                    paddingHorizontal: Spacing * 2,
                    marginTop: Spacing * 2,
                }}>

                <Carousel
                    layout="tinder"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={data}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    inactiveSlideShift={0}
                    useScrollView={true}
                />
                <Text
                    style={{
                        fontSize: 24,
                        fontFamily: Font["outfit-medium"],
                        marginTop: Spacing * 2
                    }}
                >
                    Welcome Zenith
                </Text>

                <Text
                    style={{
                        fontSize: 17,
                        color: Colors.text,
                        fontFamily: Font["outfit-regular"],
                    }}
                >
                    Experience the best in class workspaces Elevate your work game today
                </Text>
            </View>
            <View
                style={{
                    paddingHorizontal: Spacing * 2,
                    paddingTop: Spacing * 2,
                }}
            >
                <View>
                    <View>
                        <TextInput
                            placeholder='Enter your Mobile Number'
                            autoFocus={false}
                            autoComplete='tel'
                            keyboardType='phone-pad'
                            textContentType='telephoneNumber'
                            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                            style={{
                                borderWidth: 1,
                                padding: Spacing,
                                borderRadius: Spacing * 1.5,
                                marginBottom: Spacing * 3,
                                borderColor: Colors.text
                            }}
                        />

                        {/* <OTPTextInput ref={e => (otpInput = e)} > */}
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            backgroundColor: Colors.primary,
                            paddingVertical: Spacing * 1.5,
                            paddingHorizontal: Spacing * 2,
                            width: "55%",
                            borderRadius: Spacing * 1.5,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: Font["outfit-regular"],
                                color: Colors.text,
                                fontSize: 17,
                                textAlign: "center",
                                textTransform: "uppercase"
                            }}
                        >
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View
                style={{
                    paddingHorizontal: Spacing * 2,
                    paddingTop: Spacing * 2,
                    marginBottom: Spacing * 2
                }}
            >
                <TouchableOpacity
                    onPress={() => navigate("Register")}
                    style={{
                        padding: Spacing,
                    }}
                >
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 15,
                        fontFamily: Font["google-sans-regular"],
                    }}>
                        Not a member? Book a free day pass here :)
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: 'aliceblue',
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
});