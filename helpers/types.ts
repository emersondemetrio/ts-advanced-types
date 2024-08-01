export type GenericObject = {
    [key: string]: number | string | boolean | null | undefined | GenericObject | GenericObject[];
}
