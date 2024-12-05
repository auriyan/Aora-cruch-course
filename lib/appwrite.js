import { Client, Account, ID } from "react-native-appwrite";
export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aura',
    projectId: '67506b1e0039e1d12065',
    databaseId: '67506f200010d64dc5a7',
    userCollectionId: '67506f74001f24743498',
    videoCollectionId: '6750701d002f8748eb4f',
    storageId: '6750745700025b60d8d3',
}

const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) 

const account = new Account(client);
export const createUser = () => {
    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then( (response)  => {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}