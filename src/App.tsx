import './App.css';
import Info from './Components/Table/Table';
import Form from './Components/Form/Form';
import {useState} from 'react';

const App = function ({mockData}) {
    const [data, setData] = useState(mockData);
    console.log(data);
    return (
        <>
            <Form data={data} setData={setData} />
            <Info data={data} />
        </>
    );
};

export default App;
