export const detectTranslation = (input) => {
    const checkChar = new RegExp(/[A-Za-z0-9!-':-@/]/g);
    return checkChar.test(input);
};
