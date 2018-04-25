import { ISelectOption } from '../formizable/interface/iselect-option';

export class Tag implements ISelectOption {
    constructor(
        public name: string,
    ) { }

    get key(): string {
        return this.name;
    }
    get value(): string {
        return this.name;
    }
}