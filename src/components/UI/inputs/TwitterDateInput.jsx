
const TwitterDateInput = (props) => {
    const {dateInput, setDateInput} = props;
    return (
        <label htmlFor='date'>
            <input id="date"
                type="date"
                value={dateInput}
                onChange={(e) => {
                    setDateInput(e.target.value)

                }
                }
                placeholder='Selecciona tu fecha de nacimiento' />

        </label>
    )
}
export default TwitterDateInput