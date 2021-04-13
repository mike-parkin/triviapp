import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import RNPickerSelect from 'react-native-picker-select'

const qNumberProps = [
    {label: '5', value: '5'},
    {label: '10', value: '10'},
    {label: '15', value: '15'},
]

const qDifficultyProps = [
    {label: 'Any difficulty', value: ''},
    {label: 'Easy', value: 'easy'},
    {label: 'Medium', value: 'medium'},
    {label: 'Hard', value: 'hard'},
]

const QuizBuilder = () => {
    const [form, setForm] = useState({
        num: '10',
        category: '',
        difficulty: ''
    })

    return (
        <View style={styles.container}>
            <Text>QuizBuilder</Text>
            <View style={styles.qNumRadioGroup}>
                <Text>How many Questions?</Text>
                <RadioForm
                    radio_props={qNumberProps}
                    initial={1}
                    onPress={value => {setForm({ ...form, num: value})}}
                    formHorizontal={true}
                    labelHorizontal={true}
                    labelStyle={{ paddingRight: 20 }}
                />
            </View>
            <Text>Select a difficulty</Text>

            <View>
                <RNPickerSelect
                    onValueChange={newValue => setForm({...form, category: newValue})}
                    items={[
                        {label: "Any Category", value: ""},
                        {label: "test2", value: "test2"}
                    ]}
                    value={""}
                />
            </View>
            <StatusBar style="light" />
        </View>
    )
}

export default QuizBuilder

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    qNumRadioGroup: {
        alignItems: 'center'
    }
})

