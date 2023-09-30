function squareRoot(N, Eps) {
    let left = 1
    let right = N
    let center = (left + right) / 2

    let iterations = 0
    while(Math.abs(center * center - N) > Eps) {
        center = (left + right) / 2
        if(center * center < N) {
            left = center
        } else {
            right = center
        }

        iterations++
        if(iterations > 200) return NaN;
    }

    return center
}

const el_N = document.getElementById('N')
const el_Eps = document.getElementById('Eps')
let N = 8
let Eps = 0.000000000001
el_N.value = N
el_Eps.value = "0.000000000001"
update()

function update() {
    document.getElementById('resultSquareRoot').innerText = `squareRoot(${N}, ${Eps}) = ${squareRoot(N, Eps)}`
    document.getElementById('resultMathSqrt').innerText = `Math.sqrt(${N}) = ${Math.sqrt(N)}`
    const fixed1 = squareRoot(N, Eps).toFixed(7)
    const fixed2 = Math.sqrt(N).toFixed(7)
    const el_resultCompare = document.getElementById('resultCompare')
    el_resultCompare.innerText = `${fixed1} | ${fixed2}`
    if(fixed1 === fixed2) {
        el_resultCompare.style.color = "green"
    } else {
        el_resultCompare.style.color = "red"
    }
}



el_N.addEventListener('input', () => {
    N = + el_N.value
    update()
})
el_Eps.addEventListener('input', () => {
    Eps = + el_Eps.value
    update()
})