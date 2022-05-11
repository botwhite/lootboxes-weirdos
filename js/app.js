const NETWORK_ID = 97
var PriceBox1 = null
var PriceBox2 = null
var PricePBox1 = null
var PricePBox2 = null
var PriceMatic = null
var spend
var PRESALE_PRICE = null
var MAX_SUPPLY = null
var MAX_PRESALE_SUPPLY = null
var contract
var accounts
var web3
var spend;
var balance
var tokenbalance
var available
var mynft;
var currentAddr = null;
var balanceNFT
var IsAproba;
var stake;
var TokenUser = 0;
var misNftsID = [];
var iddeltango;
var balanceStake;
var TotalMinado;
var tokenContract;
const NftsAddress = '0x6A45b3f3D7632C6833aAbD40A3c550C6ad69baDa'

const tokenAddress = '0xF6690551bC37D22e14Ab5E24c2dD2F4c25CB48c9' // mainnet busd

const NftsABI = [{ "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "string", "name": "_initBaseURI", "type": "string" }, { "internalType": "string", "name": "_initNotRevealedUri", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "Seeprice1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "Seeprice2", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SeepriceMATIC", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SeepriceP1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SeepriceP2", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "addressMintedBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseExtension", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "costMATIC", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "costTokenUWU1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "costTokenUWU2", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "costTokenUWUP1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "costTokenUWUP2", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "isWhitelisted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMintAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_mintAmount", "type": "uint256" }], "name": "mintBox1", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_mintAmount", "type": "uint256" }], "name": "mintBox2", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nftPerAddressLimit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "notRevealedUri", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "onlyWhitelisted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reveal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "revealed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseExtension", "type": "string" }], "name": "setBaseExtension", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_costTokenUWU1", "type": "uint256" }, { "internalType": "uint256", "name": "_costTokenUWU2", "type": "uint256" }, { "internalType": "uint256", "name": "_costMATIC", "type": "uint256" }], "name": "setCost", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_limit", "type": "uint256" }], "name": "setNftPerAddressLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_notRevealedURI", "type": "string" }], "name": "setNotRevealedURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "setOnlyWhitelisted", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_newmaxMintAmount", "type": "uint256" }], "name": "setmaxMintAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokenERC20", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "walletOfOwner", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_users", "type": "address[]" }], "name": "whitelistUsers", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "whitelistedAddresses", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawUWU", "outputs": [], "stateMutability": "payable", "type": "function" }]
const tokenAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
window.addEventListener('load', connectWallet)

function metamaskReloadCallback() {
  window.ethereum.on('accountsChanged', (accounts) => {
    document.getElementById("web3_message").textContent = "Accounts changed, realoading...";
    window.location.reload()
  })
  window.ethereum.on('networkChanged', (accounts) => {
    document.getElementById("web3_message").textContent = "Network changed, realoading...";
    window.location.reload()
  })
}

const getAccounts = async () => {
  metamaskReloadCallback()
  try {
    await window.ethereum.request({ method: "eth_requestAccounts" })
    resolve(web3)
  } catch (error) {
    console.log(error)
  }
}

const getWeb3 = async () => {
  return new Promise((resolve, reject) => {
    if (document.readyState == "complete") {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum)
        resolve(web3)
      } else {
        reject("must install MetaMask")
        document.getElementById("web3_message").textContent = "Error: Please install Metamask";
      }
    } else {
      window.addEventListener("load", async () => {
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum)
          resolve(web3)
        } else {
          reject("must install MetaMask")
          document.getElementById("web3_message").textContent = "Error: Please install Metamask";
        }
      });
    }
  });
};

function handleRevertError(message) {
  alert(message)
}

async function getRevertReason(txHash) {
  const tx = await web3.eth.getTransaction(txHash)
  await web3.eth
    .call(tx, tx.blockNumber)
    .then((result) => {
      throw Error("unlikely to happen")
    })
    .catch((revertReason) => {
      var str = "" + revertReason
      json_reason = JSON.parse(str.substring(str.indexOf("{")))
      handleRevertError(json_reason.message)
    });
}

const getContract = async (web3) => {
  // const response = await fetch("./contracts/MinerGlobal.json");
  //const data = await response.json();

  const netId = await web3.eth.net.getId();
  //const deployedNetwork = data.networks[netId];
  tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
  contract = new web3.eth.Contract(NftsABI, NftsAddress);

  return contract
}

async function connectWallet() {
  getAccounts()
}

async function loadAccount() {

  accounts = await web3.eth.getAccounts()
  balance = await contract.methods.balanceOf(accounts[0]).call()


  tokenContract.methods.balanceOf(accounts[0]).call().then(userBalance => {
    let amt = web3.utils.fromWei(userBalance);

  }).catch((err) => {
    console.log(err)
  });






}


async function loadDapp() {

  var awaitWeb3 = async function () {
    web3 = await getWeb3()
    web3.eth.net.getId((err, netId) => {
      if (netId == NETWORK_ID) {


        var awaitContract = async function () {
          contract = await getContract(web3);


          MAX_SUPPLY = await contract.methods.maxSupply().call()
          total_mint = await contract.methods.totalSupply().call()

          PriceBox1 = await contract.methods.Seeprice1().call()
          PriceBox2 = await contract.methods.Seeprice2().call()

          PricePBox1 = await contract.methods.Seeprice1().call()
          PricePBox2 = await contract.methods.Seeprice2().call()


          PriceMatic = await contract.methods.SeepriceMATIC().call()
          var pbox1 = parseFloat((web3.utils.fromWei(PriceBox1) * 0.1) / 100) + parseFloat(web3.utils.fromWei(PriceBox1))
          var pbox2 = parseFloat((web3.utils.fromWei(PriceBox2) * 0.1) / 100) + parseFloat(web3.utils.fromWei(PriceBox2))


          document.getElementById("total_mint").textContent = total_mint + "/" + MAX_SUPPLY
          document.getElementById("PriceBox1").textContent = pbox1.toFixed(2) + " $UWU"
          document.getElementById("PriceBox2").textContent = pbox2.toFixed(2) + " $UWU"






          web3.eth.getAccounts(function (err, accounts) {
            if (err != null)
              console.error("An error occurred: " + err);
            else if (accounts.length == 0)
              console.log("User is not logged in to MetaMask");
            else {
              loadAccount()
            }
          });
        };
        awaitContract();
      } else {
        //document.getElementById("web3_message").textContent = "Please connect to Binance smart chain";
      }
    });
  };
  awaitWeb3();
}

loadDapp()



var init2 = 0; //se inicializa una variable en 0

function aum2() { // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar

  var cantidad = document.getElementById('val2').value = ++init2; //se obtiene el valor del input, y se incrementa en 1 el valor que tenga.

  var p = (parseFloat((web3.utils.fromWei(PriceBox2) * 0.1) / 100) * parseFloat(cantidad))
  var pbox2 = (parseFloat(web3.utils.fromWei(PriceBox2)) + p) * parseFloat(cantidad);
  document.getElementById("PriceBox2").textContent = pbox2.toFixed(2) + " $UWU"
  document.getElementById("PriMatic").textContent = `+${cantidad} Matic`


      
  tokenContract.methods.allowance(accounts[0], NftsAddress).call().then(result => {
    spend = web3.utils.fromWei(result)

      if (spend >= pbox2) {
     
        $("#mintBox2").show();
        $("#approve2").hide();
  
      }else{
        $("#mintBox2").hide();
        $("#approve2").show();
      }
  }).catch((err) => {
    console.log(err)
  });

}

function dis2() { // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
  var cantidad = document.getElementById('val2').value
  if (cantidad == 0) {
    document.getElementById('val2').value = '00'
  } else {
    var cantidad = document.getElementById('val2').value = --init2; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    var p = (parseFloat((web3.utils.fromWei(PriceBox2) * 0.1) / 100) * parseFloat(cantidad))
    var pbox2 = (parseFloat(web3.utils.fromWei(PriceBox2)) + p) * parseFloat(cantidad);
    document.getElementById("PriceBox2").textContent = pbox2.toFixed(2) + " $UWU"
    document.getElementById("PriMatic").textContent = `+${cantidad} Matic`


    
  tokenContract.methods.allowance(accounts[0], NftsAddress).call().then(result => {
    spend = web3.utils.fromWei(result)
 

    if (spend >= pbox2) {
     
      $("#mintBox2").show();
      $("#approve2").hide();

    }else{
      $("#mintBox2").hide();
      $("#approve2").show();
    }
  }).catch((err) => {
    console.log(err)
  });
  }
}


var init1 = 0; 

function aum1() {

  var cantidad = document.getElementById('val1').value = ++init1; 
  var p = (parseFloat((web3.utils.fromWei(PriceBox1) * 0.1) / 100) * parseFloat(cantidad))
  var pbox1 = (parseFloat(web3.utils.fromWei(PriceBox1)) + p) * parseFloat(cantidad);
  document.getElementById("PriceBox1").textContent = pbox1.toFixed(2) + " $UWU"



  tokenContract.methods.allowance(accounts[0], NftsAddress).call().then(result => {
    spend = web3.utils.fromWei(result)
 

    if (spend >= pbox1) {
     
      $("#mintBox1").show();
      $("#approve1").hide();

    }else{
      $("#mintBox1").hide();
      $("#approve1").show();
    }
  }).catch((err) => {
    console.log(err)
  });


}

function dis1() { 
  var cantidad = document.getElementById('val1').value
  if (cantidad == 0) {
    document.getElementById('val1').value = '00'

  } else {
    var cantidad = document.getElementById('val1').value = --init1; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    var p = (parseFloat((web3.utils.fromWei(PriceBox1) * 0.1) / 100) * parseFloat(cantidad))
    var pbox1 = (parseFloat(web3.utils.fromWei(PriceBox1)) + p) * parseFloat(cantidad);
    document.getElementById("PriceBox1").textContent = pbox1.toFixed(2) + " $UWU"
    
  tokenContract.methods.allowance(accounts[0], NftsAddress).call().then(result => {
    spend = web3.utils.fromWei(result)
 

    if (spend >= pbox1) {
     
      $("#mintBox1").show();
      $("#approve1").hide();

    }else{
      $("#mintBox1").hide();
      $("#approve1").show();
    }
  }).catch((err) => {
    console.log(err)
  });
  }
}




function approveMintBox2() {
  var box2 = document.getElementById('val2').value

  var p = (parseFloat((web3.utils.fromWei(PriceBox2) * 0.1) / 100) * parseFloat(box2))
  var pbox2 = (parseFloat(web3.utils.fromWei(PriceBox2)) + p) * parseFloat(box2);

 
  console.log(pbox2)
  approveBox2(pbox2);
}

function approveBox2(_amount) {
  let amt;
  if (_amount != 0) {
    amt = _amount;
    //alert(amt)
  }
  else {
    amt = 0
  }

  let _spend = web3.utils.toWei(amt.toString())
  tokenContract.methods.approve(NftsAddress, _spend).send({ from: accounts[0] }).then(result => {
    loadDapp()

  }).catch((err) => {
    console.log(err)
  });
}



function approveMintBox1() {
  var box1 = document.getElementById('val1').value

  var p = (parseFloat((web3.utils.fromWei(PriceBox1) * 0.1) / 100) * parseFloat(box1))
  var pbox1 = (parseFloat(web3.utils.fromWei(PriceBox1)) + p) * parseFloat(box1);

 
  console.log(pbox1)
  approveBox1(pbox1);
}

function approveBox1(_amount) {
  let amt;
  if (_amount != 0) {
    amt = _amount;
    //alert(amt)
  }
  else {
    amt = 0
  }

  let _spend = web3.utils.toWei(amt.toString())
  tokenContract.methods.approve(NftsAddress, _spend).send({ from: accounts[0] }).then(result => {
    loadDapp()

  }).catch((err) => {
    console.log(err)
  });
}


const mintbox1 = async () => {
  var box1 = document.getElementById('val1').value

  const result = await contract.methods.mintBox1(box1)
    .send({ from: accounts[0] })
    loadDapp()

    .catch((revertReason) => {
      getRevertReason(revertReason.receipt.transactionHash);
    });
}


const mintbox2 = async () => {
  var box2 = document.getElementById('val2').value

  const result = await contract.methods.mintBox2(box2)
    .send({ from: accounts[0],  gas: 0, value:  box2 * PriceMatic })
    loadDapp()
 
    .catch((revertReason) => {
      getRevertReason(revertReason.receipt.transactionHash);
    });
}


