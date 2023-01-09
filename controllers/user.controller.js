async function register(req, res) {
    const { name, email } = req.body
    console.log(name)
    res.send({ message: "User register api called" });
}

async function getUsers(req, res) {
    res.send({ message: "User get api called" })
}


module.exports = {
    register,
    getUsers
}