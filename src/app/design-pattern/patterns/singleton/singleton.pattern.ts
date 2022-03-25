export class Singleton {
    public counter: number = 0;

    private static _instance: Singleton | null = null;        
    private constructor() { }

    public static get current(): Singleton {
        if (Singleton._instance === null) {
            Singleton._instance = new Singleton();
        }

        return Singleton._instance;
    }
}