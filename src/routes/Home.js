import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import MainWrapper from '../components/MainWrapper';
import IntakeOptions from '../components/IntakeOptions';

export default function Home() {
    return (
      <MainWrapper>
        <IntakeOptions></IntakeOptions>
      </MainWrapper>
    );
  }