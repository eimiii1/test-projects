import { useState } from "react"

interface Props {
    items: string[];
    heading: string;
    onSelect: (item: string) => void;
}

export default function ListGroup({ items, heading, onSelect }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const style = {
        transition: "0.3s"
    }
    return (
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        style={style}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index)
                            onSelect(item)
                        }}

                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    )
}