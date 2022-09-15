import React from 'react';
import { render, screen } from '@testing-library/react';
import Enzyme, { shallow} from "enzyme";
// import Adapter from "enzyme-adapter-react-16";


import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Country Information/i);
  expect(linkElement).toBeInTheDocument();
});

test('can view country not found', () => {
  render(<App />);
  const linkElement = screen.getByText(/Country not found/i);
  expect(linkElement).toBeInTheDocument();
});

// test('mock call', () => {
//   render(<App />);
//   // const linkElement = screen.getByText(/Country not found/i);
//   // expect(linkElement).toBeInTheDocument();
// });

// test('can view country not found', () => {
//   // render(<App />);
//   const wrapper = shallow(<App />);
//   console.log(wrapper.find('TextField').debug());
// });
