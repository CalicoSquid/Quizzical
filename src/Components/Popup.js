
export default function Popup(props) {

    const styles = {
        backgroundColor: "rgb(230, 255, 1)",
        opacity: 0.7,
        position: "absolute",
        top: "-30px",
        right: 0, 
        width: "300px",
        borderRadius: "10px",
        border: "1px solid #4d5b9e"
    }

    return (
        <div className="popup" style={styles}>
            <p>{props.popupText}</p>
        </div>
    )
}