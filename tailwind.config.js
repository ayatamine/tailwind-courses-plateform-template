module.exports = {
    content: [
        "./public/*",
    ],
    theme: {
        extend: {
            colors: {
                'body': '#f5f5f77a',
                'selected-text': '#A3A3FF',
                'theme': '#2e3f73',
                'nav': '#e5e7eb',
                'secondary': '#9191A4',
                'badge': '#3F3F51',
                'input-border': '#fff',
                'input': '#fff',
                'defaut-text-color':'#001f37'
            },
            fontFamily: {
                'cairo': ["'Cairo'", 'sans-serif']
            },
            theme: {
                fontSize: {
                    xs: ['0.775rem', '1.25rem']
                }
            }
        },
    },
    plugins: [],
  }