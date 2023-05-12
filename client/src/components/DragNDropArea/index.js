import React, { useState } from 'react';
import styles from './DragArea.module.css';
import cx from 'classnames';

const DragNDropArea = () => {
    const [dragOn, setDragOn] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const cn = cx(styles['drag-area-container'], {
        [styles['drag-active']]: dragOn
    });

    const dragOverHandler = () => {
        setDragOn(true)
    }

    const dragLeaveHandler = () => {
        setDragOn(false)
    }

    const inputChangeHandler = (event) => {
        setDragOn(false);
        console.dir();
        const fr = new FileReader();
        fr.onload = () => {
            setInputValue(fr.result);
        }
        fr.readAsDataURL(event.target.files[0]);
    }

    const submitHandler = () => {
        console.log(inputValue);
    }

    const clearInput = () => {
        setInputValue('');
    }

    const imgPreviewLayout = (<>
        <img src={inputValue} className={styles['image-preview']} />
        <button onClick={submitHandler}>Submit</button>
        <span>or</span>
        <button onClick={clearInput}>Choose another file</button>
    </>)

    const dragNDropLayout = (<>
            <input type="file" className={styles['drag-input']} onChange={inputChangeHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragOverHandler}
            />
            <i class="fas fa-cloud"></i>
            <h3>Drag&Drop files here</h3>
            <span>or</span>
            <label className={styles['label-button']}>Browse files</label>
        </>)

    return (
        <div className={cn}>
            {inputValue ? imgPreviewLayout : dragNDropLayout}
        </div >
    );
}

export default DragNDropArea;
