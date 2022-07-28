<template>
  <div class="container py-2">
    <ul class='breadcrumb'>
      <li class='breadcrumb-item' v-for="bread in breadcumbList" :key='bread.name'>
        <router-link exact :active-class="router.path !== bread.path ? 'd-none': '' " :to='`/${bread.path}`'>
          {{ bread.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { useRouter } from "vue-router";
  const router = useRouter();

  const breadcumbList = router.currentRoute.value.matched[0].children;
</script>
