import React from 'react';
import {SheduleOfWeek} from './index'
import {TableColumn} from "components/table";

describe('SheduleOfWeek', () => {
    it('render SheduleOfWeek component', () => {
        const hours = {
            fri:
                {to: "20:00", from: "07:00"},
            mon:
                {to: "20:00", from: "07:00"},
            sat:
                {to: "20:00", from: "07:00"},
            sun:
                {to: "20:00", from: "07:00"},
            thu:
                {to: "21:00", from: "07:00"},
            wed:
                {to: "20:00", from: "07:00"}
        };
        const wrapper = shallow(
            <SheduleOfWeek workHours={hours}/>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<TableColumn key='tue'>-</TableColumn>).length).toEqual();
    });
    it('render SheduleOfWeek component without a required field', () => {
        expect(() => shallow(<SheduleOfWeek/>)).toThrow();
    });
});