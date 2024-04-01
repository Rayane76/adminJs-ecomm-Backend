import React from 'react'



// just some regular React component
const MyInputComponent = () => {

    const currentPathname = window.location.pathname;

    // const newUrl = `${currentPathname}/upload-image`;
    const urlParts = currentPathname.split("/");

// Get the id from the URL
const id = urlParts[urlParts.length - 2];
const newUrl = "http://localhost:3000/uploadImage/" + id;
    return(
<a href={newUrl}>Upload image</a>
    )
}

export default MyInputComponent