import React from 'react';
import styled from 'styled-components';
import Robot from '../assets/robot.gif';

function Welcome({ currentUser }) {
  if (!currentUser || !currentUser.username) {
    return <LoadingComponent />; // Handle loading state or return null
  }

  return (
    <Container className='flex justify-center items-center flex-col font-bold text-white'>
      <img className='h-80' src={Robot} alt="robot" />
      <h1>
        Welcome{' '}
        <span className='text-cyan-500 font-extrabold'>
          {currentUser.username}
        </span>
      </h1>
      <h3>Please select a chat to Chatify</h3>
    </Container>
  );
}

const LoadingComponent = () => {
  return <div>Loading...</div>; // Handle loading state
};

export default Welcome;

const Container = styled.div``;
