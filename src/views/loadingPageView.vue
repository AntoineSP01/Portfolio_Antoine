<script>
export default {
  data() {
    return {
      progress: 0,
    };
  },
  methods: {
    simulateLoading() {
      const interval = setInterval(() => {
        this.progress += 10;
        if (this.progress >= 100) {
          clearInterval(interval);
          // Une fois la barre de progression remplie, redirigez vers la page principale.
          this.$router.push('/');
        }
      }, 10000);
    },
  },

};
</script>


<template>
    <div class="loading-page">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>
</template>
  
<style scoped>
.loading-page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.progress-bar {
    height: 20px;
    background-color: red; 
}
</style>
  