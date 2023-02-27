type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = [],
): string {
  const result = [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods).reduce((acc, [className, value]) => {
      if (value) {
        acc.push(className);
      }
      return acc;
    }, []),
  ];
  return result.join(' ');
}
