import { Modal } from './types';

export default class ModalManager {
    private modals: Modal[];

    constructor() {
        this.modals = [];
    }

    add(modal: Modal): number {
        let modalIndex = this.modals.indexOf(modal);
        if (modalIndex !== -1) return modalIndex;

        modalIndex = this.modals.length;
        this.modals.push(modal);
        return modalIndex;
    }

    remove(modal: Modal): number {
        const modalIndex = this.modals.indexOf(modal);

        if (modalIndex === -1) return modalIndex;

        this.modals.splice(modalIndex, 1);
        return modalIndex;
    }

    isTopModal(modal: Modal): boolean {
        return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }
}
