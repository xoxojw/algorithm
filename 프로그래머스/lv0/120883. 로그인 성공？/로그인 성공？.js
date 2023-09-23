const solution = (id_pw, db) => {
    for (let i=0; i<db.length; i++) {
        if (id_pw[0] === db[i][0]) {
            for (let j=0; j<db.length; j++) {
                if (id_pw[0] === db[j][0] && id_pw[1] === db[j][1]) {
                    return "login";
                }
            }
            return "wrong pw";
        }
    }
    return "fail";
}