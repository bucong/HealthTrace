<template>
  <div class="delegate-table">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      fit>
      <el-table-column
        prop="rank"
        :label="$t('delegateTable.th1')"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        :label="$t('delegateTable.th2')">
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('delegateTable.th3')"
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="forged"
        :label="$t('delegateTable.th4')">
      </el-table-column>
      <el-table-column
        prop="time"
        :label="$t('delegateTable.th5')">
      </el-table-column>
      <el-table-column
        prop="status"
        :label="$t('delegateTable.th6')">
        <template slot-scope="scope"><span :class="'status'+scope.row.status"></span></template>
      </el-table-column>
      <el-table-column
        prop="productivity"
        :label="$t('delegateTable.th7')">
      </el-table-column>
      <el-table-column
        prop="approval"
        :label="$t('delegateTable.th8')">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "delegate-table",
    data(){
        return {

        }
    },
    props:['tableData']
  }
</script>

<style lang="scss">
  .delegate-table{
    .el-table td:nth-child(2)>.cell{
      color: #3291FF;
    }
    .el-table td>.cell .status1{
      display: inline-block;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #28CF4A;
    }
    .el-table td>.cell .status0{
      display: inline-block;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #C5C7CB;
    }
  }
</style>
