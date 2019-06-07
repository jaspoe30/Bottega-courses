/// needs title and heading
/// needs tags for both


const headingGenerator = (title, typeOfHeading) => {
   return `
    <h${typeOfHeading}>${title}</h${typeOfHeading}>
   ` 
}

headingGenerator('Greetings', 2);//?  