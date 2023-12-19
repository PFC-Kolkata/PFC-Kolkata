/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{vue,js}",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    
    animatedSettings: {
            animatedSpeed: 1000,
            heartBeatSpeed: 500,
            hingeSpeed: 2000,
            bounceInSpeed: 750,
            bounceOutSpeed: 750,
            animationDelaySpeed: 500,
            classes: ['bounce', 'heartBeat', 'animate__fadeInTopLeft', 'animate__fadeInTopRight']
        }
    
    
    
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animatecss'),
  ]
}

