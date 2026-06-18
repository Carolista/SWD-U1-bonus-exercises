/** OBJECTS REPRESENTING ELEMENTS */

const head = document.querySelector('head');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

/** GLOBAL DATA **/

const companyName = 'River City Printing Company';
const year = new Date().getFullYear();

const sharedHeadElements = `
    <meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${companyName}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700&family=Cormorant+SC:wght@500&family=Marcellus+SC&family=Lily+Script+One&family=Michroma&family=Zen+Tokyo+Zoo&display=swap"
        rel="stylesheet" />
    <link href="styles.css" type="text/css" rel="stylesheet" />
`;

const sharedHeaderElements = `<h1>&starf; ${companyName} &starf;</h1>`;

const sharedFooterElements = `
        <p>
            &copy;${year} ${companyName}, LLC<br />
            123 Main Street &starf; St. Louis, MO 63101<br />
            314-555-6789 &starf; info@rivercityprintingstl.com
        </p>
    `;

/** INJECT SHARED ELEMENTS */

head.innerHTML = sharedHeadElements + head.innerHTML; // prepend

if (header) {
	header.innerHTML = sharedHeaderElements;
}

if (footer) {
	footer.innerHTML = sharedFooterElements;
}
