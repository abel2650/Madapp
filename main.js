const app = Vue.createApp({
    data() {
        return {
            intro: 'Velkommen til Food App',
        }
    }
});

app.component('recipe-list', {
    data() {
        return {
            recipes: [
                { title: 'Spaghetti Carbonara', description: 'En klassisk italiensk ret.', image: 'https://example.com/spaghetti.jpg' },
                { title: 'Tacos', description: 'Mexicanske tacos med oksekød.', image: 'https://example.com/tacos.jpg' },
                { title: 'Sushi', description: 'Lækre sushi ruller med laks.', image: 'https://example.com/sushi.jpg' }
            ]
        }
    },
    template: `
        <div>
            <h2>Opskriftsliste</h2>
            <div class="recipe-list">
                <div v-for="recipe in recipes" :key="recipe.title" class="recipe-card">
                    <img :src="recipe.image" alt="Billede af {{ recipe.title }}" />
                    <h3>{{ recipe.title }}</h3>
                    <p>{{ recipe.description }}</p>
                </div>
            </div>
        </div>
    `
});

app.mount('#app');
