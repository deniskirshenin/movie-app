import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

const ModalContent = styled.div`
    background: rgba(0, 0, 0, 0.85);
    color: #fff;
    padding: 70px;
    border-radius: 5px;
    position: relative;
    width: 30vw;
    margin: 0 auto;

    form {
      display: grid;
      flex-direction: column;
    }

    form > input {
      outline-width: 0;
      height: 40px;
      margin: 0 0 14px 0;
      border-radius: 5px;
      border: none;
      padding: 5px 15px;
    }

    form > button {
      padding: 16px 20px;
      font-size: 1rem;
      color: #fff;
      font-weight: 600;
      border-radius: 5px;
      background-color: #e50914;
      border: none;
      cursor: pointer;
      margin: 20px 0 0 0;
    }

    form > h2 {
      text-align: left;
      margin-bottom: 25px;
    }

    form > h4 {
      text-align: left;
      margin-top: 30px;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    color: #fff;
`;

const GrayText = styled.span`
    color: gray;
`;

function SignupModal({ onClose }) {
  const modalRef = useRef();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (evt) => {
      if(modalRef.current && !modalRef.current.contains(evt.target)) {
        onClose();
      };
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  const register = (evt) => {
    evt.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch(error => {
      alert(error.message);
    });
  };

  const signIn = (evt) => {
    evt.preventDefault();
    
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }
    ).catch(error => 
      alert(error.message));
  }

  return (
    <ModalContainer>
      <ModalContent ref={modalRef}>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <form>
          <h2>Sign In</h2>
          <input ref={emailRef} type="email" placeholder='Enter Email' />
          <input ref={passwordRef} type="password" placeholder='Enter Password' />
          <button type='submit' onClick={signIn}>Sign In</button>
          <h4><GrayText>Doesn't have an account?</GrayText> 
              <span onClick={register}>Sign Up now.</span></h4>
        </form>
      </ModalContent>
      
    </ModalContainer>
  );
};

export default SignupModal;