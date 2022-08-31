// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]



function superbowlWin(array) {
    let win = array.find(element => element.result === "W") 
    if (win) {
        return win.year
    }
    return win
}


