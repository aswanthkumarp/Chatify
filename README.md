# Chatify

Chatify is a real-time chat application that allows users to create accounts, log in, set their avatars using the Multiavatar API, and engage in real-time messaging with other registered contacts.

## Features

- **User Authentication**: Users can create an account, log in securely, and maintain their profiles.
- **Avatars from Multiavatar API**: Set custom avatars using the Multiavatar API for a unique profile picture.
- **Real-time Messaging**: Engage in live chat with contacts using Socket.IO for instant communication.
- **Emojis**: Users can send emojis using the `emoji-picker-react` module to add a bit of fun to their messages.
- **Contacts List**: View all registered contacts in the app.

## Dependencies

### Server (Node.js)

- **bcrypt**: Password hashing for enhanced security.
- **cors**: Enabling Cross-Origin Resource Sharing for API calls.
- **dotenv**: Allowing environmental variables in a `.env` file for configuration.
- **express**: Node.js framework for creating APIs.
- **mongoose**: Elegant MongoDB object modeling for Node.js.
- **socket.io**: Real-time bidirectional event-based communication.

### Client (React)

- **@emoji-mart/data**: Data library for emoji-mart.
- **@emoji-mart/react**: React components for emoji-mart.
- **axios**: HTTP client for making API requests.
- **buffer**: For handling binary data in the browser.
- **emoji-picker-react**: Library for picking emojis in React applications.
- **react**: Core library for building UI components.
- **react-dom**: Provides DOM-specific methods for React.
- **react-icons**: Library to use icons in React components.
- **react-router-dom**: Routing for React applications.
- **react-toastify**: For displaying notification messages.
- **socket.io-client**: Socket.IO client for real-time communication.
- **styled-components**: CSS-in-JS library for styling components.
- **uuid**: Library for generating RFC-compliant UUIDs.

### Development Dependencies

- **@types/react**, **@types/react-dom**: TypeScript types for React and ReactDOM.
- **@vitejs/plugin-react-swc**, **eslint**: Development tooling for Vite and ESLint.
- **autoprefixer**, **postcss**, **tailwindcss**: For styling, prefixing, and managing styles.
- **eslint-plugin-react**, **eslint-plugin-react-hooks**, **eslint-plugin-react-refresh**: ESLint plugins for React development.

## Setup Instructions

### Server Setup

1. Install dependencies: `npm install`
2. Start the server: `npm start`

### Client Setup

1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`

## How to Use

- Register or log in to start messaging your contacts.
- Set up your profile and enjoy real-time messaging and emoji fun.

  
  ## Working Image
  ![Screenshot 2023-10-31 232800](https://github.com/aswanthkumarp/Chatify/assets/122904133/4bbb04ce-6abe-48f2-8443-8fdb6273b5d0)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

