export class Role {
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
