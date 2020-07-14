import React, { useState } from "react";
import Web3 from "web3";
import { RealEstateABI } from "./RealEstateAbi.js";

import "./App.css";

const web3 = new Web3(Web3.givenProvider);

const contractAddress = "0x09f7c73dfeDE3Ccf86aD8699b3F9596f5C9c57E3"; //Contract Address
const HelloContract = new web3.eth.Contract(RealEstateABI, contractAddress);

function App() {
  const [owner, MyLandContract,totalLandsCounter,address,area,cost] = useState(0);



//// Get Owner Address
  var getOwnerData = async e => {
    e.preventDefault();

    var result = await HelloContract.methods.owner().call().then(function(res){
    console.log(res);
}).catch(function(err) {
    console.log(err);
});
  };



//// Get Total Lands In BlockChain
  var getTotalLandsInBlockChain = async e => {
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    console.log(account)
    var result = await HelloContract.methods.totalLandsCounter().call({from: account}).then(function(res){
    console.log(res);
}).catch(function(err) {
    console.log(err);
});
  };



  var getUserBalance = async e => {
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account =""+ accounts[0];

    var balance= await web3.eth.getBalance(account);
    console.log(balance);
  };



var RegisterUser = async e => {
    e.preventDefault();
    var accounts = await window.ethereum.enable();
    var account =""+ accounts[0];
    var gass = ""+3000000;

    console.log(account);
        console.log(gass);

    var results = await HelloContract.methods.MyLandContract().send({from: account, gas:gass, to:contractAddress}, (error, result) => {
                    if (result) console.log(result);
                    if (error) console.log(error);
                });
    console.log(results);
  };


var AddLandinBlockChain = async e => {
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account =""+ accounts[0];
    const gass = 3000000;

    console.log(address);
    console.log(area);
    console.log(cost);
    var result =await HelloContract.methods.addLand(address,area,cost).send({from: account, gas:gass});
    console.log(result);

}






  return (
    <div className="App">
      <header className="App-header">
      <h1 className = "Centre" >Real Estate App </h1>
</header>
<div className="App-data">
  <div className="App-row">
  <p className="Left"> Your Account: 0xD1c05B855cd6bFCEAcE7B8a31f51596B982e9958{getOwnerData}</p>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <p className="Left"> Total Properties in App: 10{getUserBalance} </p>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <p className="Right"> Your Balance: {getUserBalance} </p>

     </div>


<br/>
        <form >
          <label className="Heading">
            Add Property
            <br />

            <input
              type="text"
              name="address"
              value = {address}
              placeholder="your address"
            />

             <input
              type="text"
              name="area"
              value = {area}
            placeholder="location"

            />
             <input
              type="text"
              name="cost"
              value = {cost}
            placeholder="cost"

            />
                         <input
              type="text"
              name="Type"
              value = {cost}
            placeholder="Property Type"
            />

      &nbsp;
<button onClick={RegisterUser} type="button">
          Submit
        </button>
          </label>



        <br />
        <br />
<br/>

        <label className="Heading">
            Search Property
            <br />

            <input
              type="text"
              name="address"
              value = {address}
              placeholder="Address"
            />

             <input
              type="text"
              name="area"
              value = {area}
            placeholder="Property ID"

            />
&nbsp;
<button onClick={getOwnerData} type="button">
  Search
        </button>
        <br/>
         Requested Property Details:
            <input
              type="text"
              name="address"
              value = {address}
              placeholder="owner address"
            />

             <input
              type="text"
              name="area"
              value = {area}
            placeholder="location"

            />
             <input
              type="text"
              name="cost"
              value = {cost}
            placeholder="cost"

            />
                         <input
              type="text"
              name="isAvailableForSale"
              value = {cost}
            placeholder="Availability"
            />

            <input
              type="text"
              name="PropertyID"
              value = {cost}
            placeholder="Property ID"
            />

            <input
              type="text"
              name="propertyType"
              value = {cost}
            placeholder="Property Type"
            />

          </label>
          <br /><br /><br />





          <label className="Heading">
            Search Your Property
            <br />

             <input
              type="text"
              name="area"
              value = {area}
            placeholder="Property ID"

            />
&nbsp;
<button onClick={getOwnerData} type="button">
  Search
        </button>
        <br/>
         Requested Property Details:

            <input
              type="text"
              name="address"
              value = {address}
              placeholder="owner address"
            />

             <input
              type="text"
              name="area"
              value = {area}
            placeholder="location"

            />
             <input
              type="text"
              name="cost"
              value = {cost}
            placeholder="cost"

            />
                         <input
              type="text"
              name="isAvailableForSale"
              value = {cost}
            placeholder="Availability"
            />

            <input
              type="text"
              name="PropertyID"
              value = {cost}
            placeholder="Property ID"
            />

            <input
              type="text"
              name="propertyType"
              value = {cost}
            placeholder="Property Type"
            />

        <br />
          </label>
          <br />
          <br />


          <label className="Heading">
            Transfer your property
            <br />


            <input
              type="text"
              name="area"
              value = {area}
            placeholder="Buyer Address"

            />
             <input
              type="text"
              name="area"
              value = {area}
            placeholder="Property ID"

            />
&nbsp;
<button onClick={getOwnerData} type="button">
  Transfer
        </button>
        <br/>
        <br />
          </label>


          <label className="Heading">
            Buy property
            <br />

            <input
              type="text"
              name="area"
              value = {area}
            placeholder="Seller Address"

            />
             <input
              type="text"
              name="area"
              value = {area}
            placeholder="Property ID"
            />
&nbsp;
<button onClick={getOwnerData} type="button">
  Buy
        </button>
        <br/>
        <br />
          </label>


          <label className="Heading">
            Transfer Ether
            <br />


            <input
              type="text"
              name="area"
              value = {area}
            placeholder="Reciever Address"

            />
             <input
              type="text"
              name="area"
              value = {area}
            placeholder="Amount"
            />
&nbsp;
<button onClick={getOwnerData} type="button">
  Transfer
        </button>
        <br/>
        <br />
          </label>

        </form>
      </div>
    </div>
  );
}

export default App;
