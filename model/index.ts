declare module namespace {

    export interface Slot {
        name: string;
        type: string;
        samples: any[];
    }

    export interface Intent {
        name: string;
        samples: string[];
        slots: Slot[];
    }

    export interface RootObject {
        intents: Intent[];
    }

}

