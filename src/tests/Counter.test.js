
import Counter from '../components/Counter';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
configure({adapter: new Adapter()})


// Note, a test file must be labeled '<component>.test.js', to be called automatically..


describe("Counter", () => {

  let container
  beforeEach(() => {
    container = shallow(<Counter />)
  });

  it('should start the counter at zero', () => {
    
  });

  xit("should increment counter on click", () => {
    
  });

  xit("should decrement counter on click", () => {
   
  });

})

