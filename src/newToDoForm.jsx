import { useState } from "react"

export function NewToDoForm(props){

    const [newItem, setNewItem] = useState(" ")

    function handleSubmit(e){
        e.preventDefault()

        if(newItem === " ") 
        
        return
        props.onSubmit(newItem)
        
        setNewItem("")
    }

    return(
        <form onSubmit={handleSubmit} className="new-item-form">
        <h1>TODO List</h1>
        <div className="form__group field">
            <input 
                value={newItem} 
                onChange={e => setNewItem(e.target.value)} 
                type="input" className="form__field" 
                placeholder="Item" required
            />
            <label htmlFor="name" className="form__label">New Item</label>
        </div>
        <button className="btn">Add</button>
        </form>
    )
}