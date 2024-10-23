

// eslint-disable-next-line react/prop-types
const InputNum = ({incrementValue,decrementValue,handleIncreValue,handleDecreValue}) => {
    return (
        <div>
            <label>increment</label>
            <input type="number" value={incrementValue} onChange={handleIncreValue}/>
            <label>decrement</label>
            <input type="number" value={decrementValue} onChange={handleDecreValue}/>
        </div>
    );
};

export default InputNum;