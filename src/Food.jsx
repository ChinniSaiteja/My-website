
function Food(){

    const food1 = 'Biryani';
    const food2 = 'Ice cream';
    return(
        <>
            <ul>
                <li>Apple</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>
        </>
    )
}

export default Food;