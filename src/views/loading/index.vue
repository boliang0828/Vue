<template>
  <!-- 文件上传-->
  <div class="upload-file">
    <el-upload
      ref="upload"
      multiple
      :limit="5"
      action="http://xxx.xxx.xxx/personality/uploadExcel"
      :file-list="fileList"
      :http-request="uploadFile"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button
        style="margin-left: 133px"
        size="small"
        type="success"
        @click="submitUpload"
        >上传到服务器
      </el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileData: {}, // 文件上传数据（多文件合一）
      fileList: [], // upload多文件数组
      uploadData: {
        fieldData: {
          id: "", // 机构id,
        },
      },
    };
  },

  methods: {
    // 上传文件
    uploadFile(file) {
      console.log(file);
      this.fileData[file.filename] = file.file; // append增加数据
    },

    // 上传到服务器
    submitUpload() {
      let fieldData = this.uploadData.fieldData; // 缓存，注意，fieldData不要与fileData看混

      this.fileData = new FormData(); // new formData对象
      this.$refs.upload.submit(); // 提交调用uploadFile函数
      this.fileData.append("pathId", fieldData.id); // 添加机构id
      this.fileData.append("loginToken", this.loginToken); // 添加token
      console.log(this.fileData);
      // 上传
      // this.post(
      //   this.baseUrlData.url_02 + ":8090/personality/uploadExcel",
      //   this.fileData
      // ).then((response) => {
      //   if (response.data.code === 0) {
      //     this.$message({
      //       message: "上传成功",
      //       type: "success",
      //     });
      //     this.fileList = [];
      //   } else {
      //     this.$message({
      //       message: response.data.desc,
      //       type: "error",
      //     });
      //   }
      // });
    },
  },
};
</script>
