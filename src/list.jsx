function MyList() {
    const countries = ["Ghana", "Kenya", "Nigeria", "Algeria", "Morocco"]

    return(
        <ul>
            {
                countries.map((country, index)=>(
                    <li key={index}>{country}</li>
                ))
            }
        </ul>
    )
}

export default MyList