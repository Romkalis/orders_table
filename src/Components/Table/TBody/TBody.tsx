import s from './TBody.module.css';
import {MockDataItem} from '@/assets/Interfaces/Interfaces';

export const TBody = ({filteredData, getEntryToChange}: {filteredData: MockDataItem[]}) => {
    // const changeData = ()

    return (
        <tbody>
            {filteredData.map((obj: MockDataItem) => (
                // поменять key на id приходящий с сервера
                <tr key={obj.number}>
                    <td className={s.table__cell}>{obj.number}</td>
                    <td className={s.table__cell}>{obj.date}</td>
                    <td className={s.table__cell}>{obj.client}</td>
                    <td className={s.table__cell}>{obj.driverName}</td>
                    <td className={s.table__cell}>{obj.phone}</td>
                    <td className={s.table__cell}>{obj.comment}</td>
                    <td className={s.table__cell}>{obj.status}</td>
                    <td className={s.table__cell}>{obj.aticode}</td>
                    <td className={s.table__cell}>
                        <button onClick={() => getEntryToChange(obj.number)}>Изменить</button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};
