const FormOptions = ({ id }) => {

    function getLink() {
        navigator.clipboard.writeText(`${window.location.hostname}/fillout_form/${id}`)
    }

    return (
        <nav>
            <button onClick={getLink}>Get Fillout Link</button>
        </nav>
    )
}

export default FormOptions;
