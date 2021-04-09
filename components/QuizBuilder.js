import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
} from 'react-native'
import { RadioButton } from 'react-native-paper'
import RNPickerSelect from 'react-native-picker-select' 

const QuizBuilder = () => {
    const [form, setForm] = useState({
        num: '',
        category: '',
        difficulty: ''
    })

    return (
        <View>
            <Text>QuizBuilder</Text>
            <View>
                <Text>How many Questions?</Text>
                <RadioButton.Group 
                    onValueChange={newValue => setForm({...form, num: newValue})}
                    value={form.num}>
                    <View>
                        <Text>5</Text>
                        <RadioButton value='5'  />
                    </View>
                    <View>
                        <Text>10</Text>
                        <RadioButton value='10' />
                    </View>
                </RadioButton.Group>
            </View>
            <View>
                <RNPickerSelect
                    items={[
                        {label: "test1", value: "test1"},
                        {label: "test1", value: "test1"}
                    ]}
                />
            </View>
        </View>
    )
}

export default QuizBuilder

