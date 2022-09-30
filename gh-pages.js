var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Kev-Y-Huang/svelte_todo_app.git', // Update to point to your repository  
        user: {
            name: 'Kevin Huang', // update to use your name
            email: 'kev.y.huang@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)