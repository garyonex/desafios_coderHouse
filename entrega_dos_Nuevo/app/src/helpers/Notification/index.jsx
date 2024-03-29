const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    return (
        <div className='errorNotification'>
            {message}
        </div>
    )
}

export default Notification