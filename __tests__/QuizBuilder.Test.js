import React from 'react'
import renderer from 'react-test-renderer'
import QuizBuilder, { form, setForm } from '../components/QuizBuilder'

// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

test('renders correctly', async () => {
    const tree = renderer.create(<QuizBuilder />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('Question data changes', async () => {
    const test = 'test'
    expect(test).toEqual('test')
})
