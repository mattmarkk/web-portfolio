import {useEffect, useRef, useState} from "react";


export default function TypingText({ text = '', timeoutMS = 100, className = '' }){
    const [visibleString, setVisibleString] = useState('');

    const currentIndex = useRef(0);

    useEffect(() => {
        if (visibleString.length !== text?.length) {
            setVisibleString('');
            currentIndex.current = 0;
        } else {
            return; // Already typed, do nothing
        }

        let timerId : NodeJS.Timeout;

        const typeNextChar = () => {

            if (currentIndex.current === text.length){
                return;
            }
            const nextChar = text[currentIndex.current];
            console.log(nextChar);

            setVisibleString((prev = '') => (currentIndex.current === 0 ? '' : prev) + nextChar);
            ++currentIndex.current;

            timerId = setTimeout(typeNextChar, timeoutMS);
        };

        timerId = setTimeout(typeNextChar, timeoutMS);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return (
        <div className="flex flex-row gap-2">
            <p className={className}>
                {visibleString}
            </p>
            { /* TODO: This cursor looks wrong when the text spans more than one line. */ }
            <p className={`${className} blink`}>
                |
            </p>
        </div>

    );
}