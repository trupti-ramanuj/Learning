// Rock-paper-scissors logic

function rps(user, computer) {

    if (user === computer) return "draw";
    if (user === "rock" && cpmputer === "scissor") return "user";
    if (user === "scissor" && cpmputer === "paper") return "user";
    if (user === "paper" && cpmputer === "rock") return "user";
    if (user === "scissor" && cpmputer === "rock") return "computer";

    if (user === "rock" && cpmputer === "paper") return "computer";
    if (user === "scissor" && cpmputer === "rock") return "computer";
}

console.log(rps("rock", "paper"));