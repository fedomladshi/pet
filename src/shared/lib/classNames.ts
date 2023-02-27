type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods?: Mods,
  additional?: string[],
): string {
  const result = [
    cls,
    ...Object.entries(mods).reduce((acc, [className, value]) => {
      if (value) {
        acc.push(className);
      }
      return acc;
    }, []),
    ...additional.filter(Boolean),
  ];
  return result.join(' ');
}
