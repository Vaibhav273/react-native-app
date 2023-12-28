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

type Props = NativeStackScreenProps<RootStackParamList, "SelectDate">;

const dates = eachWeekOfInterval({
    start: subDays(new Date(), 14),
    end: addDays(new Date(), 14),
}, {
    weekStartsOn: 1
},
).reduce((acc: Date[][], cur) => {
    const allDays = eachDayOfInterval({
        start: cur,
        end: addDays(cur, 6),
    });

    acc.push(allDays);
    return acc;
}, []);

const VisitorSelectDateScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    return (
        <>
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
                            fontSize: 22
                        }}
                    >Select Date</Text>
                    <Text>Select a custom date</Text>
                </View>
            </View>
            <PagerView style={styles.container}>
                {dates.map((week, i) => {
                    return <View key={i}>
                        <View style={styles.row}>
                            {week.map((day, j) => {
                                const txt = format(day, 'EEEEE');
                                return (
                                    <View key={j}>
                                        <Text>{day.getDate()}</Text>
                                        <Text>{txt}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                })}
            </PagerView>
            <View style={styles.bottomContainer}>
                <View>
                    <TouchableOpacity
                        onPress={() => { navigate('SelectDate') }}
                        style={styles.formButton}
                    >
                        <Text style={styles.formButtonText}>Schedule my visit <AntDIcons name="arrowright" size={32} color="black" /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default VisitorSelectDateScreen;

const styles = StyleSheet.create({
    topHeaderContainer: {
        flex: 1,
        marginTop: Spacing * 3
    },
    container: {
        flex: 2,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    bottomContainer: {
        flex: 3,
        marginBottom: Spacing * 2
    },
    formButton: {
        alignSelf: "center",
        width: 250,
        height: 60,
        backgroundColor: Colors.primary,
        borderRadius: 20,
        alignItems: "center",
    },
    formButtonText: {
    }
});