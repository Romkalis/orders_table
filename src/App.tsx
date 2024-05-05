import './App.css';
import Table from './Components/Table/Table';
import Form from './Components/Form/Form';
import {useState} from 'react';
import {MockDataItem} from '@/assets/Interfaces/Interfaces';

const App = function ({mockData}: {mockData: MockDataItem[]}) {
    const [data, setData] = useState(mockData);
    const [changeEntry, setChangeEntry] = useState(null);

    function getEntryToChange(orderNumber: number) {
        const entry = data.find((order) => order.number === orderNumber);
        // здесь получаем объект для изменения из data
        setChangeEntry(entry);
    };

    return (
        <>
            <Form data={data} setData={setData} changeEntry={changeEntry} />
            <Table data={data} getEntryToChange={getEntryToChange} />
        </>
    );
};

export default App;
