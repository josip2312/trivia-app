<template>
    <header class="header">
        <div class="container">
            <router-link :to="{ name: 'Index' }" class="logo">
                Trivia App</router-link
            >
            <nav class="nav">
                <router-link :to="{ name: 'Index' }" class="nav-link" href="#">
                    Home
                </router-link>
                <router-link
                    :to="{ name: 'ChooseCategory' }"
                    class="nav-link"
                    href="#"
                >
                    Categories
                </router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'TheHeader',
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--secondary-500);
    z-index: 100;
}

.logo {
    font-size: 2rem;
    font-weight: bold;
    color: var(--accent-light);
    padding: 0.5rem 0;
    margin: 1rem 0;
}
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.nav {
    display: flex;
    align-items: center;

    & > * + * {
        margin-left: 3.5rem;
    }

    .nav-link {
    }
}
</style>
