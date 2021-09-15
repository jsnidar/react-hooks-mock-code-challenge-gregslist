import React, {useState} from 'react';



const NewListingForm = ({createNewListing}) => {
    
    const [formData, setFormData] = useState({
        description: '',
        image: '',
        location: ''
    })

    const handleChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;

        setFormData({
            ...formData, [name]: value,
        });
    }
    function handleSubmitNewListing(event) {
        event.preventDefault();
        createNewListing(formData);
    }

    return (
        <div>
            <form onSubmit={handleSubmitNewListing}>
                <label>Create New Listing</label>
                <br></br>
                <label>Listing Description: </label>
                <input onChange={handleChange} value={formData.description} name='description' type="text" placeholder='Enter description here...'></input>
                <br></br>
                <label>Listing Image: </label>
                <input onChange={handleChange} value={formData.image} name='image' type='url' placeholder='Enter image URL here...'></input>
                <br></br>
                <label>Location: </label>
                <input onChange={handleChange} value={formData.location} name='location' type='text' placeholder='Enter location here...'></input>
                <br></br>
                <button type='submit'>Submit Listing</button>
            </form>
        </div>
        
    )
}

export default NewListingForm;