import { ref } from 'vue'

const isMobile = ref(window.matchMedia('(max-width: 768px)').matches)

export { isMobile }
