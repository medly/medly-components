import { cleanup, fireEvent, render } from '@test-utils';
import { Popover } from './Popover';
import { InteractionType } from './types';

const renderer = (interactionType: InteractionType = 'hover') => {
    const utils = render(
        <>
            <span>outside span</span>
            <Popover interactionType={interactionType}>
                <div>Dummy Div</div>
                <Popover.Popup>Dummy popover</Popover.Popup>
            </Popover>
        </>
    );
    return { ...utils, wrapper: utils.container.querySelector('#medly-popover-wrapper')! };
};

describe('Popover component', () => {
    afterEach(cleanup);

    it('should render popover on hovering when interactionType prop is set to hover', () => {
        const { container, wrapper } = renderer();
        fireEvent.mouseOver(wrapper);
        expect(container.querySelector('#medly-popover-popup')).toBeVisible();
        fireEvent.mouseLeave(wrapper);
        expect(container.querySelector('#medly-popover-popup')).toBeNull();
    });

    it('should render popover on clicking when interactionType prop is set to click', () => {
        const { container, wrapper } = renderer('click');
        fireEvent.click(wrapper);
        expect(container.querySelector('#medly-popover-popup')).toBeVisible();
        fireEvent.click(wrapper);
        expect(container.querySelector('#medly-popover-popup')).toBeNull();
    });

    it('should hide popover on clicking outside when interactionType prop is set to click', () => {
        const { container, getByText, wrapper } = renderer('click');
        fireEvent.click(wrapper);
        expect(container.querySelector('#medly-popover-popup')).toBeVisible();
        fireEvent.click(getByText('outside span'));
        expect(container.querySelector('#medly-popover-popup')).toBeNull();
    });

    it('should not hide popover on clicking on popup when interactionType prop is set to click', () => {
        const { container, wrapper } = renderer('click');
        fireEvent.click(wrapper);

        const popup = container.querySelector('#medly-popover-popup')!;
        fireEvent.click(popup);
        expect(popup).toBeVisible();
    });
});
