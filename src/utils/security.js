const reviewPasswords = {
    learner: "Apprenant",
    financer: "Pole Emploi",
    employer: "Employeur",
}

function checkPassword(type, password) {
    return reviewPasswords[type] === password;
}

module.exports = {checkPassword};