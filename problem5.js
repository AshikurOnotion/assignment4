

function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "please get some money";
    }
    const totalAmount = changeArray.reduce((sum, value) => sum + value, 0);
    return totalAmount >= totalDue;
}

