# Next.js Firebase App

This is a sample Next.js app integrated with Firebase.

## Setup

Before running the app, you need to set up the Firebase configuration. Follow the steps below:

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new Firebase project.

2. In the Firebase project settings, find the **Web** configuration and copy the configuration object.

3. Open the `firebase.js` file located in the project and replace the existing Firebase configuration with the copied configuration.

```javascript
// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Paste your Firebase configuration here
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


## Running the App

To run the Next.js app, follow these steps:

1. Install the dependencies by running the following command in your project directory:
   "npm install"

2. Start the development server by running the following command:

  "npm run dev"
  
3. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the app.

That's it! You have successfully set up the Firebase configuration and can now run the Next.js app by executing `npm run dev`. 


