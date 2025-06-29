module.exports = {
  testDir: './',
  use: {
    headless: true,  
  },
  timeout: 30000,
  reporter: [
    ['list'],
    ['allure-playwright']
  ]
  };