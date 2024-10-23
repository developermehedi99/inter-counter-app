
// eslint-disable-next-line react/prop-types
const Button = ({inc,dec}) => {
    return (
        <div>
            <button onClick={inc}>increment</button>
            <button onClick={dec}>decrement</button>
        </div>
    );
};

export default Button;