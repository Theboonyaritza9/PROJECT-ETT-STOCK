import React from 'react';


// function CountButton({ onClick, count }) {
//     console.log('Render');
//     return <button onClick={onClick}>{count}</button>
// }

export default function UseCallbackDemo() {
    // Example 1

    const [count1, setCount1] = React.useState(0)
    const increment1 = () => {
        console.log('Render funtion1')
        setCount1(c => c + 1)
    }
    const [count2, setCount2] = React.useState(0)
    const increment2 = () => {
        console.log('Render funtion2')
        setCount2(c => c + 1)
    }
    return (
        <>
            <CountButton count={count1} onClick={increment1} />
            <CountButton count={count2} onClick={increment2} />
        </>
    )
}


const CountButton = React.memo(function CountButton({ onClick, count }) {
    console.log('Render button')
    return <button onClick={onClick}>{count}</button>
})

// export default function UseCallbackDemo() {
//     const [count1, setCount1] = React.useState(0)
//     const increment1 = React.useCallback(() => {
//         console.log('Re-render function 1')
//         setCount1(c => c + 1)
//     }
//         , [])
//     const [count2, setCount2] = React.useState(0)
//     const increment2 = React.useCallback(() => {
//         console.log('Re-render function 2')
//         setCount2(c => c + 1)
//     }, [])
//     return (
//         <>
//             <CountButton count={count1} onClick={increment1} />
//             <CountButton count={count2} onClick={increment2} />
//         </>
//     )
// }
