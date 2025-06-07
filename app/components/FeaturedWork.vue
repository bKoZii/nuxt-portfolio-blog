<template>
  <div>
    <div class="flex flex-col gap-5 rounded-lg">
      <div
        v-for="work in workList"
        :key="work.name"
      >
        <ProjectListItem :work-data="work" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type workListInterface from '~/../types/workListInterface'

const workList: workListInterface[] = [
  {
    name: 'Ionic + Angular - Firebase CRUD ',
    description: 'ชิ้นงาน Ionic ประจำรายวิชา การพัฒนาคลาวด์แอปพลิเคชัน',
    link: 'https://github.com/bKoZii/cloud-konkamon-ionic-angular',
  },

  {
    name: 'Ionic + Vue - Firebase CRUD',
    description: 'ชิ้นงาน Ionic ประจำรายวิชา การพัฒนาคลาวด์แอปพลิเคชัน',
    link: 'https://github.com/bKoZii/cloud-konkamon-ionic-vue',
  },
  {
    name: 'ระบบส่งเสริมการขายร้านสปา',
    description: 'ชิ้นงานวิจัยปริญญาตรี สร้างโดยใช้ PHP',
    link: 'https://github.com/MrLuciana/devaree_project',
  },
]
</script>
