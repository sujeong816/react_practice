export type State = {
    message: string;
    count: number;
}

export type SetMessageFunc = (message: string) => void;
export type IncreaseFunc = () => void;