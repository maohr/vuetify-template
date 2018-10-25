<template>
  <v-app dark>
    <v-navigation-drawer
      width="220"
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-group
            :key="index"
            v-if="item.children"
            :append-icon="item.model ? item.icon : item['icon-alt']"
            :prepend-icon="item.icon">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{item.title}}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
              v-for="(child, i) in item.children"
              :key="`child-${i}`"
              :to="child.to">
              <v-list-tile-content>
                <v-list-tile-title v-text="child.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile
            v-else
            :key="`item-${index}`"
            router
            :to="item.to"
            exact>
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import menu from "@/api/menu";
export default {
  name: 'layout',
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: menu,
      miniVariant: false,
      title: "DataVerter"
    };
  }
};
</script>
