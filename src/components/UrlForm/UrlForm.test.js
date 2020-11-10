import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UrlForm from './UrlForm';
import userEvent from '@testing-library/user-event';
import { postUrl } from '../../apiCalls';

jest.mock('../../apiCalls.js')

describe('UrlForm', () => {
  let mockAddUrlToAppState;
  let mockUrlToAdd;
  let urls;
  beforeEach(() => {
    mockUrlToAdd = {
      id: 1,
      long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      short_url: "http://localhost:3001/useshorturl/1",
      title: "Awesome photo"
      }
    postUrl.mockResolvedValue(Promise.resolve(mockUrlToAdd))
    mockAddUrlToAppState = jest.fn();
    render(<UrlForm addUrlToAppState={mockAddUrlToAppState}/>)
  })
  test('should render a form', () => {
    expect(screen.getByPlaceholderText('Title...')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('URL to Shorten...')).toBeInTheDocument()
    expect(screen.getByTestId('submit-button')).toBeInTheDocument()
  })
  test('should display inputs typed in correct fields', () => {
    userEvent.type(screen.getByPlaceholderText('Title...'), 'titleTest')
    userEvent.type(screen.getByPlaceholderText('URL to Shorten...'), 'urlTest')
    expect(screen.getByPlaceholderText('Title...')).toHaveAttribute('value', 'titleTest');
    expect(screen.getByPlaceholderText('URL to Shorten...')).toHaveAttribute('value', 'urlTest');
  })
  test('should fire addUrlToAppState on sumbission', async () => {
    userEvent.click(screen.getByText('Shorten Please!'))
    expect(postUrl).toHaveBeenCalled()
  });
})