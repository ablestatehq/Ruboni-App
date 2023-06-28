import { Client, Databases, Account, ID } from 'appwrite';
import { APPWRITE_PROJECT_ID, APPWRITE_API_ENDPOINT } from "@env";
import userType from '../utils/enum'
const appwriteClient = new Client();

export default class AppwriteService {
    account;
    databases;

    constructor(){

        appwriteClient
        .setEndpoint(APPWRITE_API_ENDPOINT)
        .setProject(APPWRITE_PROJECT_ID)

        this.account = new Account(appwriteClient);
        this.databases = new Databases(appwriteClient);
    }

    // creating a new record of the user in appwrite
    async createAccount(email, firstName, lastName, phone, password){
        try {
            const userAccount = await this.account.create({ 
                userId: ID.unique(),
                email,
                password,
                userType: userType.Cust,
                firstName: firstName,
                lastName: lastName,
                phone: phone, 
                createAt: new Date().toUTCString()
            });

            if(userAccount){
                //TODO: allow login
                return this.login({email, password});
            }else{
                return userAccount;
            }
        } catch (error) {
            alert(error);
            console.log("Appwrite -- createAccount() -- ", error);
        }
    }

    // update email
    async updateEmail(email, passowrd){
        try {
            return this.account.updateEmail(email, passowrd)
        } catch (error) {
            alert(error);
            console.log("appwrite -- updateEmail() -- ",error)
        }
    }
    // create a login session
    async login(email, password){
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            alert(error);
            console.log("Appwrite -- login() -- ", error);
        }
    }

    // get account/currentUser
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            alert(error)
            console.log("Appwrite -- getCurrentUser() -- ", error);
        }
    }
    // log the user out
    async logout(){
        try {
            await this.account.deleteSession('current');
        } catch (error) {
            alert(error);
            console.log("Appwrite -- logout() -- ", error);
        }
    }

    // update password / on forgot password action.
    async accountPassword(){
        try {
            return await this.account.updatePassword()
        } catch (error) {
            alert(error);
            console.log("Appwrite -- accountPassword -- ", error);
        }
    }

    // create document
    // For documentId, choose a custom id or generate a random ID with ID.unique
    async createDocument(databaseId, collectionId, documentId, data){
        try {
            // returns a document object.
           return await this.databases.createDocument(databaseId, collectionId, documentId, data)
        } catch (error) {
            alert(error);
            console.log("Appwrite -- createDocument() -- ", error);
        }
    }

    // update document
    async updateDocument(databaseId, collectionId, documentId, data){
        try {
            return await this.databases.updateDocument(databaseId, collectionId, documentId, data);
        } catch (error) {
            alert(error);
            console.log("Appwrite -- updateDocument() -- ", error);
        }
    }

    // get document 
    async getDocument(databaseId, collectionId, documentId){
        try {
            return this.databases.getDocument(databaseId, collectionId, documentId);
        } catch (error) {
            alert(error);
            console.log("appwrite -- getDocument() -- ", error);
        }
    }

    async deleteDocument(databaseId, collectionId, documentId){
        try {
            return this.databases.deleteDocument(databaseId, collectionId, documentId);
        } catch (error) {
            alert(error);
            console.log("appwrite -- deleteDocument() --", error);
        }
    }

    async listDocument(databaseId, collectionId){
        try {
            return await this.databases.listDocuments(databaseId, collectionId)
        } catch (error) {
            alert(error);
            console.log("appwrite -- listDocument() -- ", error)
        }
    }
}