document.addEventListener(
	"click",
	function (event) {
		// If the clicked element doesn't have the right selector, bail
		if (!event.target.matches(".submit")) return;

		// Don't follow the link
		event.preventDefault();

		// Log the clicked element in the console
		othername();
		// console.log(event.target);
	},
	false
);

function othername() {
	var input = document.getElementById("email").value;
	firebase
		.auth()
		.sendSignInLinkToEmail(input, actionCodeSettings)
		.then(function () {
			// The link was successfully sent. Inform the user.
			// Save the email locally so you don't need to ask the user for it again
			// if they open the link on the same device.
			window.localStorage.setItem("emailForSignIn", email);
		})
		.catch(function (error) {
			console.log(error);
			// Some error occurred, you can inspect the code: error.code
		});
}

var actionCodeSettings = {
	// URL you want to redirect back to. The domain (www.example.com) for this
	// URL must be whitelisted in the Firebase Console.
	url: "https://keen-meitner-72c40f.netlify.app/",
	// url: "file:///C:/Users/Ayush/Desktop/Projects/email%20firebase/welcome.html",
	// url: "https://blissful-dijkstra-2adef4.netlify.app/",
	// This must be true.
	handleCodeInApp: true,
	// iOS: {
	// 	bundleId: "com.example.ios",
	// },
	// android: {
	// 	packageName: "com.example.android",
	// 	installApp: true,
	// 	minimumVersion: "12",
	// },
	// dynamicLinkDomain: "example.page.link",
};
