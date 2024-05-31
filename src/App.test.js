/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

let getByText;
let getByTestId;

beforeEach(() => {
  const utils = render(<App />);
  getByText = utils.getByText;
  getByTestId = utils.getByTestId;
});

test('renders calculator', () => {
  expect(getByText('1')).toBeInTheDocument();
  expect(getByText('2')).toBeInTheDocument();
  expect(getByText('3')).toBeInTheDocument();
  expect(getByText('+')).toBeInTheDocument();
  expect(getByText('(')).toBeInTheDocument();
  expect(getByText(')')).toBeInTheDocument();
});

test('handles button clicks', () => {
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByText('15')).toBeInTheDocument();
});

test('clears input and result', () => {
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('C'));
  expect(getByTestId('calculator-input')).toHaveTextContent("");
});

test('handles complex expressions', () => {
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByText('18')).toBeInTheDocument();
});

test('handles expressions with parentheses', () => {
  fireEvent.click(getByText('('));
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText(')'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('calculator-result')).toHaveTextContent("9");
});

test('multiplication with negative numbers', () => {
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByTestId('calculator-result')).toHaveTextContent("4");
});

test('division with negative numbers', () => {
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByTestId('calculator-result')).toHaveTextContent("-2");
});

test('division by 0', () => {
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('0'));
  fireEvent.click(getByText('='));
  expect(getByTestId('calculator-result')).toHaveTextContent('Impossível dividir por zero');
});

test('duplicated operators', () => {
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('2'));
  expect(getByTestId('calculator-input')).toHaveTextContent('4/2');
});

test('multiplication with double values', () => {
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('.'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('='));
  expect(getByTestId('calculator-result')).toHaveTextContent("2.2");
});


test('multiplication with double values', () => {
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('.'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('0'));
  fireEvent.click(getByText('.'));
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('='));
  expect(getByTestId('calculator-result')).toHaveTextContent("22");
});