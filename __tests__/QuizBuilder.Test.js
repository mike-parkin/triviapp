import React from 'react'
import renderer from 'react-test-renderer'
import QuizBuilder from '../components/QuizBuilder'

test('renders correctly', () => {
    const tree = renderer.create(<QuizBuilder />).toJSON()
    expect(tree).toMatchSnapshot()
})
