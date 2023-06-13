export type Timestamped = {
    id: number;
    timestamp: number
}

export function mergeTimestampedList<T extends Timestamped>(oldList: T[], newList: T[]): T[] {
    const map = new Map<number, T>()
    for(const oldObj of oldList)
        map.set(oldObj.id, oldObj)
    return newList.map(obj => {
        const oldObj = map.get(obj.id)
        return (oldObj && oldObj.timestamp == obj.timestamp) ? oldObj : obj
    })
}