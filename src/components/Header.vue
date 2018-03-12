<template lang="html">

<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary" style="padding-left: 0.5rem;">
        <a class="navbar-brand" href="javascript:void(0)"><span class="navbar-toggler-icon"></span></a>
        <router-link :to="{ name: 'Home', params: {} }" class="navbar-brand navbar-custom-text"></router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-success" type="button"><i class="fa fa-user"></i> somsak.sai</button>
                &nbsp;
                <button class="btn btn-danger" type="button"><i class="fa fa-sign-out"></i></button>
            </form>
        </div>
    </nav>
    <div class="container-fluid">
      <div class="row" style="background-color: #dedede; color: #463fc3;">
        <router-link :to="{ name: 'Pending', params: {} }" class="col box">
          งานทั่้งหมด <span class="badge badge-danger">488</span>
        </router-link>
        <router-link :to="{ name: 'Pending', params: { status: 'wait'} }" class="col box">
          รอตรวจสอบ <span class="badge badge-danger">9</span>
        </router-link>
        <router-link :to="{ name: 'Pending', params: { status: 'dw'} }" class="col box">
          งานติดตั้ง DW <span class="badge badge-danger">199</span>
        </router-link>
        <router-link :to="{ name: 'Pending', params: { status: 'design'} }" class="col box">
          งานออกแบบ <span class="badge badge-danger">10</span>
        </router-link>
        <router-link :to="{ name: 'Pending', params: { status: 'create'} }" class="col box">
          งานขยาย <span class="badge badge-danger">150</span>
        </router-link>
        <router-link :to="{ name: 'Pending', params: { status: 'splice'} }" class="col box">
          งานตัดถ่าย <span class="badge badge-danger">120</span>
        </router-link>
      </div>
    </div>

</div>

</template>

<script>

export default {};

</script>

<style lang="css">

.navbar-custom-text:after {
    content: 'Customer Installation Management';
}

@media screen and (max-width: 767px) {
    .navbar-custom-text:after {
        content: 'CIM';
    }
}

.box {
  cursor: pointer;
  padding: 8px;
  text-align: center;
  *vertical-align: middle;
  *display: table-cell;
  border-right: 1px solid #fff;
}

.box:hover {
  text-decoration: none;
}

</style>
