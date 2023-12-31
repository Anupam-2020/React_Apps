import conf from "../conf/config";
import { Client, Account, ID} from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        // eslint-disable-next-line no-useless-catch
        try {
            const currUser = await this.account.get();
            if(currUser) return currUser;
            else return null;
        } catch (error) {
            console.log(error);
        }
    }

    async logout() {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.deleteSessions();
        } catch(error) {
            console.log(error);
        }
        return null;
    }
}

const authService = new AuthService();
export default authService;