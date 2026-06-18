const companyName = 'River City Printing Company';
const year = new Date().getFullYear();

const header = document.querySelector('header');
const footer = document.querySelector('footer');

if (header) {
	header.innerHTML = `<h1>&starf; ${companyName} &starf;</h1>`;
}

if (footer) {
	footer.innerHTML = `
		<p>
			&copy; ${year} ${companyName}, LLC<br />
			123 Main Street &starf; St. Louis, MO 63101<br />
			314-555-6789 &starf; info@rivercityprintingstl.com
		</p>
	`;
}
