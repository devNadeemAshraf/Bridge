import { Account, Client, ID } from "appwrite";

type User = "creator" | "editor";

const APPWRITE_PROJECT_NAME = import.meta.env
  .VITE_APPWRITE_PROJECT_NAME as string;
const APPWRITE_PROJECT_ENDPOINT = import.meta.env
  .VITE_APPWRITE_PROJECT_ENDPOINT as string;

class AppWrite {
  client: Client;
  account: Account;

  constructor() {
    this.client = new Client();
    this.client
      .setEndpoint(APPWRITE_PROJECT_ENDPOINT)
      .setProject(APPWRITE_PROJECT_NAME);

    this.account = new Account(this.client);
  }

  signInWithGoogle(user: User) {
    // Universl Sign In Process

    // Segregate this User based on the Account Being Created
    switch (user) {
      case "creator": {
        console.log("Creator Account Created");
        break;
      }

      case "editor": {
        console.log("Editor Account Created");
        break;
      }

      default: {
        return "Invalid User";
      }
    }
  }

  getAppWriteID() {
    return ID;
  }
}

export default new AppWrite();
