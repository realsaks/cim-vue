<template lang="html">
  <div>
    <div>
      <table class="table table-pending" id="myTable" width="100%">
        <thead>
          <tr>
            <th >NO.</th>
            <th>GenSO</th>
            <th>คำขอ</th>
            <th>เลขหมาย</th>
            <th>เลขคำขอ</th>
            <th>ชื่อลูกค้า</th>
            <th>DSLAM</th>
            <th>วันที่ PAID</th>
            <th>วันที่ ON Node</th>
            <th>สถานะ</th>
            <th>ค้างจากวัน PAID</th>
            <th>Usage time</th>
            <th>นัดลูกค้า</th>
            <th>Zone</th>
            <th>อำเภอ</th>
            <th>ประเภท</th>
            <th>Router S/N</th>
            <th>สถานะงาน</th>
            <th>จ่ายงาน</th>
            <th>Worker</th>
            <th>แจ้งปัญหา</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td align="center">1</td>
            <td style="white-space: nowrap;">2018-01-02</td>
            <td style="white-space: nowrap;">New Service</td>
            <td style="white-space: nowrap;">20180323232323</td>
            <td style="white-space: nowrap;">20180323232323</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function(){
    this.$nextTick(function() {

       var body = $(document).height();
       var header = $("nav .navbar .navbar-expand-lg").height();
       var header_table = $(".tablesorter-scroller-header").height();
       var footer = $("#footer").height() + 20;
       var height_of_tbody = body - header - header_table - footer - 40;
       $('#myTable').tablesorter({
         theme: 'blue',
         showProcessing: true,
         headerTemplate: '{content}',
         widgets: ['zebra', 'filter', 'scroller'],
         widgetOptions: {
             scroller_height: 300,
             scroller_fixedColumns: 6,
             scroller_rowHighlight: 'hover',
             filter_hideFilters: true,
         }
       });
    });
  }
}
</script>

<style lang="css">

 .table-pending thead tr th {
   text-align: center;
   vertical-align: middle;
 }

</style>
