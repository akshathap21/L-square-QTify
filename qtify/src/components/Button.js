import "./Button.css"

const Button =(props)=>{
    return (
        <>
        <button className="button-button"> {props.text}</button>
        </>
    )
}
export default Button