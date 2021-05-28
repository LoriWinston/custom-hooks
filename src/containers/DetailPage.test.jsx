/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DetailPage from '../containers/DetailPage';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';

describe('DetailPage', () => { 
  it('renders a character to the page', async () => { 
    render(
      <MemoryRouter initialEntries={['/details/5cf5679a915ecad153ab68cc']}>
        <Route path="/details/:id"><DetailPage/></Route>
      </MemoryRouter>
    );
        
    const name = await screen.findByText('Afiko');
    expect(name).not.toBeEmptyDOMElement();
    return waitFor(() => {
      expect(name).toMatchSnapshot();
    });
  });
});

