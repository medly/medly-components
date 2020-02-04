import { cleanup, render } from '@test-utils';
import React from 'react';
import NavItem from '../NavItem';
import NavText from '../NavText';
import { SideNav } from '../SideNav';
import { BottomList } from './BottomList.styled';

describe('BottomList', () => {
    afterEach(cleanup);

    it('should render properly', () => {
        const { container } = render(
            <SideNav>
                <BottomList>
                    <NavItem path="/home">
                        <NavText>Home</NavText>
                    </NavItem>
                </BottomList>
            </SideNav>
        );
        expect(container).toMatchSnapshot();
    });
});
