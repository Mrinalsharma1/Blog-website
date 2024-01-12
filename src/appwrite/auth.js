import conf from "../conf/conf";

import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //call for login
                return this.login({ email, password })
            }
            else {
                return userAccount;
            }
        } catch (error) {
            console.error("Appwrite Services :: createAccount :: error", error)
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            console.error("Appwrite Services :: login :: error", error)
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();

        } catch (error) {
            throw error
        }
        return null
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("appwrite Services :: logout :: error", error)
        }
    }
}

const authService = new AuthService()

export default authService;