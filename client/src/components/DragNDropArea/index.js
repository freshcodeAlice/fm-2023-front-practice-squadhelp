import React, { useState } from 'react';
import { useField } from 'formik';
import styles from './DragArea.module.css';
import cx from 'classnames';

const DragNDropArea = (props) => {
    const [field, meta, helpers] = useField(props.name);
    const [dragOn, setDragOn] = useState(false);
    // const [inputValue, setInputValue] = useState('');

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
        const fr = new FileReader();
        fr.onload = () => {
            // setInputValue(fr.result);
            console.log('ON CHANGE');
            helpers.setValue(fr.result);
        }
        fr.readAsDataURL(event.target.files[0]);
    }

    const submitHandler = () => {
        console.log(field.value);
    }

    const clearInput = () => {
        // setInputValue('');
        helpers.setValue('');
    }

    const imgPreviewLayout = (<>
        <img src={field.value} className={styles['image-preview']} />
        <span>or</span>
        <button onClick={clearInput}>Choose another file</button>
    </>)

    const dragNDropLayout = (<>
            <input type="file" className={styles['drag-input']} 
                
                onDragLeave={dragLeaveHandler}
                onDragOver={dragOverHandler}
                {...field}
                onChange={inputChangeHandler}
            />
            <i className="fas fa-cloud"></i>
            <h3>Drag&Drop files here</h3>
            <span>or</span>
            <label className={styles['label-button']}>Browse files</label>
        </>)

    return (
        <div className={cn}>
            {field.value ? imgPreviewLayout : dragNDropLayout}
        </div >
    );
}

export default DragNDropArea;
