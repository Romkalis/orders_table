import {Table, withTableSorting} from '@gravity-ui/uikit';
import s from './Table.module.css';
import {sortByDate, sortByStatus} from './Sorting';

const Info = ({data}) => {
    const columns = [
        {
            id: 'number',
            name: '№',
        },
        {
            id: 'date',
            name: 'Дата',
            className: s.date__date,
            meta: {defaultSortOrder: 'desc', sort: sortByDate},
        },
        {
            id: 'client',
            name: 'Клиент',
            className: s.cell__client,
        },
        {
            id: 'driversName',
            name: 'Имя водителя',
            className: s.cell__driver,
        },
        {
            id: 'phone',
            name: 'Телефон',
            className: s.cell__phone,
        },
        {
            id: 'comment',
            name: 'Комментарий',
            className: s.cell__comment,
        },
        {
            id: 'status',
            name: 'Статус',
            className: s.cell__status,
            meta: {defaultSortOrder: 'desc', sort: sortByStatus},
        }, // подумать как это сделать
        {
            id: 'aticode',
            name: 'ATI код',
            className: s.cell__ati,
        },
    ];

    const MyTable = withTableSorting(Table);
    return (
        <>
            <h1>Табличка</h1>
            <MyTable data={data} columns={columns} verticalAlign={'top'} />
        </>
    );
};

export default Info;
