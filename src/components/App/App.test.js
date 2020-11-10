import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import userEvent from '@testing-library/user-event';
import { getUrls } from '../../apiCalls'

jest.mock('../../apiCalls.js')

describe('App', () => {
  let mockUrls;
  beforeEach(() => {
    mockUrls = [
      {
        id: 1,
        long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        short_url: "http://localhost:3001/useshorturl/1",
        title: "Awesome photo"
      }
    ]
  })
  test('should render a form', () => {
    getUrls.mockResolvedValueOnce({ urls: mockUrls });
    render(<App />)
    expect(screen.getByPlaceholderText('Title...')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('URL to Shorten...')).toBeInTheDocument()
    expect(screen.getByTestId('submit-button')).toBeInTheDocument()
  })
  test('should render Urls cards', async () => {
    getUrls.mockResolvedValueOnce({ urls: mockUrls });
    render(<App />)
    const heading = await waitFor(() => screen.getByRole('heading', 'Awesome photo'))
    const url = await waitFor(() => screen.getByRole('link', 'http://localhost:3001/useshorturl/1'))
    expect(heading).toBeInTheDocument()
    expect(url).toBeInTheDocument()
  })
})