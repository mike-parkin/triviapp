import React from 'react'
import renderer from 'react-test-renderer'
import { renderHook, act } from '@testing-library/react-hooks'
import QuizBuilder from '../components/QuizBuilder'


// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

test('renders correctly', async () => {
    const tree = renderer.create(<QuizBuilder />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('Form data changes', async () => {
    
})
