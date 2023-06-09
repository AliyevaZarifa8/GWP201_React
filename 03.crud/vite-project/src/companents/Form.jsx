import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [inputValue, setInputValue] = useState({
        Title: '',
        Year: '',
        Images:''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        setInputValue({
            Title: '',
            Year: '',
            Images:''
        })
    }

    const disbaledBtn = !inputValue.Title || !inputValue.Year

    return (
        <div>
            <div >
                <h2 style={{ textAlign: 'center' }}>Movie Form</h2>

                <form className='movieForm' onSubmit={handleSubmit}>
                    <label htmlFor="title">Name</label>
                    <input value={inputValue.Title} onChange={(e) => setInputValue({ ...inputValue, Title: e.target.value })} type="text" id='title' placeholder='Enter a Title...' />
                    <label htmlFor="title">Name</label>
                    <input value={inputValue.Year} onChange={(e) => setInputValue({ ...inputValue, Year: e.target.value })} type="text" id='year' placeholder='Enter a Year...' />
                    <label htmlFor="year">Surname</label>
                    <input value={inputValue.Images} onChange={(e) => setInputValue({ ...inputValue, Images: e.target.value })} type="file"  id='photo' />
                    <button disabled={disbaledBtn} type='submit' className='btnForm'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Form