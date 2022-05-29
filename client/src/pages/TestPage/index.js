import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import axios from "axios";

export default function TestPage() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const [userInfo, setUserInfo] = useState({});
    const [isConneted, setIsConnected] = useState(false);
    const token = process.env.ETHERSCAN_API_TOKEN || "";

    useEffect(() => {
        fetch(`https://api.etherscan.io/api?module=account&action=tokennfttx&contractaddress=0x06012c8cf97bead5deae237070f9587f8e7a266d&address=${userInfo.account}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=${token}`)
            .then(response => response.json())
            .then(data => console.log(data));
    }, [])

    const connectWallet = async () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum.request({ method: "eth_requestAccounts" });
            try {
                // Returns a list of accounts.
                const userAccount = await web3.eth.getAccounts();
                // First account in index
                const account = userAccount[0];
                // Returns the chain ID of the current connected node
                const chainId = web3.eth.getChainId();
                // Returns the balance of current account
                let ethBalance = await web3.eth.getBalance(account);
                saveUserInfo(account, chainId, ethBalance);
                if (userAccount.length === 0) {
                    console.log('Please connect to Metamask');
                }
            } catch (error) {
                console.log('There was an error fetching your accounts. Make sure your Ethereum client is configured correctly.');
            }
        } else {
            console.log("Non-Ethereum browser detected. You should consider trying MetaMask!")
        }
        return provider;
    }

    const saveUserInfo = (account, chainId, ethBalance) => {
        const userAccount = {
            account: account,
            connectionId: chainId,
            balance: ethBalance
        };
        // User persisted data
        window.localStorage.setItem('userAccount', JSON.stringify(userAccount));
        const userData = JSON.parse(localStorage.getItem('userAccount'));
        setUserInfo(userData);
        setIsConnected(true)
    }

    const onDisconnect = () => {
        window.localStorage.removeItem('userAccount');
        setUserInfo({});
        setIsConnected(false);
        // provider = window.ethereum.on('disconnect', provider);
    }
    useEffect(() => {
        function checkConnectedWallet() {
            const userData = JSON.parse(localStorage.getItem('userAccount'));
            if (userData) {
                setUserInfo(userData);
                setIsConnected(true);
            } else {
                setUserInfo({});
                setIsConnected(false);
            }
        }

        checkConnectedWallet();
    }, [isConneted]);
    return (
        <div>
            {!isConneted ?
                <Button color="error" variant="contained" onClick={connectWallet}>
                    Connect wallet
                </Button> :
                <Button color="success" variant="contained" onClick={onDisconnect}>
                    Disconnect wallet
                </Button>
            }
        </div>
    )
}