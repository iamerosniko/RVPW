export class AppSettings {
    private static CURRENT_URL = "http://localhost:61157/api/"; 
    //public static CURRENT_URL = "https://x.azurewebsites.net/api/"; 
    //public static CURRENT_URL = "https://x.azurewebsites.net/api/"; 
    public static GETAPIURL(controller:string):string{
        return this.CURRENT_URL+controller;
    }
    public static handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

    