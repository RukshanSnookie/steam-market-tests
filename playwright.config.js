module.exports = {
  testDir: './tests',  
  use: {
    headless: true,  
  },
  timeout: 30000,
  reporter: [
    ['list'],
    ['allure-playwright']
  ]
  };