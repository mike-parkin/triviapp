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
        num: '10',
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
                    <View style={styles.radioButtonBox}>
                        <Text style={styles.radioButtonText}>5</Text>
                        <RadioButton value='5' status='unchecked'/>
                    </View>
                    <View>
                        <Text>10</Text>
                        <RadioButton value='10' status='checked'/>
                    </View>
                    <View>
                        <Text>15</Text>
                        <RadioButton value='15' status='unchecked'/>
                    </View>
                </RadioButton.Group>
            </View>
            <View>
                <RNPickerSelect
                    onValueChange={newValue => setForm({...form, category: newValue})}
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

const styles = StyleSheet.create({
    radioButtonBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red'
    },
})

