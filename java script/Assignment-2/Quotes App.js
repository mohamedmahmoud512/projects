var quotes = [
    { quotes: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { quotes: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "Marilyn Monroe" },
    { quotes: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe", author: "Albert Einstein" },
    { quotes: "So many books, so little time.", author: "Frank Zappa" },
    { quotes: "The only way to do great work is to love what you do.", author: "Mohamed Mahmoud" },
    { quotes: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind", author: "Bernard M. Baruch" },
    { quotes: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: " Dr. Seuss" },
    { quotes: "You only live once, but if you do it right, once is enough", author: "Mae West" },
    { quotes: "Be the change that you wish to see in the world", author: " Mahatma Gandhi" },
    { quotes: "Always forgive your enemies; nothing annoys them so much.", author: "Oscar Wilde" }
]
function QuotesShow() {
    var x = Math.round(Math.random() * 10)
    document.getElementById("QuoteOutput").innerHTML=quotes[x].quotes;
    document.getElementById("authorOutput").innerHTML=quotes[x].author;
}