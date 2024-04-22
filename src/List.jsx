
export default function List(){
    const fruits = [{id: 1, name: 'apple', calories: 95},
    ]

    const listItems = fruits.map(item => <li>{item}</li>)

    return (listItems);
}