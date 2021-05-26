<template>
  <main-layout showSubHeader>
    <p class="title">
      <span style='direction: rtl;'>ריחמה תעצהב היפצ - תכרעמל הסינכ</span>
      <img src="../assets/user.png" alt="user" />
    </p>

    <p dir="rtl">שבת — суббота</p>
    <p class="subtitle">
      שדח דוק תחילש לע ץחל דוק תלביק אל םא ,הסינכה דוק תא ןזה
    </p>
    <BasicInput title="שמתשמ םש" clearBtn />
    <BasicInput title="אמסיס" />
    <div class="buttons">
      <BasicButton backBtn titleBtn="אמסיס" />
      <BasicButton
        @click-btn="$emit('change-route', 'OrderPage')"
        colorClass="green"
        titleBtn="אמסיס"
      />
    </div>
  </main-layout>
</template>

<script>
export default {
  name: "LogInPage",
  components: {
    BasicInput: () => import("@/components/BasicElements/BasicInput.vue"),
    MainLayout: () => import("@/components/MainLayout.vue"),
    BasicButton: () => import("@/components/BasicElements/BasicButton"),
  },
}
</script>

<style>
p {
  color: #fff;
}
.title {
  width: 70%;
  border-bottom: 5px solid #fff;
  text-align: right;
  font-size: 48px;
}
.subtitle {
  font-size: 24px;
}
.buttons {
  display: flex;
}
</style>
