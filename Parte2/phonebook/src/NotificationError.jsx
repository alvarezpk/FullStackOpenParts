
const NotificationError = ({messageError}) => {

    if (messageError === null) {
        return null
    }

    return(
        <div className="messageErrorStyle">
            {messageError}
        </div>
    )
}

export default NotificationError