import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from "axios";

// import Adapter from "enzyme-adapter-react-16";
// Enzyme.configure({ adapter: new Adapter()});
// import { shallow } from 'enzyme';
// import Button from './Button';
// import Enzyme, { shallow } from "enzyme";



import App from './App';
import { ReactWrapper } from 'enzyme';

const dummyResult = 
  {
  name: "New Zealand",
  capital: {name : "Wellington"},
  population: {name : '4.89 million'},
  currency: {name : "New Zealand Dollar"},
  };

test("Adding country code", () => {
  const input = screen.getByRole("text");
  userEvent.clear(input);
  userEvent.type(input, "nz");
  // userEvent.click(screen.getByText('Check'))
  screen.getByText("nz", {selector: "search-bar"})
})

test('renders react app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Country Information/i);
  expect(linkElement).toBeInTheDocument();
});

test('can view country not found', () => {
  render(<App />);
  const linkElement = screen.getByText(/Country not found/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders app', () => {
  render(<App />);
  const linkElement = screen.queryByText(/Capital City:/i);
  expect(linkElement).not.toBeInTheDocument();
});


// test('Test Button component', () => {
//   it('Test click event', () => {
//     const mockCallBack = jest.fn();

//     const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
//     button.find('button').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });

// test('find search text', () => {
//   render(<App />);
//   const search_text = screen.getByRole("button");
  
// });

// jest.mock('axios')

// test("tests button ", async () => {
//   // axios.get.mockResolvedValue({ data: dummyResult });
//   render(<App />);
  
//   const textBox = screen.getByRole("text-feild");
//   const searchBtn = screen.getByRole("button");
  
//   fireEvent.click(searchBtn);
//   (axios.get as jest.Mock).mockResolvedValue(dummyResult);

//   const linkElement = screen.getByRole("quicktest");
//   expect(linkElement).toBeInTheDocument();
//   //assert the expected result
//   // expect(counter).toHaveTextContent("1");
//   });