declare type EventType = React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement | HTMLButtonElement>;
export interface INavBarProps {
    onClicks: React.MouseEventHandler<HTMLAnchorElement>;
    onClicksButton: React.MouseEventHandler<HTMLButtonElement>;
    open:boolean;
    onClickAbrir:React.MouseEventHandler<HTMLButtonElement>;
    onClickFechar:(e: EventType) => void;
}
