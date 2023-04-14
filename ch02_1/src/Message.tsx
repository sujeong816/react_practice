export type MessageProps = {
    value: string,
    color: string
}

export default function Message(props: MessageProps) {
    return (
        <div style={{color: props.color}}>{props.value}</div>
    )
}