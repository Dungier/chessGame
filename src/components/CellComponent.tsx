import React from 'react';
import { Cell } from '../models/Cell';

type CellProps = {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
};

export const CellComponent: React.FC<CellProps> = ({ cell , selected, click }) => {
    return (
        <div
            className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
            onClick={() => click(cell)}
            style={{background: cell.available && cell.figure ? 'green' : ''}}
        >
            {cell.available && !cell.figure && <div className={'available'}/>}
            {cell.figure?.logo && <img src={cell.figure.logo}/>}
        </div>
    );
};

