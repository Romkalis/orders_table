export interface MockDataItem {
    number: number;
    date: string;
    client: string;
    driverName: string;
    phone: string;
    comment: string;
    status: 'new' | 'active' | 'ready'; // Используйте литеральные типы для ограничения возможных значений
    aticode: string;
}
