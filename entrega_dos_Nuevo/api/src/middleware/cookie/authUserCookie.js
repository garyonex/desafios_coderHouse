export const loginUserCoo = (req, res) => {
    const { username, password, token } = req.body
    if (req.session.username) {
        const result = { name: req.session.username }
        console.log(result)
    } else {
        'not login'
    }
}

export const logoutCoo =  (req, res) => {
    const user = req.session.username
    req.session.destroy(err => {
        if(err){
            console.log(`${err}, existe un error en logout cookie`);
        }
    })
    console.log(`Adios ${user}`);
}