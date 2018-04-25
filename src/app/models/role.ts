import { ISelectOption } from '../formizable/interface/iselect-option';

export class Role implements ISelectOption {
    constructor(
        public id: number,
        public role: string
    ) { }

    get key(): string {
        return this.id.toString();
    }
    get value(): string {
        return this.role;
    }
}
