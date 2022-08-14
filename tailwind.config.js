module.exports = {
    content: [
        "./public/*",
    ],
    theme: {
        extend: {
            colors: {
                'body': '#f0f5fb',
                'selected-text': '#A3A3FF',
                'theme': '#2e6d90',
                'nav': '#e5e7eb',
                'secondary': '#474645',
                'badge': '#ff5672',
                // 'input-border': '#fff',
                // 'input': '#fff',
                'defaut-text-color':'#474547',
                'btn-bg' :'#ff5672',
                'main-hover-color' :'#ff5672',
                'darken-bg':'#252841'

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