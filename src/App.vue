<template>
  <div id="app">
    <Layout>
      <!-- header -->
      <Header slot="header">
        <Nav />
      </Header>
      <!-- /header | main-->
      <Main slot="main">
        <router-view/>
      </Main>
      <!-- /main | footer -->
      <Footer slot="footer">
        <Copyright />
      </Footer>
      <!-- /footer -->
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Layout from '@layouts/MainLayout.vue'
import Header from '@layouts/Header.vue'
import Main from '@layouts/Main.vue'
import Footer from '@layouts/Footer.vue'
import Nav from '@components/MainNav.vue'
import Copyright from '@components/Copyright.vue'

export default Vue.extend({
  name: 'app',
  components: {
    Layout,
    Header,
    Main,
    Footer,
    Nav,
    Copyright,
  },
})
</script>
