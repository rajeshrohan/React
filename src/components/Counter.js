function Counter(){
    let number = 0;
    function handleClick(e){
        e.stopPropagation();
        number++;
        console.log(number);
    }

    return (
        <>
            <h1 style={{color:'white'}}>{number}</h1>
            <button onClick={handleClick}> Add </button>
        </>
    )

}
export default Counter;