

const Notification = ({message}) => {

    if (message === null) {
        return null
    }

    return(
        <div className="messageStyle">
            {message}
        </div>
    )
}

export default Notification