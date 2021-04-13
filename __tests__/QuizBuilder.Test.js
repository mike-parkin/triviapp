import React from 'react'
import renderer from 'react-test-renderer'
import QuizBuilder from '../components/QuizBuilder'

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

test('renders correctly', () => {
    const tree = renderer.create(<QuizBuilder />).toJSON()
    expect(tree).toMatchSnapshot()
})
