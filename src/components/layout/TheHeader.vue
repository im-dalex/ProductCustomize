<template>
  <header>
    <nav class="navbar navbar-dark customily-bg-theme">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Welcome marti</span>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  &.customily-bg-theme {
    --bs-bg-opacity: 1;
    background: rgb(119, 98, 226);
    background: linear-gradient(
      90deg,
      rgba(119, 98, 226, 1) 0%,
      rgba(138, 195, 210, 1) 100%
    );
  }
}
</style>
