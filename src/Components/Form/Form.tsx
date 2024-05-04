import {Button, TextArea, TextInput} from '@gravity-ui/uikit';
import {DateField} from '@gravity-ui/date-components';
import s from './Form.module.css';
import React from 'react';

const Form = function ({data, setData}) {
    const formHandler = (evt: any) => {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const formDataObject = Object.fromEntries(formData.entries());
        setData(...data, JSON.parse(JSON.stringify(formDataObject)));
    };
    return (
        <>
            <form onSubmit={formHandler} action="#">
                <TextInput name="number" type="number" placeholder="Номер Заявки" size="l" />
                <DateField name="date" size="l" label="Дата:" />
                <TextInput name="client" placeholder="Клиент" size="l" />
                <TextInput name="driverName" placeholder="Имя водителя" size="l" />
                <TextInput name="phone" type="tel" placeholder="Телефон" size="l" />
                <TextArea name="comment" placeholder="Комментарий" size="l" />
                <TextInput name="status" placeholder="Статус" size="l" value="new" disabled />
                <TextInput name="aticode" type="number" placeholder="ATI-код" size="l" />
                <select name="status">
                    <option value="new">Новая заявка</option>
                    <option value="active">В работе</option>
                    <option value="ready">Выполнено</option>
                </select>
                <Button type="submit" className={s.button} size="l">
                    Создать заявку
                </Button>
            </form>
        </>
    );
};

export default Form;
