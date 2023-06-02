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
