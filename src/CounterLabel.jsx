const CounterLabel = (props) => {
    return (
        props.counter ? 
        <>
            <h2>counter {props.counter}</h2>
        </> : 
        <>
            No value
        </>
    )
}

export default CounterLabel;