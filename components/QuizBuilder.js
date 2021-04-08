import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
} from 'react-native'
import RNPickerSelect from 'react-native-picker-select' 

import { getQuestions } from './api/openTDb'

const QuizBuilder = () => {

    return (
        <View>
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

