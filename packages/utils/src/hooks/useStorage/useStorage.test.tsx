import { fireEvent } from '@testing-library/dom';
import React from 'react';
import { render, screen } from '../../test-utils';
import { useStorage } from './useStorage';

const FirstComponent: React.FC = () => {
        const [state, setState] = useStorage<string>('gender', 'male'),
            handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setState(`${e.target.value}`);
        return (
            <>
                <input id="gender-input" type="text" value={state} onChange={handleChange}></input>
                <label htmlFor="gender-input">Gender</label>
            </>
        );
    },
    SecondComponent: React.FC = () => {
        const [state] = useStorage<string>('gender');
        return <span>{state}</span>;
    },
    WrapperComponent: React.FC = () => (
        <>
            <FirstComponent />
            <SecondComponent />
        </>
    );

describe('useStorage', () => {
    it('should render the same value in separate component', () => {
        render(<WrapperComponent />);
        expect(screen.getByText('male')).toBeInTheDocument();
    });

    it('should update value at all the place if we update in one component', () => {
        render(<WrapperComponent />);
        fireEvent.change(screen.getByRole('textbox', { name: 'Gender' }), { target: { value: 'female' } });
        expect(screen.getByText('female')).toBeInTheDocument();
    });
});
