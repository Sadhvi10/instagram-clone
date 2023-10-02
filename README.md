# Instagram Clone

This application is a replica of Instagram which is owned by [Meta Platforms, Inc](https://en.wikipedia.org/wiki/Meta_Platforms). This clone is built using Javascript frameworks like React, and Next and a CSS utility framework called TailwindCSS. A Javascript library Faker.js is used to produce simulated data for the story functionality of the Instagram-like platform while the Google Cloud console, Firebase is used for authentication and data storage purposes.

## Live Website

https://instagram-clone-version2.vercel.app/

## Features

- Next.js Authentication
- Image Upload Functionality
- Server Side Rendering (SSR)
- Responsive CSS
- Likes & Comments

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  
## Installation

Follow these steps to install and run the project on your local machine:

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: [Install Node.js](https://nodejs.org/)
- **npm (Node Package Manager)**: Included with Node.js

### Clone the Repository

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Sadhvi10/instagram-clone.git

### Start the development server

2. Install npm and start the development server (localhost:3000) using the following command:

   ```bash
   npm i && npm run start

## Usage

### Configuration

To set up and configure this project to work with Firebase, follow these steps:

1. **Firebase Account**: Ensure you have a Firebase account. If you don't have one, you can sign up for free at [Firebase](https://firebase.google.com/).

2. **Firebase Project**:
   - Create a new Firebase project in the Firebase Console.
   - Once your project is created, note down your Firebase Project ID and API Key.

3. **Environment Variables**:
   - In the root directory of this project, create a file named `.env` if it doesn't already exist.
   - Add the following environment variables to the `.env` file:

     ```dotenv
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
     ```

   Replace the placeholders (`your_api_key`, `your_project_id`, `your_sender_id`, `your_app_id`, `your_measurement_id`) with your actual Firebase credentials.



