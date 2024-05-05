import s from './THead.module.css';

export const THead = ({setStatus}) => {
    return (
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
                        // value={status}
                    >
                        <option value="">Все заявки</option>
                        <option value="new">Новая</option>
                        <option value="active">В работе</option>
                        <option value="ready">Готовая</option>
                    </select>
                </th>
                <th className={s.table__header}>ATI код</th>
                <th className={s.table__header}></th>
            </tr>
        </thead>
    );
};
