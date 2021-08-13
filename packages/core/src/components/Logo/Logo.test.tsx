import { render, screen } from '@test-utils';
import React from 'react';
import Logo from './Logo';

describe('Logo', () => {
    const DummyLogo = () => <span>My Logo</span>,
        DummyName = () => <span>My Name</span>;

    const subject = (props = {}) => render(<Logo {...props} />);

    it('should load passed the logo and name', () => {
        subject({ logo: <DummyLogo />, name: <DummyName /> });

        expect(screen.getByText('My Logo')).toBeInTheDocument();
        expect(screen.getByText('My Name')).toBeInTheDocument();
    });

    it('should hide the name when instructed', () => {
        subject({ logo: DummyLogo, name: DummyName, showName: false });

        expect(screen.getByText('My Logo')).toBeInTheDocument();
        expect(screen.queryByText('My Name')).not.toBeInTheDocument();
    });
});
