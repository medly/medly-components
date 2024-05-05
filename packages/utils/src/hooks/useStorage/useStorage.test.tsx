import { render, screen } from '@test-utils';
import { fireEvent } from '@testing-library/react';
import { ChangeEvent, FCC } from 'react';
import { useStorage } from './useStorage';

const FirstComponent: FCC = () => {
        const [state, setState] = useStorage<string>('gender', { initialValue: 'male' }),
            handleChange = (e: ChangeEvent<HTMLInputElement>) => setState(`${e.target.value}`);
        return (
            <>
                <input id="gender-input" type="text" value={state} onChange={handleChange} />
                <label htmlFor="gender-input">Gender</label>
            </>
        );
    },
    SecondComponent: FCC = () => {
        const [state] = useStorage<string>('gender');
        return <span>{state}</span>;
    },
    WrapperComponent: FCC = () => (
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
