export function shuffle(elements: any[]): any[] {
    return elements
        .map(value => ({ value, order: Math.random() }))
        .sort( (a, b) => a.order - b.order)
        .map( ({ value }) => value)
}