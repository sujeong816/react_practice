export type Timestamped = { // 공통 부모 타입 선언 
    id: number, 
    timestamp: number 
} 
// T는 파라미터로 주어져야 하는 타입이다. T는 Timestamped 타입의 자식 타입이어야 한다. 
export function mergeTimestampedList<T extends Timestamped>(oldList: T[], newList: T[]): T[] { 
    const map = new Map<number, T>(); 
    for (const oldObj of oldList) 
        map.set(oldObj.id, oldObj); 
    return newList.map(obj => { 
        const oldObj = map.get(obj.id); 
        return (oldObj && oldObj.timestamp == obj.timestamp) ? oldObj : obj; 
    }); 
}