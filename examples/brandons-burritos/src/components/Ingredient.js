const Ingredient = (props) => {
    const info = props.info;
    return (
        <>
            <u>{info.label}</u>
            {info.options.map(
                s => <li>{s}</li>
            )}
            <br />
        </>
    );
}

export default Ingredient;