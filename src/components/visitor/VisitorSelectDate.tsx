import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types";
import { addDays, eachDayOfInterval, eachWeekOfInterval, format, subDays } from "date-fns";
import PagerView from "react-native-pager-view";
import Spacing from "../../theme/Space";
import AntDIcons from '@expo/vector-icons/AntDesign';
import Colors from "../../theme/Colors";
import Font from "../../theme/Font";

type Props = NativeStackScreenProps<RootStackParamList, "SelectDate">;

const dates = eachWeekOfInterval({
    start: subDays(new Date(), 1),
    end: addDays(new Date(), 10),
}, {
    weekStartsOn: 1,
},
).reduce((acc: Date[][], cur) => {
    const allDays = eachDayOfInterval({
        start: cur,
        end: addDays(cur, 4),
    });
    acc.push(allDays);
    return acc;
}, []);

const VisitorSelectDateScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    return (
        <>
            <View style={styles.mainContainer}>
                <View style={styles.topHeaderContainer}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingHorizontal: Spacing * 1.5
                        }}>
                        <Text
                            style={{
                                fontSize: 21,
                                fontFamily: Font["outfit-medium"]
                            }}
                        >Select Date</Text>
                        <Text
                            style={{
                                fontSize: 16,
                                fontFamily: Font["outfit-regular"]
                            }}
                        >Select a custom date</Text>
                    </View>
                </View>
                <PagerView style={styles.container}>
                    {dates.map((week, i) => {
                        return <View key={i}>
                            <View style={styles.row}>
                                {week.map((day, j) => {
                                    const txt = format(day, 'EEE');
                                    return (
                                        <View key={j}>
                                            <View
                                                style={{
                                                    alignItems: "center",
                                                    padding: Spacing,
                                                    borderTopColor: Colors.primary,
                                                    borderTopWidth: Spacing * 3,
                                                    width: 70,
                                                    height: 120,
                                                    borderRadius: 16,
                                                }}
                                            >
                                                <Text style={{
                                                    fontSize: 26,
                                                    fontFamily: Font["outfit-bold"]
                                                }}>{day.getDate()}</Text>
                                                <Text
                                                    style={{
                                                        fontSize: 20,
                                                        fontFamily: Font["outfit-regular"]
                                                    }}
                                                >{txt}</Text>
                                            </View>
                                            <View>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    })}
                </PagerView>
                <View style={{
                    paddingHorizontal: Spacing * 1.5, marginBottom: Spacing * 4.2,
                }}>
                    <View style={{
                        borderTopWidth: 2,
                        borderBottomColor: "#CFCAE4",
                    }}></View>
                    <Text>Select Time Slot</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View>
                        <TouchableOpacity
                            onPress={() => { navigate('SelectDate') }}
                            style={styles.formButton}
                        >
                            <Text style={styles.formButtonText}>Schedule my visit <AntDIcons name="arrowright" size={21} color="black" /></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        </>
    );
};

export default VisitorSelectDateScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    topHeaderContainer: {
        marginTop: Spacing * 4
    },
    container: {
        flex: 1,
        flexDirection: "column",
        alignContent: "flex-start",
        marginTop: Spacing * 2,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 18,
    },
    bottomContainer: {
        flex: 3,
        marginBottom: Spacing * 2
    },
    formButton: {
        alignSelf: "center",
        backgroundColor: Colors.primary,
        borderRadius: 20,
        alignItems: "center",
    },
    formButtonText: {
    }
});