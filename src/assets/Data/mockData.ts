import {MockDataItem} from '../Interfaces/Interfaces';

export const mockData: MockDataItem[] = [
    {
        number: 1,
        date: '2024-05-02T14:23:12',
        client: 'OOO "Vostok-Zapad"',
        driverName: 'Ivanov Ivan Ivanovich',
        phone: '+7 (900) 123-45-67',
        comment: 'Need to pick up cargo from the warehouse at: g. Moskva, ul. Lenina, d. 1',
        status: 'ready',
        aticode: '1234',
    },
    {
        number: 2,
        date: '2024-05-02T13:56:21',
        client: 'IP Petrov',
        driverName: 'Sidorova Maria Petrovna',
        phone: '+7 (987) 654-32-10',
        comment:
            'Deliver the cargo to the address: g. Sankt-Peterburg, ul. Nevskiy prospekt, d. 15',
        status: 'active',
        aticode: '3345',
    },
    {
        number: 3,
        date: '2024-05-02T11:32:45',
        client: 'AO "Sibneft"',
        driverName: 'Kuznetsov Boris Sergeevich',
        phone: '+7 (926) 345-67-89',
        comment: 'Transport dangerous cargo, escort required.',
        status: 'new',
        aticode: '4436',
    },
    {
        number: 4,
        date: '2024-05-01T18:45:12',
        client: 'OOO "Luch"',
        driverName: 'Vasilieva Olga Nikolaevna',
        phone: '+7 (910) 765-43-21',
        comment: 'Pick up documents from the office at: g. Kazan, ul. Baumana, d. 10',
        status: 'ready',
        aticode: '2345',
    },
    {
        number: 5,
        date: '2024-05-01T16:23:54',
        client: 'IP Sidorov',
        driverName: 'Petrov Nikolay Aleksandrovich',
        phone: '+7 (963) 234-56-78',
        comment:
            'Need to deliver food to the store at: g. Nizhniy Novgorod, ul. Bolshaya Pokrovskaya, d. 25',
        status: 'active',
        aticode: '5666',
    },
    {
        number: 6,
        date: '2024-05-01T14:12:33',
        client: 'AO "Gazprom"',
        driverName: 'Sokolova Irina Dmitrievna',
        phone: '+7 (904) 567-89-01',
        comment:
            'Transport equipment from the factory to the warehouse at: g. Yekaterinburg, ul. Shefskaya, d. 100',
        status: 'new',
        aticode: '1437',
    },
    {
        number: 7,
        date: '2024-04-30T19:34:22',
        client: 'OOO "Alfa"',
        driverName: 'Popov Sergey Viktorovich',
        phone: '+7 (932) 876-54-32',
        comment:
            'Deliver furniture to the apartment at: g. Chelyabinsk, ul. Leninskiy prospekt, d. 50, kv. 345',
        status: 'new',
        aticode: '1667',
    },
];
