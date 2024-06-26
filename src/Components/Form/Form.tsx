import s from './Form.module.css';
import {MockDataItem} from '@/assets/Interfaces/Interfaces';
import {FormEvent, useEffect, useState} from 'react';

const Form = function ({data, setData, changeEntry}: {data: MockDataItem[]}) {
    const [formData, setFormData] = useState({});
    const [errorFlag, setErrorFlag] = useState(false);

    useEffect(() => {
        // отслеживаем приходят ли данные для изменения, если нет - то ицициализируем нач сост formData
        if (changeEntry) {
            setFormData(changeEntry);
        } else {
            setFormData({status: 'new'});
        }
    }, [changeEntry]);
    useEffect(() => {
        if (data.find((entry) => entry.number === formData.number)) {
            setErrorFlag(true);
        } else {
            setErrorFlag(false);
        }
    }, [formData.number]);

    const formHandler = (evt: FormEvent) => {
        evt.preventDefault();
        // проверка на уже существующий номер
        const existingEntryIndex = data.findIndex((entry) => entry.number === formData.number);
        if (existingEntryIndex === -1) {
            setData([...data, formData]);
            setFormData({status: 'new'});
        } else {
            // если номер существует то редактируем заявку по этому номеру
            setErrorFlag(true);
            const newData = [...data];
            newData[existingEntryIndex] = formData;
            setData(newData);
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <>
            <h2>Добавить заявку</h2>

            <form onSubmit={formHandler} action="#">
                <div className={s.form__section}>
                    <label className={s.form__label}>
                        <span className={s.label__title}>Номер Заявки:</span>
                        <input
                            className={s.form__input}
                            onChange={handleChange}
                            value={formData.number || ''}
                            name="number"
                            type="number"
                            placeholder="пример: 3345"
                            required
                        />
                        {errorFlag ? (
                            <small className={s.table__danger}>
                                Будьте внимательны! Такой номер уже существует.
                            </small>
                        ) : null}
                    </label>
                    <label className={s.form__label}>
                        <span className={s.label__title}>Дата:</span>
                        <input
                            className={s.form__input}
                            onChange={handleChange}
                            name="date"
                            type="datetime-local"
                            value={formData.date || ''}
                            required
                        />
                    </label>
                    <label className={s.form__label}>
                        <span className={s.label__title}>Клиент:</span>
                        <input
                            onChange={handleChange}
                            className={s.form__input}
                            name="client"
                            type="text"
                            placeholder="Клиент"
                            value={formData.client || ''}
                            required
                        />
                    </label>
                </div>
                <div className={s.form__section}>
                    <label className={s.form__label}>
                        <span className={s.label__title}>Имя водителя:</span>
                        <input
                            className={s.form__input}
                            onChange={handleChange}
                            name="driverName"
                            type="text"
                            value={formData.driverName || ''}
                            required
                        />
                    </label>
                    <label className={s.form__label}>
                        <span className={s.label__title}>Телефон:</span>
                        <input
                            onChange={handleChange}
                            className={s.form__input}
                            name="phone"
                            type="tel"
                            placeholder="+79998887776"
                            value={formData.phone || ''}
                            required
                        />
                    </label>
                    <label className={s.form__label}>
                        <span className={s.label__title}>Статус:</span>
                        <select
                            name="status"
                            onChange={handleChange}
                            className={s.form__input}
                            value={formData.status || 'new'}
                        >
                            <option value="new">Новая заявка</option>
                            <option value="active">В работе</option>
                            <option value="ready">Выполнено</option>
                        </select>
                    </label>
                </div>
                <div className={s.form__section}>
                    <label className={s.form__label}>
                        <span className={s.label__title}>Комментарий:</span>
                        <textarea
                            className={s.form__input}
                            onChange={handleChange}
                            name="comment"
                            placeholder="Комментарий"
                            value={formData.comment || ''}
                            cols={30}
                            rows={4}
                        />
                    </label>
                    <div className={s.form__section}>
                        <label className={s.form__label}>
                            <span className={s.label__title}>ATI-код:</span>
                            <input
                                onChange={handleChange}
                                className={s.form__input}
                                name="aticode"
                                type="number"
                                value={formData.aticode || ''}
                                placeholder="ATI-код: 1234"
                                required
                            />
                        </label>
                        <button className={s.form__button} type="submit">
                            {changeEntry ? 'Обновить данные' : 'Создать заявку'}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Form;
