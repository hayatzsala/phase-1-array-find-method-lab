// code your solution here
function superbowlWin(arr){
    var winner = arr.find((element)=>{
        return element.result === 'W';
    });
    return winner === undefined ? undefined : winner.year;
}
