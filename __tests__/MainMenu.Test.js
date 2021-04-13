jest.useFakeTimers()
import React from 'react'
import renderer from 'react-test-renderer'

import MainMenu from '../components/MainMenu'


test('renders correctly', async () => {
    const tree = renderer.create(<MainMenu />).toJSON()
    expect(tree).toMatchSnapshot()
})