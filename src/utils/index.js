const compose = (...funcs) => (comp) => funcs.reduceRight((wrapped, f) => f(wrapped), comp);

const formatNum = (num) => num.toLocaleString('de-DE');

export { compose, formatNum };
