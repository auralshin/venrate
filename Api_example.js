const fetch = require("node-fetch");
exports.getTransactions = async (req, res) => {
    const response = await fetch('https://api.etherscan.io/api?module=account&action=txlist&address=0xa9c0da0dA5cDB7947Fa124B14Beb1af63E75b6AF&startblock=0&endblock=99999999&sort=asc&apikey=TRHYJI21I2F9B3MAT4XFKIAF7AC6FIK88Q', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    /* 
    {
      blockNumber: '11616713',
      timeStamp: '1610143998',
      hash: '0xbd633ba440d70d9132f17c9e34a64f9c0cb1fea014d927ae2fdcb2199de01c70',
      nonce: '23',
      blockHash: '0x5c5b750db80cf35e8fdc063503c4856824da5be440314ce9c98332f8edde33b7',
      transactionIndex: '236',
      from: '0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a',
      to: '0xd26114cd6ee289accf82350c8d8487fedb8a0c07',
      value: '0',
      gas: '52346',
      gasPrice: '90000000000',
      isError: '0',
      txreceipt_status: '1',
      input: '0xa9059cbb000000000000000000000000c88fe66bcc71cf840c6a9aae4892c07a38b9e6260000000000000000000000000000000000000000000000a69671228c57640000',
      contractAddress: '',
      cumulativeGasUsed: '10008235',
      gasUsed: '52346',
      confirmations:'765647'
    */


    const myJson = await response.json();

    // !! TOTAL TRANSACTION OF THE GIVEN ADDRESS:
    let totalTransaction = Object.keys(myJson.result).length;

    //!!  TOTAL GAS PRICE OF ALL THE TRANSACTION:
    let totalgasPrice = 0;
    for (var i = 0; i < myJson.result.length; i++) {
        totalgasPrice += parseInt(myJson.result[i].gasPrice);
    }

    //!!  SIZE OF TRANSACTION:------------
    var data = []
    for (var i = 0; i <= 10; i++) {
        data.push(myJson.result[i])
    };

    //!!TOTAL VALUE:----------------------
    var totalValue = 0;
    for (var i = 0; i < data.length; i++) {
        totalValue += parseInt(data[i].value)
    }

    totalValue = (totalValue / 1000000000)

    //!!---------------------------------


    for (var i = 0; i < myJson.result.length; i++) {
        data.push(myJson.result[i])
    }

    //!! Blocks value after a time interval:--------------------
    // const FixedTimeCheck = (new Date().getTime()) - 3yearsTimes;

    const factorTime = data.filter((transaction) => {
        var timestamp = parseInt(transaction.timeStamp)
        // console.log(timestamp);
        return transaction.timeStamp > 1525633221; // Ye set hua hai -Sunday, 6 May 2018 19:00:21 ->This time can be changed according to need -Yaha change karo time:https://www.epochconverter.com/
    })

    let totalValueInterval = 0;
    for (var i = 0; i < factorTime.length; i++) {
        totalValueInterval += parseInt(factorTime[i].value)
    }


    let rating = totalTransaction + ((totalgasPrice + totalValue) / totalValueInterval);
    rating = rating/5;


    res.status(200).json
        (
            {
                totalTransactions: totalTransaction,
                totalgas: totalgasPrice,
                totalvalue: totalValue,
                totalValueInterval: totalValueInterval,
                rate: rating
            }
        )


    // // console.log();
}