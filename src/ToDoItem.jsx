export function ToDoItem({completed, id, title, toggleToDo, deleteToDo}){
    return(
        <li>
            <label htmlFor="" className="item_list">
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={e => toggleToDo(id, e.target.checked)} 
            />

            {title}
            </label>

            <button 
                onClick={() => deleteToDo(id)} 
                className="delete"
            >
                <p className="paragraph"> delete </p>
                <span className="icon-wrapper">
                    <svg className="icon" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>
            </button>
        </li>
    )
}