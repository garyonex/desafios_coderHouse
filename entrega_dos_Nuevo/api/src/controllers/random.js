

const numerosRandom = (max) => {
    return Math.floor(Math.random() * max + 1)
}

const calculoRamdon = (req, res, next) => {
    const { num } = req.query
    if (num === '') {
        const result = numerosRandom()
        res.json(result)
    } else {
        const result = Number(num)
        res.json(result)
    }

}