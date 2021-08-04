//import { ClosureReason } from '#/api/closure/models';
//import { Response, Server } from '#/api/mock';
// import accountsResponse from '#/api/mock/fixtures/accounts.json';
// import { navigate } from '@reach/router';
// import { fireEvent, waitFor } from '@testing-library/react';
// import React from 'react';

import { render, screen } from '@testing-library/react';
import ListDragons from '.';

describe('ListDragons', () => {
    test('deve iniciar com o dragão dasdas', () => {
        const mockCallBack = jest.fn();
        render(<ListDragons editDragon={mockCallBack}
            dragons={[{
                id: 1,
                name: 'dasdas',
                createdAt: 'now',
                type: 'Flyer',
                histories: [],
            },
            {
                id: 1,
                name: 'Viserion',
                createdAt: 'now',
                type: 'Flyer',
                histories: [],
            }
            ]}
            deleteDragon={mockCallBack} />);

        // Procura o texto e retorna o elemento, caso n tenha, quebra
        const dragonTitle = screen.getByText('dasdas')
        // Mesma coisa, mas retorna nulo o elemento, assim não quebrando
        const dragonTitle2 = screen.queryByText('Viserion')

        // Retorna uma promise, não é apressado, caso encontra, retorna

        expect(dragonTitle).toBeInTheDocument();
        expect(dragonTitle2).toBeInTheDocument();
    });
});