import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Web3 from "web3";

export default function TestPage() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const [userInfo, setUserInfo] = useState({});
    const [isConneted, setIsConnected] = useState(false);

    const detectCurrentProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum.request({ method: "eth_requestAccounts" });
        } else {
            console.log("Non-Ethereum browser detected. You should consider trying MetaMask!")
        }
        return provider;
    }

    const onConnect = async () => {
        try {
            const currentProvider = detectCurrentProvider();
            console.log(currentProvider);
            if (currentProvider !== web3.currentProvider) {
                console.log("Non-Ethereum browser detected. You should consider trying MetaMask!")
            }
            // Returns a list of accounts.
            const userAccount = await web3.eth.getAccounts();
            // Returns the chain ID of the current connected node
            const chainId = await web3.eth.getChainId();
            // First account we found
            const account = userAccount[0];
            // Returns the balance of current account
            let ethBalance = await web3.eth.getBalance(account);
            saveUserInfo(account, chainId, ethBalance);
            if (userAccount.length === 0) {
                console.log('Please connect to Metamask');
            }
        } catch (error) {
            console.log('There was an error fetching your accounts. Make sure your Ethereum client is configured correctly.');
        }
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
        let provider;
        window.localStorage.removeItem('userAccount');
        setUserInfo({});
        setIsConnected(false);
        // provider = window.ethereum.on('disconnect', provider);
    }
    useEffect(() => {
        function checkConnectedWallet() {
            const userData = JSON.parse(localStorage.getItem('userAccount'));
            if (userData !== null) {
                setUserInfo(userData);
                setIsConnected(true);
            }
        }

        checkConnectedWallet();
    }, [])
    return (
        <div>
            {!isConneted ?
                <Button color="error" variant="contained" onClick={onConnect}>
                    Connect wallet
                </Button> :
                <Button color="success" variant="contained" onClick={onDisconnect}>
                    Disconnect wallet
                </Button>
            }
        </div>
    )
}