export const promptServiceString = (message: string):string => {

    let value = prompt(`${message}`);

    while(value === null){
        value = prompt(`${message}`);
    }
    
    return value;
}

export const promptServiceNumber = (message: string):number => {

    let value = prompt(`${message}`);

    while(value === null){
        value = prompt(`${message}`);
    }
    
    return parseFloat(value);
}

export const promptServiceDate = ():Date => {

    let date: number = promptServiceNumber('Ingrese su fecha de nacimiento (en numero)');
    let month: number = promptServiceNumber('Ingrese su mes de nacimiento (en numero)');
    let year: number = promptServiceNumber('Ingrese su año de nacimiento (en numero)');

    const birthday = new Date(year, month, date);
    
    return birthday;
}

