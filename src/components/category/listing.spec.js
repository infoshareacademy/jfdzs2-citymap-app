import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Listing from './Listing'

describe('<Listing />', () => {
    let wrapper;
    const places = [{
        name: 'Szczecin'
    }, {
        name: "San Francisco"
    }];

    beforeEach(() => {
        wrapper = shallow(<Listing places={places} />)
    });
    it('has an item for each place in the places prop', () => {
        expect(wrapper.find('Item').length)
            .to.equal(places.length);
})
