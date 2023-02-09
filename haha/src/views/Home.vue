<template>
    <div class="home-container">
      <h1 class="home-title">Welcome to movies website</h1>
      <p class="home-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non lacus vel ligula aliquet fermentum. </p>
      <button class="home-button">Learn more</button>
    </div>
  </template>
  
  <style>
    .home-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    
    .home-title {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    
    .home-text {
      font-size: 18px;
      text-align: center;
      margin-bottom: 40px;
    }
    
    .home-button {
      padding: 10px 20px;
      background-color: rgb(29, 24, 24);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
  