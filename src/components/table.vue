<template>
  <v-row>
    <v-col>
      <v-card tile elevation="1">
        <v-data-table :headers="headers" :items="users" item-key="name.full">
          <template #body="{ items }">
            <tbody>
              <tr v-for="(item, index) in items" :key="index">
                <td
                  v-for="(header, index) in headers"
                  :key="index"
                  :class="{ column: selected.includes(header) }"
                  @click="onClickColumn(header, index)"
                >
                  {{ item[header.value] }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
      </v-card>
    </v-col>

    <v-col cols="3">
      <v-card tile elevation="1">
        <v-simple-table>
          <thead>
            <tr>
              <th>Columns Selected</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(column, index) in selected" :key="index">
              <td>{{ column.text }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import getUsers from '../api'

export default {
  name: `data-table`,

  data() {
    return {
      users: [],
      selected: [],
      headers: [
        { text: 'Name', align: 'start', value: 'name' },
        { text: 'Username', align: 'start', value: 'username' },
        { text: 'Phone', align: 'start', value: 'phone' },
        { text: 'Location', align: 'start', value: 'location' },
        { text: 'Email', align: 'start', value: 'email' }
      ]
    }
  },

  async created() {
    this.users = await getUsers()
  },

  methods: {
    onClickColumn(header) {
      this.selected.includes(header)
        ? this.selected.splice(this.selected.indexOf(header), 1)
        : this.selected.push(header)
    }
  }
}
</script>

<style>
table td + td {
  border-left: 1px solid #f4f5f7;
}

th:hover,
td:hover {
  cursor: pointer;
}

tbody tr:hover {
  background-color: #f4f5f799 !important;
}

.column {
  background: #ebecf066;
}
</style>