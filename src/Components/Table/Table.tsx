import {useState} from 'react';
import s from './Table.module.css';
import {THead} from './THead/THead';
import {TBody} from './TBody/TBody';
import {MockDataItem} from '@/assets/Interfaces/Interfaces';

const Table = ({data, getEntryToChange}: {data: MockDataItem[]}) => {
    const [status, setStatus] = useState('');

    const filteredData = data.filter((item) => {
        if (status === '') {
            return true;
        }
        return item.status === status;
    });

    return (
        <>
            <h2>Таблица заявок. Всего заявок: {filteredData.length}</h2>
            <div className={s.table__wrapper}>
                <table className={s.table}>
                    <THead setStatus={setStatus} />
                    <TBody filteredData={filteredData} getEntryToChange={getEntryToChange} />
                </table>
            </div>
        </>
    );
};

export default Table;
