import {FormEvent} from 'react';
import s from './Form.module.css';

const Form = function ({data, setData}) {
    const formHandler = (evt: FormEvent) => {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const formDataObject = Object.fromEntries(formData.entries());

        setData([...data, formDataObject]);
    };
    return (
        <>
            <form onSubmit={formHandler} action="#">
                <div className={s.form__section}>
                    <label>
                        <span>Номер Заявки:</span>
                        <input className={s.form__input} name="number" type="number" required />
                    </label>
                    <label>
                        <span>Дата:</span>
                        <input className={s.form__input} name="date" type="date" required />
                    </label>
                    <label>
                        <span>Клиент:</span>
                        <input
                            className={s.form__input}
                            name="client"
                            type="text"
                            placeholder="Клиент"
                            required
                        />
                    </label>
                </div>
                <div className={s.form__section}>
                    <label>
                        <span>Имя водителя:</span>
                        <input className={s.form__input} name="driverName" type="text" required />
                    </label>
                    <label>
                        <span>Телефон:</span>
                        <input
                            className={s.form__input}
                            name="phone"
                            type="tel"
                            placeholder="+79998887776"
                            required
                        />
                    </label>
                    <label>
                        <span>Статус:</span>
                        <select name="status" className={s.form__input}>
                            <option value="new">Новая заявка</option>
                            <option value="active">В работе</option>
                            <option value="ready">Выполнено</option>
                        </select>
                    </label>
                </div>
                <div className={s.form__section}>
                    <label>
                        <span>Комментарий:</span>
                        <textarea
                            className={s.form__input}
                            name="comment"
                            placeholder="Комментарий"
                            cols="30"
                            rows="4"
                        />
                    </label>
                    <div className={s.form__section}>
                        <label>
                            <span>ATI-код:</span>
                            <input
                                className={s.form__input}
                                name="aticode"
                                type="number"
                                placeholder="ATI-код"
                                required
                            />
                        </label>
                        <button type="submit" className={s.button}>
                            Создать заявку
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Form;
