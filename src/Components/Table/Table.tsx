import {useState} from 'react';
import s from './Table.module.css';

import {MockDataItem} from '@/assets/Interfaces/Interfaces';
// import {sortByDate, sortByStatus} from './Sorting';

const Info = ({data}: {data: MockDataItem[]}) => {
    const [status, setStatus] = useState('');

    const filteredData = data.filter((item) => {
        if (status === '') {
            return true;
        }
        return item.status === status;
    });

    return (
        <>
            <h1>Табличка</h1>
            <div className={s.table__wrapper}>
                <table className={s.table}>
                    <thead>
                        <tr>
                            <th className={s.table__header}>№</th>
                            <th className={s.table__header}>Дата:</th>
                            <th className={s.table__header}>Клиент</th>
                            <th className={s.table__header}>Имя водителя</th>
                            <th className={s.table__header}>Телефон</th>
                            <th className={s.table__header}>Комментарий</th>
                            <th className={s.table__header}>
                                <select
                                    onChange={(evt) => setStatus(evt.target.value)}
                                    className={s.table__select}
                                    value={status}
                                >
                                    <option value="">Все заявки</option>
                                    <option value="new">Новая</option>
                                    <option value="active">В работе</option>
                                    <option value="ready">Готовая</option>
                                </select>
                            </th>
                            <th className={s.table__header}>ATI код</th>
                        </tr>
                    </thead>
                    {filteredData.map((obj: MockDataItem) => (
                        <tbody>
                            {/* key нужно поменять на id, приходящий с сервера */}
                            <tr key={obj.number}>
                                <td className={s.table__cell}>{obj.number}</td>
                                <td className={s.table__cell}>{obj.date}</td>
                                <td className={s.table__cell}>{obj.client}</td>
                                <td className={s.table__cell}>{obj.driverName}</td>
                                <td className={s.table__cell}>{obj.phone}</td>
                                <td className={s.table__cell}>{obj.comment}</td>
                                <td className={s.table__cell}>{obj.status}</td>
                                <td className={s.table__cell}>{obj.aticode}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </>
    );
};

export default Info;
