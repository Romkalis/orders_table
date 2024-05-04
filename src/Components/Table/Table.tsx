import {Table, withTableSorting} from '@gravity-ui/uikit';
import s from './Table.module.css';
import {sortByDate, sortByStatus} from './Sorting';

const Info = ({data}) => {
    // const columns = [
    //     {
    //         id: 'number',
    //         name: '№',
    //     },
    //     {
    //         id: 'date',
    //         name: 'Дата',
    //         className: s.date__date,
    //         meta: {defaultSortOrder: 'desc', sort: sortByDate},
    //     },
    //     {
    //         id: 'client',
    //         name: 'Клиент',
    //         className: s.cell__client,
    //     },
    //     {
    //         id: 'driverName',
    //         name: 'Имя водителя',
    //         className: s.cell__driver,
    //     },
    //     {
    //         id: 'phone',
    //         name: 'Телефон',
    //         className: s.cell__phone,
    //     },
    //     {
    //         id: 'comment',
    //         name: 'Комментарий',
    //         className: s.cell__comment,
    //     },
    //     {
    //         id: 'status',
    //         name: 'Статус',
    //         className: s.cell__status,
    //         meta: {defaultSortOrder: 'desc', sort: sortByStatus},
    //     },
    //     {
    //         id: 'aticode',
    //         name: 'ATI код',
    //         className: s.cell__ati,
    //     },
    // ];

    // const MyTable = withTableSorting(Table);
    return (
        <>
            <h1>Табличка</h1>
            {/* <MyTable data={data} columns={columns} verticalAlign={'top'} /> */}
            <div className={s.table__wrapper}>
                <table>
                    <tr>
                        <th>№</th>
                        <th>Дата:</th>
                        <th>Клиент</th>
                        <th>Имя водителя</th>
                        <th>Телефон</th>
                        <th>Комментарий</th>
                        <th>
                            <select className={s.table__select}>
                                <option value="new">Новая</option>
                                <option value="active">В работе</option>
                                <option value="ready">Готовая</option>
                            </select>
                        </th>
                        <th>ATI код</th>
                    </tr>
                    {data.map((obj) => (
                        <tr key={obj.number}>
                            <td>{obj.number}</td>
                            <td>{obj.date}</td>
                            <td>{obj.client}</td>
                            <td>{obj.driverName}</td>
                            <td>{obj.phone}</td>
                            <td>{obj.comment}</td>
                            <td>{obj.status}</td>
                            <td>{obj.aticode}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
};

export default Info;
