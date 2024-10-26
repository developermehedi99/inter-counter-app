
const ShowTask = ({tasks}) => {
    return (
        <div>
            {tasks.length > 0 ? 
            <ul>
                {tasks.map(task => <li key={task.id}>{task.text}</li>)}
            </ul>
            : <p>no task found now</p>}
        </div>
    );
};

export default ShowTask;