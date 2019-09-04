declare interface Date {
    weekOfYear: () => number[];
    format: (fmt: string) => string;
    addDay: (day: number) => this;
    ONE_DAY: number;
}
declare function now(format?: string): string;
