import { useState } from "react";
const TwitterNameInput = (props) => {

    const [animationName, setAnimationName] = useState('');
    const[nameFocus, setNameFocus] = useState(false);

    let   {nameInput, setNameInput } = props

    let nameClassName = '';
    if (animationName || nameInput.length) {
        nameClassName = 'animate-span';
    }
    return (

        <label htmlFor="name" className={nameFocus ? 'focus-label' : ''}>
            <div className='flex-row-between'>
                <span className={nameClassName}>Nombre</span>
                {nameClassName && <span className="input-counter">{nameInput.length} / 50</span>}
            </div>
            <input id="name" type="text"
                value={nameInput}
                onChange={(e) => {

                    setNameInput(e.target.value)


                }
                }
                onBlur={() => {
                    setAnimationName('')
                    setNameFocus(false)

                }}
                onFocus={() => {
                    setNameFocus(true)
                    setAnimationName('animate-span')
                }} />
        </label>
    )
}
export default TwitterNameInput