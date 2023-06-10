import React, {DragEvent, MouseEvent, ChangeEvent, FC, useState, useRef} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: DragEvent<HTMLDivElement>) => {
        console.log('drag')

    };

    const dropHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('drop')
    };

    const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    };

    const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    };

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder="managed"/>
            <input ref={inputRef} type="text" placeholder="unmanaged"/>
            <button onClick={clickHandler}>EventButton</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15}}>
            </div>
        </div>
    );
};

export default EventsExample;