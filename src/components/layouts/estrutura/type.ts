import React from 'react';

declare type EventType = React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement | HTMLButtonElement>;
export interface IEstruturaProps{
    active:boolean;
    children:React.ReactNode;
    onClicks: React.MouseEventHandler<HTMLAnchorElement>;
    onClicksButton: React.MouseEventHandler<HTMLButtonElement>;
    onClickAbrir:React.MouseEventHandler<HTMLButtonElement>;
    onClickFechar:(e: EventType) => void;
    open:boolean;
}