import React, {useState, useContext} from "react"
import BooksContext from "../context/Books";

function BookCreate() {
    const [title, setTitle] = useState('')
    const { handleBookCreate } = useContext(BooksContext)

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        handleBookCreate(title)
        setTitle("")
    }


    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="Title">Title</label>
                <input
                    className="input"
                    id="Title"
                    value={title}
                    onChange={handleChange}
                />
                <button className="button">Submit</button>
            </form>
        </div>
    )

}

export default BookCreate