export const formatCurrency = (amount: number): string => {
  return `${amount.toFixed(2)} EUR`;
};

export function formatString(fmt: string, ...args: any[]): string {
  const re = /(%?)(%([ojds]))/g;

  if (args.length) {
    fmt = fmt.replace(re, (match, escaped, _ptn, flag) => {
      let arg = args.shift();

      switch (flag) {
        case "o":
          if (Array.isArray(arg)) {
            arg = JSON.stringify(arg);
          }
          break;
        case "s":
          arg = "" + arg;
          break;
        case "d":
          arg = Number(arg);
          break;
        case "j":
          arg = JSON.stringify(arg);
          break;
        default:
          break;
      }

      if (!escaped) {
        return arg;
      }

      args.unshift(arg);
      return match;
    });
  }

  // arguments remain after formatting
  if (args.length) {
    fmt += " " + args.join(" ");
  }

  // update escaped %% values
  fmt = fmt.replace(/%{2,2}/g, "%");

  return "" + fmt;
}
