const scores = [
    {id: 33, score: 10}, {id: 33, score: 8}, {id: 33, score: 9},
    {id: 55, score: 5}, {id: 55, score: 7}, {id: 55, score: 6}
]

const averageOfMaxUserScores = data => amount => id => data
    .filter( user => user.id == id )
    .map( user => user.score )
    .sort( (a, b) => b - a ).slice(0, amount)
    .reduce( (sum, score) => sum += score ) / amount

const avg = document.querySelector("#avg")
const uid = document.querySelector("#uid")

uid.addEventListener("keyup", () => {
    const average = averageOfMaxUserScores(scores)(2)(uid.value)
    avg.innerHTML = average
})

//console.log(averageOfMaxScores(scores)(2)(33))

/*
const iterative = (data, amount, uid) => {
    let uScores = [], highest = 0

    for(let u of data)
    if(u.id == uid)
        uScores.push(u.score)

    for(let i in uScores){
    for(let j in uScores){
        if(uScores[i] > uScores[j]){
            let temp = uScores[i]
            uScores[i] = uScores[j]
            uScores[j] = temp
        }
    }
    }

    for(let i = 0; i < amount; i++)
        highest += uScores[i]

    return highest/amount
}

console.log(iterative(scores, 2, 2))
*/
