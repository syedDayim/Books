import React from "react"

function BookCreate({ onCreate }) {
    const [title, setTitle] = React.useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        onCreate(title)
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