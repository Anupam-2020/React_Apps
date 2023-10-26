const test = (req, resp, next) => {
    resp.json({
        message: "API is working",
    })
}

module.exports = {test};