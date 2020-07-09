import * as React from 'react';
import { Board, Square } from './TicTacToe';
import { shallow, mount } from 'enzyme';

describe('<Board />', () => {


    it('renders a <Board /> components with 9 squares', () => {
        const wrapper = shallow(<Board />);
        expect(wrapper.find(Square).length).toEqual(9);
    });
    it('check initital state', () => {
        const wrapper = shallow(<Board />);
        expect(wrapper.state('squares')).toEqual([null, null, null,
            null, null, null,
            null, null, null]);
    })
    it('fill X in respond to a click', () => {
        const wrapper = shallow(<Board />);
        const board = wrapper.instance();
        board.handleClick(0);
        expect(wrapper.state('squares')).toEqual(['X', null, null,
            null, null, null,
            null, null, null]);
    });

});

describe('excercise A', () => {
    it('Square should display a value from prop', () => {
        const wrapper = shallow(<Square value={'X'} />);
        expect(wrapper.find('button').text()).toEqual('X')
    })
    it('Board should contain a line showing Next Player', () => {
        const wrapper = shallow(<Board />);
        expect(wrapper.find('.status').text()).toEqual('Next player: X')
    })
    it('Board should divide the Square into 3 rows', () => {
        const wrapper = shallow(<Board />);
        expect(wrapper.find('.board-row').length).toBe(3)
    })

})

describe('excercise B', () => {
    it('Square should propagate the click to its parent component', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Square value={null} onClick={onClick} />);
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toEqual(1);
    })


})
describe('excercise C', () => {
    it('Clicking all squares should fill up the square state', () => {
        const wrapper = mount(<Board />);
        wrapper.find('Square').at(0).simulate('click')
        wrapper.find('Square').at(1).simulate('click')
        wrapper.find('Square').at(2).simulate('click')
        wrapper.find('Square').at(3).simulate('click')
        wrapper.find('Square').at(4).simulate('click')
        wrapper.find('Square').at(5).simulate('click')
        wrapper.find('Square').at(6).simulate('click')
        wrapper.find('Square').at(7).simulate('click')
        wrapper.find('Square').at(8).simulate('click')
        expect(wrapper.state('squares')).toEqual(["X", "X", "X", "X", "X", "X", "X", "X", "X"]);
    })

    it('Clicking a square multiple times should not trigger the handleClick more than once', () => {
        let wrapper = mount(<Board />);
        wrapper.find('Square').at(0).simulate('click')
        wrapper.find('Square').at(0).simulate('click')
        const onClick = jest.fn();
        wrapper = shallow(<Square value={null} onClick={onClick} />);
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toEqual(1);
    })


})