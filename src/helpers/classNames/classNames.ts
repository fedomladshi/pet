type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  const result = [
    cls,
    ...Object.entries(mods).reduce((acc, [cls, value]) => {
      if (value) {
        acc.push(cls);
      }
      return acc;
    }, []),
    ...additional,
  ];
  return result.join(" ");
}
