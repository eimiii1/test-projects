type MessageProps = {
    name: string;
}

export default function Message(props: MessageProps) {
    return (
        <h1>Hello, {props.name}!</h1>
    )
}