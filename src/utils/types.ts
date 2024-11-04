export type ObjectType = Record<string, unknown>;

export function withProperties<A, B>(obj: A, properties: B): A & B {
  if (typeof properties === 'object') {
    Object.assign(obj as ObjectType, properties);
  }

  return obj as A & B;
}
