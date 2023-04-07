const question =  [ 
    {
        'que' : 'which country is going to host G20 in 2023 ?',
        'a' : 'Japan',
        'b' : 'china ',
        'c' : 'India',
        'd' : 'France',
        'correct' : 'c'
    },
    {
        'que' : 'when is earth day celebrated ?',
        'a' : '22 April',
        'b' : '21 July',
        'c' : '21 April ',
        'd' : '22 July',
        'correct' : 'a'
    },
    {
        'que' : 'which is the rarest earth metal  ',
        'a' : 'thrornium',
        'b' : 'francium',
        'c' : 'cadmium ',
        'd' : 'scandium',
        'correct' : 'b'
    },
    {
        'que' : 'which is a markup language  ',
        'a' : 'HTML',
        'b' : 'CSS ',
        'c' : 'JavaScript',
        'd' : 'Java',
        'correct' : 'a'
    },

]
let index = 0; 
let total = question.length ; 
let right = 0 , 
wrong = 0 ; 
const queBox = document.getElementById("queBox")
const optionInput = document.querySelectorAll('.option')

const loadQuestion = () => {
    if (index == total ){
        return endQuiz()
    }
    reset ();
    const data = question[index]
    console.log (data)
    queBox.innerText = `${index + 1 }) ${data.que}`
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const ans = getAns()
    const data = question[index]
    if (ans == data.correct){
        right++;
    }
    else{
        wrong ++; 
    }
    index++ ; 
    loadQuestion ();
    return ; 
}

const getAns = () => {
    let answer ;
    optionInput.forEach (
        (input) => {
            if (input.checked){
                answer = input.value ;
                 
            }

        }
    )
    return answer ; 
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false ; 
        }
    )
};
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style = " text-align : center">
    <h3> Thank you for playing the quiz </h3>
    <h2>Your score is ${right}/ ${total}</h2> 
    </div>
    `
}
loadQuestion();