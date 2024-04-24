
export default function List(props){
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)

    return (<>
          <h3 className="items-category">{props.category}</h3>
          <ul className="items-list">{listItems}</ul>
    </>);
}