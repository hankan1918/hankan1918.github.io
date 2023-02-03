const quotes = [{
    quote: "인무원려 필유근우",
    mean: "사람이 먼 생각이 없으면, 반드시 가까운 근심이 있다."
},
{
    quote: "주마가편",
    mean: "잘하는 사람을 더욱 잘하도록 격려한다."
},
{
    quote: "천려일실",
    mean: "아무리 지혜로운 사람이라도 많은 생각을 하다 보면 하나쯤은 실수가 있을 수도 있다."
},
{
    quote: "청출어람",
    mean: "스승보다 제자가 더 뛰어나거나 훌륭하다."
},
{
    quote: "타산지석",
    mean: "다른 사람의 하찮은 언행이라도 자신의 지식과 인격을 수양하는 데에 도움이 될 수 있다."
},
{
    quote: "환골탈태",
    mean: "몸과 얼굴이 몰라볼 만큼 좋게 변하였다."
},
{
    quote: "사필귀정",
    mean: "모든 일은 결국에는 반드시 옳은 이치대로 돌아간다."
},
{
    quote: "금과옥조",
    mean: "금과 옥같이 지켜야 하는 법규"
},
{
    quote: "고진감래",
    mean: "고생 끝에 낙이 온다."
},
{
    quote: "치악의악식사 부족여의",
    mean: "궃은 옷, 궃은 밥을 부끄러워 하는 자는 더불어 의논할 수 없다."
}]

const quote = document.querySelector("#quote span:first-child");
const mean = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
mean.innerText = todayQuote.mean;