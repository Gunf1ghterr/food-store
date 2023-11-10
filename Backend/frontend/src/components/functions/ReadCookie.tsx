export const ReadCookie = (name: string): string | null => {
  const name_cook: string = name + "=";
  const spl: string[] = document.cookie.split(";");

  for (var i = 0; i < spl.length; i++) {
    let c: string = spl[i];

    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(name_cook) === 0) {
      return c.substring(name_cook.length, c.length);
    }
  }

  return null;
};
