const reviewPasswords = {
    learner: "Apprenant",
    poleEmploi: "Pole Emploi",
    employer: "Employeur",
}

function matchReviewType(input) {
    for (const type in reviewPasswords) {
        if (reviewPasswords[type] === input) return type;
    }
    return "Wrong password";
}

module.exports = {matchReviewType};