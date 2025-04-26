
export default function Button() {
    const handleClick = () => {
        console.log('Button clicked!');
        console.log('Button clicked!');
        console.log('Button clicked!');
        console.log('Button clicked!');
        console.log('Button clicked!');
        console.log('Button clicked!');
    };

    return <button onClick={handleClick}>+</button>;
}