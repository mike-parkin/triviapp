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
//api calls
import { getCategories } from '../api/openTDb'

// props fo the radio buttons
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

const QuizBuilder = ({ navigation }) => {
    const [ categories, setCategories ] = useState([])
    const [form, setForm] = useState({
        num: '10',
        category: '',
        difficulty: ''
    })

    const fetchCategories = () => {
        getCategories()
            .then(res => {
                setCategories(res)
            })
    }

    useEffect(() => {
        fetchCategories()
    }, [])
    
    const catItems = categories.map(category => {
        return { label: category.name, value: category.id }
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
            <View style={styles.qDifficultyRadioGroup}>
                <Text>Choose the difficulty</Text>
                <RadioForm
                    radio_props={qDifficultyProps}
                    initial={0}
                    onPress={value => {setForm({ ...form, difficulty: value})}}
                    labelHorizontal={true}
                    labelStyle={{ paddingRight: 20 }}
                />
            </View>
            <View style={styles.categorySelector}>
                <Text>Select a difficulty</Text>
                <RNPickerSelect
                    onValueChange={newValue => setForm({...form, category: newValue})}
                    items={[
                        {label: "Any Category", value: ""},
                        ...catItems
                    ]}
                    value={""}
                />
            </View>
            <View>
                <Button
                    title="Create Quiz"
                    onPress={() => navigation.navigate("QuizPage", { form: form })}
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
    },
    qDifficultyRadioGroup: {
        alignItems: 'center'
    },
    categorySelector: {
        alignItems: 'center',
        marginHorizontal: 'auto',
        marginVertical: '20px',
        width: '70%'
    }
})

