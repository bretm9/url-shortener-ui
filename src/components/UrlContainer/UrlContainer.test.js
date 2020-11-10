import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UrlContainer from './UrlContainer';
import userEvent from '@testing-library/user-event';

describe('UrlContainer', () => {
  let urls;
  beforeEach(() => {
    urls = [
      {
        id: 1,
        long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        short_url: "http://localhost:3001/useshorturl/1",
        title: "Awesome photo"
      }
    ]
    render(<UrlContainer urls={urls}/>)
  })
  test('should render a url title', () => {
    expect(screen.getByRole('heading', 'Awesome photo')).toBeInTheDocument()
  })
  test('should render a shortened url', () => {
    expect(screen.getByRole('link', 'http://localhost:3001/useshorturl/1')).toBeInTheDocument()
  })
})