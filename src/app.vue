<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <dataTable />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import dataTable from './components/table'

export default {
  name: 'App',
  components: {
    dataTable
  }
}
</script>

