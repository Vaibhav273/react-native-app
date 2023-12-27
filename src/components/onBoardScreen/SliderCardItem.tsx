import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground } from "react-native"

const { height, width } = Dimensions.get('window');

interface Props {
    item: any;
    index: number;
}

const CarouselCardItem = ({ item, index }: Props) => {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={item}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
    },
    image: {
        width: width,
        height: 450,
    },
})

export default CarouselCardItem;