//import { ClosureReason } from '#/api/closure/models';
//import { Response, Server } from '#/api/mock';
// import accountsResponse from '#/api/mock/fixtures/accounts.json';
// import { navigate } from '@reach/router';
// import { fireEvent, waitFor } from '@testing-library/react';
// import React from 'react';

import { getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CreateOrEditDragon from '.';

describe('CreateOrEditDragon', () => {
    test('deve conter o botão create dragons', ()=> {
        render(<CreateOrEditDragon />);

        const buttonCreateDragon = screen.getByRole('button', { name: /Create dragons/i}) 
        expect(buttonCreateDragon).toBeInTheDocument();
    })
    test('Ao clicar o botão, abrir a modal de criar', ()=> {
        render(<CreateOrEditDragon />);

        const buttonCreateDragon = screen.getByRole('button', { name: /Create dragons/i}) 
        userEvent.click(buttonCreateDragon);

        const modal = screen.getByTestId('modal');

        expect(modal).toBeInTheDocument();
        
        expect(buttonCreateDragon).toBeInTheDocument();
    })
    
});