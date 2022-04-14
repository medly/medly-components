export interface Props {
    id: string;
    isActive: boolean;
    onClick: () => void;
    expandedToggleText?: string;
    collapsedToggleText?: string;
}
