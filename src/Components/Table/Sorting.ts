interface DataType {
    date: string;
}
interface StatusType {
    status: 'new' | 'active' | 'ready';
}

const sortByDate: (a: DataType, b: DataType) => number = (a, b) =>
  Date.parse(a.date) - Date.parse(b.date);

const sortByStatus: (statusA: StatusType, statusB: StatusType) => number = (statusA, statusB) => {
    const statusOrder = {
        new: 1,
        active: 2,
        ready: 3
    }
    return statusOrder[statusA.status] - statusOrder[statusB.status];
}




export {sortByDate, sortByStatus};

