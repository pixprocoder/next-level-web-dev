// You maybe thinking what is coding? it's as easy as you may not be imagine. it is easy for me not for everyone so just keep that in mind.
// Everyone is different in their situations and circumstances maybe it can vary person to person.
// Don't compare yourself to others. so you will be more happy and more productive in life :)
 

const monitor = 'dell'
let monitor2 = 'asus'
// monitor2 = 'lg'

interface User  {
    name: string,
    age: number,
    job: string
}

const friends: User = {
    name: 'rahat',
    age: 33,
    job: 'programmer'
}

// Composing Types
type WindowState = 'open' | 'close' | 'minimize'

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj];
    }
    return obj;
  }