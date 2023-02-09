<template>
    <div class="video-player">
      <div class="video-frame">
        
      </div>
      <div class="controls">
        <!-- Placeholder for the controls -->
        <input type="range" class="seek-bar" />
      </div>
    </div>
  </template>


<style>

.video-player {
    width: 30%;
    height: 0;
    padding-bottom: 30%;
    position: relative;
  }
  
  .video-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ccc;
  }
  
  .controls {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px;
  }
  
  .seek-bar {
    width: 100%;
    background-color: #ddd;
    height: 10px;
    border-radius: 5px;
    appearance: none;
    outline: none;
  }
  
  .seek-bar::-webkit-slider-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #333;
    appearance: none;
    cursor: pointer;
  }
</style>